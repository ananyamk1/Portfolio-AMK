"use client";

import { useState } from "react";
import { contactPageStyles as s } from "@/styles/dummyStyles";
import { profile } from "@/data/portfolio";
import { SendIcon } from "../components/Icons";

// The site is static (GitHub Pages has no server), so the form opens the
// visitor's email app with the message pre-filled.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.subject || `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const label = (key: keyof typeof form, text: string) => (
    <label
      htmlFor={key}
      className={`${s.formLabelBase} ${focused === key || form[key] ? s.formLabelFocused : s.formLabelUnfocused}`}
    >
      {text}
    </label>
  );

  const field = (key: keyof typeof form, text: string, type = "text", required = true) => (
    <div className={s.formFieldContainer}>
      <input
        id={key}
        type={type}
        required={required}
        placeholder={text}
        value={form[key]}
        onChange={update(key)}
        onFocus={() => setFocused(key)}
        onBlur={() => setFocused(null)}
        className={s.formInput}
      />
      {label(key, text)}
    </div>
  );

  return (
    <form onSubmit={onSubmit} className={s.formContainer}>
      <div className={s.formGrid}>
        {field("name", "Name")}
        {field("email", "Email", "email")}
      </div>
      {field("subject", "Subject", "text", false)}
      <div className={s.formFieldContainer}>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Message"
          value={form.message}
          onChange={update("message")}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          className={s.formTextarea}
        />
        {label("message", "Message")}
      </div>
      <div className={s.submitButtonContainer}>
        <button type="submit" className={s.submitButton}>
          <span className={s.submitButtonText}>
            Send message <SendIcon className={s.submitButtonIcon} />
          </span>
        </button>
      </div>
    </form>
  );
}
