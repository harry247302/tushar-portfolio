import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: "Location", value: profile.location, href: null, icon: MapPin },
];

export default function ContactDetails() {
  return (
    <div>
      <p className="text-sm leading-6 text-muted">
        {profile.name}. {profile.role}.
      </p>
      <ul className="mt-6 space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <Icon aria-hidden="true" size={16} className="mt-0.5 text-accent" />
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">{item.label}</span>
                <span className="mt-1 block text-sm text-ink">{item.value}</span>
              </span>
            </>
          );
          return (
            <li key={item.label}>
              {item.href ? (
                <a href={item.href} className="flex gap-3 rounded-2xl border border-line bg-card px-4 py-4">
                  {content}
                </a>
              ) : (
                <div className="flex gap-3 rounded-2xl border border-line bg-card px-4 py-4">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex min-h-11 items-center rounded-2xl border border-line bg-surface px-4 text-sm font-semibold text-accent"
      >
        LinkedIn profile
      </a>
    </div>
  );
}
