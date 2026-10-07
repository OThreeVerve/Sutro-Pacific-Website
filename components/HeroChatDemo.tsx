"use client";

import { useEffect, useRef, useState } from "react";
import { heroScript, type ScriptStep } from "@/lib/content";

type Thread = ScriptStep["thread"];
type Typing = { thread: Thread; from: ScriptStep["from"] } | null;

const THREADS: Record<Thread, { name: string; role: string; avatar: string }> = {
  alex: { name: "Alex Dominguez", role: "Maintenance Lead", avatar: "/demo/alex.jpg" },
  samantha: { name: "Samantha Phillips", role: "Admin · Approver", avatar: "/demo/samantha.jpg" },
};

// Typing time scales with message length so it reads naturally.
const typingMs = (text: string) => Math.min(2200, 700 + text.length * 14);
const PAUSE_AFTER_MS = 900;

export function HeroChatDemo() {
  const [shown, setShown] = useState(0); // number of script steps revealed
  const [typing, setTyping] = useState<Typing>(null);

  // Plays once on page load, then stays on the finished conversation.
  useEffect(() => {
    // Respect reduced-motion: show the whole conversation, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(heroScript.length);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 600;
    heroScript.forEach((step, i) => {
      timers.push(setTimeout(() => setTyping({ thread: step.thread, from: step.from }), t));
      t += typingMs(step.text);
      timers.push(
        setTimeout(() => {
          setTyping(null);
          setShown(i + 1);
        }, t),
      );
      t += PAUSE_AFTER_MS;
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const visible = heroScript.slice(0, shown);
  const lastThread: Thread | null = typing?.thread ?? visible[visible.length - 1]?.thread ?? null;
  const samanthaOpen = visible.some((s) => s.thread === "samantha") || typing?.thread === "samantha";

  // Which window is centered on mobile. Follows the conversation, unless the visitor swipes or taps
  // to the other window; that choice holds until the conversation moves to the other person.
  const [userFocus, setUserFocus] = useState<Thread | null>(null);
  useEffect(() => setUserFocus(null), [lastThread]);
  const autoFocus: Thread = samanthaOpen && lastThread === "samantha" ? "samantha" : "alex";
  const focus: Thread = samanthaOpen && userFocus ? userFocus : autoFocus;

  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const isCarousel = () => !window.matchMedia("(min-width: 768px)").matches;
  const show = (t: Thread) => {
    if (samanthaOpen && isCarousel()) setUserFocus(t);
  };

  return (
    <div
      // Mobile: a carousel. Both windows share one grid cell; the focused one is centered and the
      // other slides aside so its edge peeks in. Swipe or tap the peeking edge to switch.
      // md and up: two windows side by side.
      className="relative -mx-4 grid touch-pan-y overflow-hidden py-6 sm:-mx-6 md:mx-0 md:flex md:flex-row md:items-start md:justify-center md:gap-5 md:overflow-visible md:py-0"
      aria-label="Example: Sutro coordinating a work order by text"
      onTouchStart={(e) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) show(dx < 0 ? "samantha" : "alex");
      }}
    >
      <ChatWindow
        thread="alex"
        steps={visible.filter((s) => s.thread === "alex")}
        typing={typing?.thread === "alex" ? typing.from : null}
        active={lastThread === "alex"}
        onSelect={focus !== "alex" ? () => show("alex") : undefined}
        className={`${focus === "alex" ? "translate-x-0" : "-translate-x-[calc(100%+12px)]"} md:w-[330px] md:translate-x-0`}
      />
      {/* Always rendered so the layout never shifts; hidden until Sutro contacts Samantha. */}
      <ChatWindow
        key={`sam-${samanthaOpen}`}
        thread="samantha"
        steps={visible.filter((s) => s.thread === "samantha")}
        typing={typing?.thread === "samantha" ? typing.from : null}
        active={lastThread === "samantha"}
        onSelect={focus !== "samantha" ? () => show("samantha") : undefined}
        className={`${focus === "samantha" ? "translate-x-0" : "translate-x-[calc(100%+12px)]"} md:mt-24 md:w-[330px] md:translate-x-0 ${
          samanthaOpen ? "window-in" : "invisible"
        }`}
      />

      {/* Carousel position dots (mobile only). */}
      <div className={`mt-4 flex justify-center gap-2 [grid-area:2/1] md:hidden ${samanthaOpen ? "" : "invisible"}`}>
        {(["alex", "samantha"] as Thread[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => show(t)}
            aria-label={`Show ${THREADS[t].name}'s conversation`}
            aria-pressed={focus === t}
            className={`h-2 rounded-full transition-all duration-300 ${focus === t ? "w-6 bg-pacific-600" : "w-2 bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

function ChatWindow({
  thread,
  steps,
  typing,
  active,
  onSelect,
  className = "",
}: {
  thread: Thread;
  steps: ScriptStep[];
  typing: ScriptStep["from"] | null;
  active: boolean;
  onSelect?: () => void;
  className?: string;
}) {
  const who = THREADS[thread];
  const bodyRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false); // fade the top edge once earlier messages are hidden
  const stickToBottom = useRef(true); // false while the visitor has scrolled up to read

  // Messages start at the top; once the window fills, keep the newest message in view,
  // unless the visitor has scrolled up to read earlier messages.
  useEffect(() => {
    const el = bodyRef.current;
    if (!el || !stickToBottom.current) return;
    if (el.scrollHeight > el.clientHeight + 1) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [steps.length, typing]);

  const onScroll = () => {
    const el = bodyRef.current;
    if (!el) return;
    setScrolled(el.scrollTop > 4);
    stickToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
  };

  return (
    <div
      onClick={onSelect}
      className={`mx-10 flex-none rounded-2xl ${onSelect ? "cursor-pointer md:cursor-auto" : ""} border bg-white shadow-2xl shadow-slate-900/10 transition-all duration-500 [grid-area:1/1] md:mx-0 ${
        active ? "border-pacific-500/40 ring-4 ring-pacific-500/10" : "border-slate-200"
      } ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={who.avatar} alt={who.name} width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{who.name}</p>
          <p className="truncate text-xs text-slate-500">{who.role} · Strive Inc.</p>
        </div>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">SMS</span>
      </div>
      <div
        ref={bodyRef}
        onScroll={onScroll}
        tabIndex={0}
        aria-label={`Messages with ${who.name}`}
        className={`chat-scroll flex h-[440px] flex-col justify-start gap-2.5 overflow-y-auto px-4 py-4 focus:outline-none ${
          scrolled ? "chat-fade" : ""
        }`}
      >
        {steps.map((s, i) => (
          <Bubble key={`${thread}-${i}`} step={s} />
        ))}
        {typing ? <TypingDots from={typing} /> : null}
      </div>
    </div>
  );
}

function Bubble({ step }: { step: ScriptStep }) {
  const agent = step.from === "agent";
  return (
    <div className={`bubble-in flex ${agent ? "justify-start" : "justify-end"}`}>
      <div className="max-w-[85%]">
        {agent ? <p className="mb-1 text-[11px] font-medium text-pacific-600">Sutro</p> : null}
        <div
          className={
            agent
              ? "rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2 text-sm text-ink"
              : "rounded-2xl rounded-br-sm bg-pacific-600 px-3 py-2 text-sm text-white"
          }
        >
          {step.photo ? <PhotoTile src={step.photo} /> : null}
          {step.text}
        </div>
      </div>
    </div>
  );
}

function PhotoTile({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Photo from the job site" width={160} height={120} className="mb-2 block h-[120px] w-40 rounded-lg object-cover" />
  );
}

function TypingDots({ from }: { from: ScriptStep["from"] }) {
  const agent = from === "agent";
  return (
    <div className={`flex ${agent ? "justify-start" : "justify-end"}`} aria-hidden="true">
      <div
        className={`flex gap-1 rounded-2xl px-3 py-3 ${
          agent ? "rounded-bl-sm bg-slate-100" : "rounded-br-sm bg-pacific-600"
        }`}
      >
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className={`typing-dot h-1.5 w-1.5 rounded-full ${agent ? "bg-slate-400" : "bg-white/80"}`}
            style={{ animationDelay: `${d * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
