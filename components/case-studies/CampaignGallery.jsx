"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function CampaignGallery({ images = [], title = "Campaign screenshots" }) {
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !active) return undefined;
    if (!dialog.open) dialog.showModal();
    return undefined;
  }, [active]);

  if (!images.length) return null;

  function close() {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    setActive(null);
  }

  return (
    <div>
      <ul className="grid gap-5">
        {images.map((image) => (
          <li key={image.src}>
            <figure className="overflow-hidden rounded-3xl border border-line bg-[#0c111b]">
              <button
                type="button"
                className="block w-full p-3 text-left"
                onClick={() => setActive(image)}
                aria-haspopup="dialog"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full object-contain"
                />
                <span className="sr-only">Expand screenshot</span>
              </button>
              <figcaption className="border-t border-line px-5 py-4 text-sm leading-6 text-muted">{image.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {active ? (
        <dialog
          ref={dialogRef}
          aria-labelledby={titleId}
          className="w-[min(1100px,calc(100%-2rem))] max-w-none rounded-2xl border border-line bg-canvas p-4 text-ink backdrop:bg-black/75"
          onClose={() => setActive(null)}
          onClick={(event) => {
            if (event.target === dialogRef.current) close();
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <p id={titleId} className="text-sm font-semibold">
              {title}
            </p>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line"
              aria-label="Close screenshot"
            >
              <X aria-hidden="true" size={18} />
            </button>
          </div>
          <Image
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            className="mt-4 h-auto max-h-[75vh] w-full object-contain"
          />
          <p className="mt-4 text-sm leading-6 text-muted">{active.caption}</p>
        </dialog>
      ) : null}
    </div>
  );
}
