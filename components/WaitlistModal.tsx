"use client";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success";

function detectType(v: string): "email" | "phone" | null {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "email";
  const digits = v.replace(/\D/g, "");
  if (/^\+?[\d\s\-().]+$/.test(v) && digits.length >= 7 && digits.length <= 15)
    return "phone";
  return null;
}

export default function WaitlistModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Listen for open trigger from any button on the page
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("open-waitlist", open);
    return () => window.removeEventListener("open-waitlist", open);
  }, []);

  // Drive native <dialog> open/close via state (avoids stale-ref issue)
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen) {
      el.showModal();
      setTimeout(() => inputRef.current?.focus(), 50);
    } else if (el.open) {
      el.close();
    }
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    setValue("");
    setError("");
    setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    const type = detectType(trimmed);
    if (!type) {
      setError("Enter a valid email address or phone number.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: trimmed, type, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onCancel={close}
      onClick={(e) => { if (e.target === dialogRef.current) close(); }}
      aria-labelledby="wl-title"
      aria-modal="true"
      className="w-full max-w-md rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/60"
    >
      {/* Header */}
      <div className="flex items-start justify-between rounded-t-2xl bg-brand-deep px-8 py-6 text-white">
        <div>
          <h2 id="wl-title" className="font-sans text-2xl font-bold lg:text-3xl">
            Join the Waitlist
          </h2>
          <p className="mt-1 font-sans text-sm text-white/80 md:text-base">
            Be first to know when StepAhead launches.
          </p>
        </div>
        <button
          onClick={close}
          aria-label="Close dialog"
          className="ml-4 mt-0.5 shrink-0 text-2xl leading-none text-white/70 transition hover:text-white"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div className="px-8 py-7">
        {status === "success" ? (
          <p className="py-4 text-center font-sans text-lg font-semibold text-brand-deep md:text-xl">
            🎉 Thanks! We&apos;ll let you know when the app launches.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor="wl-input"
              className="block font-sans text-sm font-semibold text-brand-deep md:text-base"
            >
              Email or Phone Number
            </label>
            <input
              ref={inputRef}
              id="wl-input"
              type="text"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(""); }}
              placeholder="you@example.com or +1 555 000 0000"
              aria-describedby={error ? "wl-error" : undefined}
              aria-invalid={error ? "true" : "false"}
              className="mt-2 w-full rounded-xl border border-brand-deep/20 px-4 py-3 font-sans text-sm text-brand-deep placeholder:text-brand-deep/40 focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-deep/20 md:text-base"
            />
            {error && (
              <p id="wl-error" role="alert" className="mt-1.5 font-sans text-sm text-red-600">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-cta mt-5 w-full font-sans text-base font-bold disabled:opacity-60 md:text-lg"
            >
              {status === "loading" ? "Sending…" : "Notify Me"}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
}
