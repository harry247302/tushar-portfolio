import { reported } from "@/data/results";

export const caseStudies = [
  {
    slug: "shubcure-ayurveda",
    name: "Shubcure Ayurveda",
    industry: "Ayurveda",
    filter: "Ayurveda",
    featured: true,
    seo: "Meta ads case study for Shubcure Ayurveda. Reported revenue, ROAS, August leads, and spend stay in their own reporting periods.",
    summary:
      "Performance marketing for an Ayurveda brand: Meta ads, creative testing, and optimization judged against leads, ROAS, and fulfilled orders.",
    overview:
      "Shubcure Ayurveda is the featured project. The engagement covered Meta advertising for lead generation and sales, creative testing, and the reporting needed to see spend next to revenue and delivery. The figures on this page come from more than one reporting window. Each one is labeled. None of them should be read as a single combined campaign.",
    services: ["Meta Ads", "Lead generation", "Creative testing", "Tracking and P&L"],
    cardResults: [reported.revenueRange, reported.roasRange, reported.augustLeads],
    results: [
      reported.revenueRange,
      reported.roasRange,
      reported.augustLeads,
      reported.augustSpend,
      reported.momGrowth,
      reported.orders,
      reported.delivery,
    ],
    sections: [
      {
        title: "Campaign objectives",
        paragraphs: [
          "The commercial job was to generate demand for Ayurveda products and to see whether ad spend was producing leads and revenue the business could recognize. Efficiency mattered as much as volume.",
        ],
        bullets: [
          "Generate leads and support sales through Meta campaigns.",
          "Review ROAS, CPL, CPC, CPM, and CTR before changing budgets.",
          "Keep a reporting view that includes revenue, ad spend, and delivery, not media metrics alone.",
        ],
      },
      {
        title: "Audience and creative testing",
        paragraphs: [
          "Audiences and creatives were tested against the same commercial goal. New hooks and formats had to earn their place on CTR and on the cost of the lead or sale that followed. Variants that stopped earning attention, or that produced expensive leads, were paused.",
          "Specific audience names, ad scripts, and winning percentages were not supplied for this write-up, so they are not reconstructed here.",
        ],
      },
      {
        title: "Campaign optimization",
        paragraphs: [
          "Optimization was a repeating review of structure, placements, creative, and budget. The working set of metrics was CPL, CPC, CPM, CTR, and ROAS, checked against what the business recorded in revenue and delivery.",
          "Measurement used Meta Ads together with GA4, Google Tag Manager, the Meta Pixel, and the Conversions API. Excel and Google Sheets held P&L views for revenue, ad spend, ROI, and delivery tracking.",
        ],
      },
      {
        title: "Budget scaling",
        paragraphs: [
          "Budgets moved toward campaigns that held efficiency and away from those that did not. The only spend figure supplied for publication is from the reported August campaign: ₹1.57 lakh or more, before GST and applicable taxes.",
          "That August spend is not the spend behind the ₹12L–₹14L monthly revenue range, and it is not the spend behind every ROAS figure. Those ranges are labeled as results across reported periods.",
        ],
      },
    ],
    lessons: [
      "A lead count and a revenue range from different months cannot be presented as one ROAS story.",
      "Delivery rate belongs in the review. The reported 52% delivery rate means orders and fulfilled orders are not the same number.",
      "Creative testing needs a stop rule. Attention that does not produce an efficient lead should not keep its budget.",
      "A spreadsheet that shows spend, revenue, and delivery makes the media report harder to misread.",
    ],
  },
  {
    slug: "unix-ayurveda",
    name: "Unix Ayurveda",
    industry: "Ayurveda",
    filter: "Ayurveda",
    featured: false,
    seo: "Unix Ayurveda: WordPress development, Meta ads, lead generation, and a reported 7x+ ROAS. Spend and revenue were not supplied.",
    summary:
      "WordPress website development plus Meta ads for lead generation and sales, with creative testing and audience optimization.",
    overview:
      "Unix Ayurveda combined a WordPress marketing site with Meta campaigns for leads and sales. The published performance figure for this project is a reported 7x+ ROAS. Spend, revenue, and conversion totals were not supplied, so this page does not estimate them or borrow figures from Shubcure Ayurveda.",
    services: ["WordPress", "Meta Ads", "Lead generation", "Creative testing"],
    cardResults: [reported.unixRoas],
    results: [reported.unixRoas],
    sections: [
      {
        title: "WordPress website development",
        paragraphs: [
          "The Ayurveda brand website was developed on WordPress so campaigns had a destination: a clear offer, a path to enquire or buy, and pages the team could keep updated.",
        ],
      },
      {
        title: "Meta Ads management",
        paragraphs: [
          "Meta campaigns on Facebook and Instagram were planned and managed for the brand. Account decisions covered structure, budgets, and the creatives in rotation.",
        ],
      },
      {
        title: "Lead generation and sales campaigns",
        paragraphs: [
          "Campaigns were built for two jobs: bringing in leads and supporting sales. Ad creatives were made for those outcomes rather than for awareness on its own.",
        ],
      },
      {
        title: "Creative testing",
        paragraphs: [
          "Creatives were tested and replaced based on how they behaved in the auction and what they cost to produce a lead or sale. Individual ad variants and win rates were not supplied.",
        ],
      },
      {
        title: "Audience optimization",
        paragraphs: [
          "Targeting was refined alongside creative and budget. Audiences that held an acceptable cost stayed active. The ones that did not were narrowed or paused.",
        ],
      },
      {
        title: "Reported ROAS",
        paragraphs: [
          "The reported result for this project is 7x+ ROAS from campaign optimization. That figure is a reported outcome. It is not a forecast, and it is not linked here to a spend or revenue total, because those totals were not provided.",
        ],
      },
    ],
    lessons: [],
  },
  {
    slug: "vishnu-murti-trust",
    name: "Vishnu Murti Trust",
    industry: "Nonprofit",
    filter: "Nonprofit",
    featured: false,
    seo: "Website, donations, SEO, social media, and YouTube work for Vishnu Murti Trust. Donation and traffic totals are not estimated.",
    summary:
      "A nonprofit website with donation functionality, search-friendly structure, social media, and video for YouTube.",
    overview:
      "Vishnu Murti Trust needed a working digital presence: a website people could understand and donate through, a structure search engines could read, and a social and video practice around the organization's work. Donation amounts, traffic, and video view counts were not supplied and are not estimated.",
    services: ["WordPress", "Donations", "SEO", "Social and video"],
    cardResults: [],
    results: [],
    sections: [
      {
        title: "NGO website development",
        paragraphs: [
          "The organization's website was developed on WordPress. The information architecture was meant for visitors who need to understand the trust and find a next step, including how to support it.",
        ],
      },
      {
        title: "Donation functionality",
        paragraphs: [
          "The site included a way for visitors to make a donation. The payment provider, donation total, and average gift were not supplied, so none of those are stated.",
        ],
      },
      {
        title: "SEO-friendly structure",
        paragraphs: [
          "Pages were structured with clear headings, descriptive titles, and a hierarchy a search engine and a first-time visitor can follow. No ranking positions are claimed.",
        ],
      },
      {
        title: "Local search optimization",
        paragraphs: [
          "Local search work focused on making the organization's location and purpose explicit on the site, so nearby queries had a relevant page to land on. Map-pack positions were not supplied.",
        ],
      },
      {
        title: "Social media management",
        paragraphs: [
          "Social channels were managed so the trust had a consistent public presence alongside the website. Follower counts are not shown because they were not provided.",
        ],
      },
      {
        title: "Video creation and YouTube publishing",
        paragraphs: [
          "Videos were created and published on YouTube as part of the content work. View counts and subscriber totals were not supplied.",
        ],
      },
    ],
    lessons: [],
  },
  {
    slug: "brand-on-top-hisharder",
    name: "Brand On Top & Hisharder",
    industry: "Web & SEO",
    filter: "Web & SEO",
    featured: false,
    seo: "WordPress and SEO for Brand On Top and Hisharder: keyword research, landing pages, Analytics, and Search Console. Rankings are not estimated.",
    summary:
      "WordPress development and SEO for two brands, covering keyword research, landing pages, analytics, and speed and conversion improvements.",
    overview:
      "This engagement covered Brand On Top and Hisharder as one web and SEO project: WordPress development, search strategy, and the measurement setup around the sites. Ranking positions, traffic, and revenue were not supplied. They are not estimated, and advertising results from other projects are not applied here.",
    services: ["WordPress", "SEO", "Landing pages", "Analytics"],
    cardResults: [],
    results: [],
    sections: [
      {
        title: "WordPress website development",
        paragraphs: [
          "The websites were developed on WordPress with a structure that could hold service or product pages, not a single brochure page with nowhere for search or ads to land.",
        ],
      },
      {
        title: "SEO strategy",
        paragraphs: [
          "The SEO work organized what each site should be found for and which pages should carry those topics. It was a planning and implementation engagement, not a promise of positions.",
        ],
      },
      {
        title: "Keyword research",
        paragraphs: [
          "Keyword research mapped queries to pages so titles, headings, and internal links had a job. The keyword list itself is client work and is not published here.",
        ],
      },
      {
        title: "Landing page optimization",
        paragraphs: [
          "Landing pages were adjusted so the message matched the query or campaign sending the visit, with a clearer next step. Conversion-rate lifts are not stated because before-and-after rates were not supplied.",
        ],
      },
      {
        title: "Google Analytics and Search Console",
        paragraphs: [
          "Google Analytics and Search Console were part of the measurement setup, so traffic sources and queries could be reviewed against the pages that existed. Snapshot numbers from those tools were not supplied.",
        ],
      },
      {
        title: "Website speed and conversion improvements",
        paragraphs: [
          "Speed and conversion were treated as part of the same page problem: a slow or unclear page wastes the visit. Specific load-time scores and conversion percentages were not supplied, so none are invented.",
        ],
      },
    ],
    lessons: [],
  },
];

export const caseStudyFilters = ["All", "Ayurveda", "Nonprofit", "Web & SEO"];

export function getCaseStudy(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
