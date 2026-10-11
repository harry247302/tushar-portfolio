"use client";

import { useState } from "react";

const charts = [
  {
    id: "revenue",
    label: "Revenue range",
    title: "Monthly revenue, ₹12L to ₹14L",
    caption:
      "The band is the reported monthly revenue range across Shubcure periods. It is not two named months and it is not tied to the August ad spend.",
  },
  {
    id: "roas",
    label: "ROAS range",
    title: "ROAS, 7.5x to 7.8x",
    caption: "The band is the reported Shubcure ROAS range across periods. Unix Ayurveda’s 7x+ ROAS is a separate result.",
  },
  {
    id: "delivery",
    label: "Delivery rate",
    title: "Reported delivery rate, 52%",
    caption: "52% is the reported delivery rate alongside 10,000+ monthly orders. It is not an August-only figure.",
  },
];

function RevenueChart() {
  return (
    <svg viewBox="0 0 640 180" role="img" aria-label="Range from 12 lakh to 14 lakh rupees on a scale of 10 to 16 lakh" className="h-auto w-full">
      <line x1="40" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="8" strokeLinecap="round" />
      <line x1="227" y1="90" x2="413" y2="90" stroke="#A3FF6F" strokeWidth="8" strokeLinecap="round" />
      <text x="28" y="130" fill="#A0A9BA" fontSize="14">
        ₹10L
      </text>
      <text x="204" y="56" fill="#A3FF6F" fontSize="14">
        ₹12L
      </text>
      <text x="390" y="56" fill="#A3FF6F" fontSize="14">
        ₹14L
      </text>
      <text x="560" y="130" fill="#A0A9BA" fontSize="14">
        ₹16L
      </text>
    </svg>
  );
}

function RoasChart() {
  return (
    <svg viewBox="0 0 640 180" role="img" aria-label="ROAS range from 7.5x to 7.8x on a scale of 7x to 8x" className="h-auto w-full">
      <line x1="40" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="8" strokeLinecap="round" />
      <line x1="320" y1="90" x2="488" y2="90" stroke="#63D8FF" strokeWidth="8" strokeLinecap="round" />
      <text x="32" y="130" fill="#A0A9BA" fontSize="14">
        7x
      </text>
      <text x="300" y="56" fill="#63D8FF" fontSize="14">
        7.5x
      </text>
      <text x="456" y="56" fill="#63D8FF" fontSize="14">
        7.8x
      </text>
      <text x="580" y="130" fill="#A0A9BA" fontSize="14">
        8x
      </text>
    </svg>
  );
}

function DeliveryChart() {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const filled = circumference * 0.52;
  return (
    <svg viewBox="0 0 220 180" role="img" aria-label="Reported delivery rate of 52 percent" className="mx-auto h-auto w-full max-w-xs">
      <circle cx="110" cy="90" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="12" />
      <circle
        cx="110"
        cy="90"
        r={radius}
        fill="none"
        stroke="#A3FF6F"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${circumference - filled}`}
        transform="rotate(-90 110 90)"
      />
      <text x="110" y="96" textAnchor="middle" fill="#F5F7FA" fontSize="28" fontFamily="sans-serif">
        52%
      </text>
    </svg>
  );
}

const panels = {
  revenue: RevenueChart,
  roas: RoasChart,
  delivery: DeliveryChart,
};

export default function ReportingCharts() {
  const [active, setActive] = useState(charts[0].id);
  const current = charts.find((chart) => chart.id === active);
  const Panel = panels[active];

  return (
    <div className="rounded-3xl border border-line bg-card p-5 sm:p-6">
      <div role="group" aria-label="Reported figure charts" className="flex flex-wrap gap-2">
        {charts.map((chart) => {
          const selected = chart.id === active;
          return (
            <button
              key={chart.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(chart.id)}
              className={`min-h-11 rounded-full border px-4 text-sm ${
                selected ? "border-accent bg-accent text-canvas" : "border-line text-ink"
              }`}
            >
              {chart.label}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="mt-6">
        <h3 className="font-display text-xl font-semibold">{current.title}</h3>
        <div className="mt-4">
          <Panel />
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">{current.caption}</p>
      </div>
    </div>
  );
}
