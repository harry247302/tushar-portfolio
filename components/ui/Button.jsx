import Link from "next/link";

const variants = {
  primary:
    "bg-accent text-canvas hover:bg-[#c8ff9c] shadow-[0_0_28px_rgba(163,255,111,0.16)]",
  secondary: "border border-line bg-white/5 text-ink hover:border-accent/40 hover:bg-white/10",
  ghost: "text-ink hover:text-accent",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition duration-200 ${variants[variant]} ${className}`;

  if (href) {
    const internal = href.startsWith("/") && !href.endsWith(".pdf");
    if (internal) {
      return (
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
