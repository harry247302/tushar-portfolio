export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className={`${eyebrow ? "mt-3" : ""} font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl`}
      >
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
