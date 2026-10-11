export default function MetricCard({ value, label, period }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-5 transition duration-200 hover:border-accent/30">
      <p className="font-display text-3xl font-semibold tracking-tight text-accent sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm font-semibold text-ink">{label}</p>
      {period ? <p className="mt-2 text-xs leading-5 text-muted">{period}</p> : null}
    </div>
  );
}
