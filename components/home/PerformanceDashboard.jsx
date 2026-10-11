import { reported } from "@/data/results";

const rows = [
  reported.revenueRange,
  reported.roasRange,
  reported.augustLeads,
  reported.augustSpend,
  reported.impressions,
];

export default function PerformanceDashboard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex flex-col gap-2 border-b border-line px-5 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">Performance dashboard</p>
          <p className="mt-2 font-display text-xl font-semibold">Read each row on its own</p>
        </div>
        <p className="max-w-sm text-xs leading-5 text-muted">Not an export from one Ads Manager date range.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <caption className="sr-only">Reported marketing figures with their reporting periods</caption>
          <thead className="text-[11px] uppercase tracking-[0.16em] text-muted">
            <tr className="border-b border-line">
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Figure
              </th>
              <th scope="col" className="px-5 py-3 font-medium">
                Metric
              </th>
              <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                Reporting period
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.value + row.label} className="border-b border-line last:border-0">
                <td className="px-5 py-4 font-display text-lg font-semibold text-accent sm:px-6">{row.value}</td>
                <td className="px-5 py-4 text-ink">{row.label}</td>
                <td className="px-5 py-4 text-muted sm:px-6">{row.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
