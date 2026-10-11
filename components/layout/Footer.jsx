import Link from "next/link";
import { footerGroups, profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{profile.role}</p>
          <p className="mt-4 text-sm text-muted">{profile.location}</p>
        </div>
        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{group.title}</p>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 text-xs leading-5 text-muted sm:px-6 lg:px-8">
          <p>© 2026 {profile.name}. Performance marketing portfolio.</p>
          <p>
            Reported campaign figures stay in their original reporting periods. Meta, Google, and client brand names
            belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
