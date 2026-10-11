"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { navLinks } from "@/data/profile";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const caseRef = useRef(null);

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
    setCaseOpen(false);
  }

  useEffect(() => {
    if (!caseOpen) return undefined;
    function onPointerDown(event) {
      if (!caseRef.current?.contains(event.target)) setCaseOpen(false);
    }
    function onKeyDown(event) {
      if (event.key === "Escape") setCaseOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [caseOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-full" aria-label="Tushar Sharma, home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-accent/40 bg-accent/10 font-display text-xs font-semibold text-accent">
            TS
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight">Tushar Sharma</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            if (link.children) {
              const active = isActive(pathname, link.href);
              return (
                <div
                  key={link.href}
                  ref={caseRef}
                  className="relative"
                  onMouseEnter={() => setCaseOpen(true)}
                  onMouseLeave={() => setCaseOpen(false)}
                >
                  <div className={`flex items-center rounded-full ${active ? "bg-white/10" : ""}`}>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={`rounded-full py-2 pr-1 pl-3 text-sm ${active ? "text-accent" : "text-muted hover:text-ink"}`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex h-9 w-8 items-center justify-center rounded-full text-muted hover:text-ink"
                      aria-expanded={caseOpen}
                      aria-controls="case-study-menu"
                      aria-label="Show case studies"
                      onClick={() => setCaseOpen((value) => !value)}
                    >
                      <ChevronDown aria-hidden="true" size={16} />
                    </button>
                  </div>
                  {caseOpen ? (
                    <div id="case-study-menu" className="absolute top-full left-0 z-50 pt-3">
                      <ul className="w-72 rounded-2xl border border-line bg-surface p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                        {link.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={childActive ? "page" : undefined}
                                className={`block rounded-xl px-3 py-2.5 text-sm ${
                                  childActive ? "bg-white/10 text-accent" : "text-ink hover:bg-white/5"
                                }`}
                                onClick={() => setCaseOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            }

            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm ${active ? "bg-white/10 text-accent" : "text-muted hover:text-ink"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact" className="hidden sm:inline-flex">
            Start a project
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" size={18} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
