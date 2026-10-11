"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { navLinks, secondaryLinks } from "@/data/profile";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileMenu({ open, onClose }) {
  const pathname = usePathname();
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    return undefined;
  }, [open]);

  const items = navLinks.flatMap((link) => (link.children ? link.children : [link]));

  return (
    <dialog
      ref={dialogRef}
      id="mobile-menu"
      className="mobile-nav xl:hidden"
      aria-label="Mobile"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="sticky top-0 flex items-center justify-between border-b border-line bg-canvas px-5 py-4">
        <p className="font-display text-sm font-semibold tracking-tight">Menu</p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line"
          aria-label="Close menu"
        >
          <X aria-hidden="true" size={18} />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
        <ul className="space-y-1">
          {items.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-xl px-3 text-base font-medium ${
                    active ? "bg-white/10 text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">Also</p>
        <ul className="mt-3 space-y-1">
          {secondaryLinks.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-xl px-3 text-base font-medium ${
                    active ? "bg-white/10 text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </dialog>
  );
}
