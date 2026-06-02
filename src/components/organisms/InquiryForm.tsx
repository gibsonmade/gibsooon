"use client";

import { useMemo, useState } from "react";
import { inquiryQuestions } from "@/lib/content";
import { inquiryEmail } from "@/lib/contact";

export function InquiryForm() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    company: "",
    website: ""
  });

  const mailtoHref = useMemo(() => {
    const lines = [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Company: ${contact.company}`,
      `Website: ${contact.website}`,
      "",
      ...inquiryQuestions.flatMap((question, index) => [
        `${index + 1}. ${question}`,
        answers[question] || "",
        ""
      ])
    ];

    return `mailto:${inquiryEmail}?subject=${encodeURIComponent(
      `Project inquiry from ${contact.name || "a founder"}`
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [answers, contact]);

  return (
    <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["name", "Name"],
          ["email", "Email"],
          ["company", "Company"],
          ["website", "Website"]
        ].map(([key, label]) => (
          <label className="grid gap-2" key={key}>
            <span className="font-mono text-xs uppercase tracking-[0.18em]">{label}</span>
            <input
              className="min-h-12 border border-ink bg-transparent px-4 text-base outline-none transition focus:border-cosmic focus:ring-4 focus:ring-cosmic/15 dark:border-paper"
              onChange={(event) => setContact((current) => ({ ...current, [key]: event.target.value }))}
              type={key === "email" ? "email" : "text"}
              value={contact[key as keyof typeof contact]}
            />
          </label>
        ))}
      </div>
      {inquiryQuestions.map((question, index) => (
        <label className="grid gap-2" key={question}>
          <span className="font-mono text-xs uppercase tracking-[0.18em]">
            0{index + 1} / {question}
          </span>
          <textarea
            className="min-h-32 resize-y border border-ink bg-transparent px-4 py-3 text-base leading-7 outline-none transition focus:border-cosmic focus:ring-4 focus:ring-cosmic/15 dark:border-paper"
            onChange={(event) => setAnswers((current) => ({ ...current, [question]: event.target.value }))}
            value={answers[question] || ""}
          />
        </label>
      ))}
      <a
        className="inline-flex min-h-14 items-center justify-center border border-ink bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-paper shadow-hard transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cosmic dark:border-paper dark:bg-paper dark:text-ink"
        href={mailtoHref}
      >
        Open email draft
      </a>
      <p className="text-sm leading-6 text-ink/58 dark:text-paper/58">
        V1 uses your email app to send the inquiry. A server-side form provider is already queued in the backlog.
      </p>
    </form>
  );
}
