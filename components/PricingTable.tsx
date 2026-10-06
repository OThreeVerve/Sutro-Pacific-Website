import { monthlyPrice, pricing } from "@/lib/site";

export function PricingTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="px-5 py-3 font-medium">Units under management</th>
            <th className="px-5 py-3 font-medium">Monthly price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {pricing.examples.map((units) => (
            <tr key={units}>
              <td className="px-5 py-3">{units}</td>
              <td className="px-5 py-3 font-semibold">${monthlyPrice(units).toLocaleString("en-US")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
