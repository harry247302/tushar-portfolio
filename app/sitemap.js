import { getSiteUrl } from "@/data/profile";

const paths = [
  "/",
  "/about",
  "/services",
  "/case-studies",
  "/case-studies/shubcure-ayurveda",
  "/case-studies/unix-ayurveda",
  "/case-studies/vishnu-murti-trust",
  "/case-studies/brand-on-top-hisharder",
  "/results",
  "/experience",
  "/skills",
  "/education",
  "/contact",
];

export default function sitemap() {
  const base = getSiteUrl();
  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
