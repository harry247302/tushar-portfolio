export default function ReportNote({ children }) {
  return (
    <p className="max-w-3xl text-sm leading-6 text-muted">
      {children ||
        "Figures are reported results. Where the reporting period is known, it is written on the figure. Numbers from different periods are not combined into one campaign."}
    </p>
  );
}
