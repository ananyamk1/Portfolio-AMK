import type { Metadata } from "next";
import { contactPageStyles as s } from "@/styles/dummyStyles";
import { profile, socials } from "@/data/portfolio";
import { socialIcons } from "../components/Icons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <h1 className={s.headerTitle}>Get in touch</h1>
          <p className={s.headerSubtitle}>
            I&apos;m open to full-time roles and collaborations. Send a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className={s.contactMethodsGrid}>
          {socials.map(({ label, href, icon }) => {
            const Icon = socialIcons[icon];
            const value = icon === "mail" ? profile.email : href.replace(/^https?:\/\//, "");
            return (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={s.contactCard}>
                <div className={s.contactIconContainer}>
                  <Icon className={s.contactIcon} />
                </div>
                <div className="min-w-0">
                  <p className={s.contactLabel}>{label}</p>
                  <p className={`${s.contactValue} truncate`}>{value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <ContactForm />

        <p className={s.alternativeText}>
          Prefer email?{" "}
          <a href={`mailto:${profile.email}`} className={s.alternativeLink}>{profile.email}</a>
        </p>
      </div>
    </div>
  );
}
