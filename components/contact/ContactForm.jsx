"use client";

import { useId, useState } from "react";
import { profile } from "@/data/profile";

const budgets = ["Under ₹25,000", "₹25,000–₹75,000", "₹75,000–₹2,00,000", "₹2,00,000+", "Not sure yet"];

const initial = {
  name: "",
  email: "",
  company: "",
  budget: "",
  goal: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.company.trim().length < 2) errors.company = "Enter your company name.";
  if (!values.budget) errors.budget = "Select a monthly advertising budget.";
  if (values.goal.trim().length < 3) errors.goal = "Describe the marketing goal.";
  if (values.message.trim().length < 10) errors.message = "Add a message of at least 10 characters.";
  return errors;
}

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/70";

export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setStatus("");
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("");
      return;
    }

    const subject = `Project enquiry from ${values.name.trim()}`;
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Company: ${values.company.trim()}`,
      `Monthly advertising budget: ${values.budget}`,
      `Marketing goal: ${values.goal.trim()}`,
      "",
      values.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Your email app should open with this message addressed to ${profile.email}. Nothing is stored on a server. If the app does not open, send the email directly.`,
    );
  }

  const errorEntries = Object.entries(errors);

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-card p-5 sm:p-7" aria-describedby={`${formId}-note`}>
      <p id={`${formId}-note`} className="text-sm leading-6 text-muted">
        This form opens a draft in your email app. It does not send the message to a website server.
      </p>

      {errorEntries.length ? (
        <div role="alert" className="mt-4 rounded-2xl border border-[#ff8f8f]/40 bg-[#ff8f8f]/10 px-4 py-3 text-sm text-[#ffd0d0]">
          <p className="font-semibold">Check the highlighted fields.</p>
          <ul className="mt-2 list-disc pl-5">
            {errorEntries.map(([key, message]) => (
              <li key={key}>{message}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id={`${formId}-name`} label="Full name" name="name" value={values.name} error={errors.name} onChange={update} autoComplete="name" />
        <Field
          id={`${formId}-email`}
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={update}
          autoComplete="email"
        />
        <Field
          id={`${formId}-company`}
          label="Company name"
          name="company"
          value={values.company}
          error={errors.company}
          onChange={update}
          autoComplete="organization"
        />
        <div>
          <label htmlFor={`${formId}-budget`} className="text-sm font-medium">
            Monthly advertising budget
          </label>
          <select
            id={`${formId}-budget`}
            name="budget"
            value={values.budget}
            onChange={update}
            aria-invalid={errors.budget ? "true" : "false"}
            aria-describedby={errors.budget ? `${formId}-budget-error` : undefined}
            className={fieldClass}
          >
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget ? (
            <p id={`${formId}-budget-error`} className="mt-2 text-sm text-[#ffb4b4]">
              {errors.budget}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <Field id={`${formId}-goal`} label="Marketing goal" name="goal" value={values.goal} error={errors.goal} onChange={update} />
      </div>
      <div className="mt-4">
        <label htmlFor={`${formId}-message`} className="text-sm font-medium">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={update}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={fieldClass}
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-2 text-sm text-[#ffb4b4]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-canvas"
      >
        Open email draft
      </button>
      {status ? (
        <p role="status" className="mt-4 text-sm leading-6 text-accent">
          {status}
        </p>
      ) : null}
    </form>
  );
}

function Field({ id, label, name, value, error, onChange, type = "text", autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#ffb4b4]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
