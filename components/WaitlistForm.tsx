"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success";

export default function WaitlistForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: trimmed, type: "email", timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <p className="font-sans text-lg font-semibold text-brand-deep py-4">
        🎉 You&apos;re on the list! We&apos;ll notify you when StepAhead launches.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <input
        type="email"
        value={value}
        onChange={(e) => { setValue(e.target.value); setError(""); }}
        placeholder="you@example.com"
        aria-label="Email address"
        aria-describedby={error ? "wf-error" : undefined}
        aria-invalid={error ? "true" : "false"}
        className="w-full rounded-xl border border-brand-deep/20 px-4 py-3 font-sans text-sm text-brand-deep placeholder:text-brand-deep/40 focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand-deep/20 md:text-base"
      />
      {error && (
        <p id="wf-error" role="alert" className="font-sans text-sm text-red-600">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-cta w-full font-sans text-base font-bold disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Notify Me"}
      </button>
    </form>
  );
}
