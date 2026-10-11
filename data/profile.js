export const profile = {
  name: "Tushar Sharma",
  role: "Performance Marketing Expert & Meta Ads Specialist",
  email: "tusharsharma5510@gmail.com",
  phone: "+91 7217679637",
  phoneHref: "tel:+917217679637",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/tushar-sharma-23159a310/",
  resume: "/tushar-sharma-resume.pdf",
  headline: "Turning Ad Spend Into Measurable Business Growth.",
  support:
    "I help businesses generate leads, improve ROAS, and scale advertising campaigns through data-driven Meta Ads strategies, creative testing, and continuous optimization.",
};

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function createMetadata({ title, description, path, absolute = false }) {
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: absolute ? title : `${title} · Tushar Sharma`,
      description,
      url: path,
      type: "website",
    },
  };
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  {
    href: "/case-studies",
    label: "Case Studies",
    children: [
      { href: "/case-studies", label: "All projects" },
      { href: "/case-studies/shubcure-ayurveda", label: "Shubcure Ayurveda" },
      { href: "/case-studies/unix-ayurveda", label: "Unix Ayurveda" },
      { href: "/case-studies/vishnu-murti-trust", label: "Vishnu Murti Trust" },
      { href: "/case-studies/brand-on-top-hisharder", label: "Brand On Top & Hisharder" },
    ],
  },
  { href: "/results", label: "Results" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const secondaryLinks = [
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
];

export const footerGroups = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/case-studies", label: "Case studies" },
      { href: "/results", label: "Campaign results" },
    ],
  },
  {
    title: "Background",
    links: [
      { href: "/experience", label: "Experience" },
      { href: "/skills", label: "Skills" },
      { href: "/education", label: "Education" },
      { href: "/contact", label: "Contact" },
    ],
  },
];
