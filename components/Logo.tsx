export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="7" fill="currentColor" className="text-pacific-600" />
        <path d="M5 18c3-3 6-3 9 0s6 3 9 0" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M5 12c3-3 6-3 9 0s6 3 9 0" stroke="white" strokeOpacity="0.6" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
      <span>Sutro Pacific</span>
    </span>
  );
}
