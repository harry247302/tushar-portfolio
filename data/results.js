export const reported = {
  revenueRange: {
    value: "₹12L–₹14L",
    label: "Monthly revenue",
    period: "Shubcure Ayurveda · across reported periods",
  },
  revenueUpper: {
    value: "₹14L",
    label: "Monthly revenue",
    period: "Upper reported Shubcure figure. The range is ₹12L–₹14L across periods, not one campaign.",
  },
  roasRange: {
    value: "7.5x–7.8x",
    label: "ROAS",
    period: "Shubcure Ayurveda · across reported periods",
  },
  roasFloor: {
    value: "7.5x+",
    label: "ROAS",
    period: "Lower end of the reported Shubcure range, 7.5x–7.8x, across periods",
  },
  augustLeads: {
    value: "11,288",
    label: "Leads",
    period: "Shubcure Ayurveda · reported August campaign",
  },
  augustSpend: {
    value: "₹1.57L+",
    label: "Ad spend",
    period: "Shubcure Ayurveda · reported August campaign, before GST and applicable taxes",
  },
  momGrowth: {
    value: "13%",
    label: "Revenue growth",
    period: "Month-over-month in the cited Shubcure reporting period",
  },
  orders: {
    value: "10,000+",
    label: "Monthly orders",
    period: "Reported for Shubcure, together with a 52% delivery rate",
  },
  delivery: {
    value: "52%",
    label: "Delivery rate",
    period: "Reported with Shubcure monthly orders",
  },
  impressions: {
    value: "7.12M+",
    label: "Impressions",
    period: "Reported result. The source material does not name the campaign or month.",
  },
  unixRoas: {
    value: "7x+",
    label: "ROAS",
    period: "Unix Ayurveda · reported result. Spend, revenue, and conversion totals were not supplied.",
  },
};

export const headlineMetrics = [
  reported.revenueUpper,
  reported.augustLeads,
  reported.roasFloor,
  reported.impressions,
];

export const resultGroups = [
  {
    id: "august",
    eyebrow: "One campaign window",
    title: "Shubcure Ayurveda — reported August campaign",
    note: "Leads and ad spend below belong to the reported August campaign. They are not paired with monthly revenue or ROAS from other periods.",
    metrics: [reported.augustLeads, reported.augustSpend],
  },
  {
    id: "ranges",
    eyebrow: "Several reporting windows",
    title: "Shubcure Ayurveda — across reported periods",
    note: "Revenue and ROAS are ranges across reported periods. They are not a single-campaign total and are not the August spend figure.",
    metrics: [reported.revenueRange, reported.roasRange],
  },
  {
    id: "fulfillment",
    eyebrow: "Cited operating results",
    title: "Shubcure Ayurveda — growth and fulfillment",
    note: "Growth, orders, and delivery rate are reported separately from the August lead and spend figures.",
    metrics: [reported.momGrowth, reported.orders, reported.delivery],
  },
  {
    id: "impressions",
    eyebrow: "Period not specified",
    title: "Reported impressions",
    note: "This impression total is shown on its own because the source material does not attach it to a named campaign or month.",
    metrics: [reported.impressions],
  },
  {
    id: "unix",
    eyebrow: "Separate project",
    title: "Unix Ayurveda",
    note: "Only ROAS was supplied for Unix Ayurveda. Spend, revenue, and conversion totals are not estimated.",
    metrics: [reported.unixRoas],
  },
];
