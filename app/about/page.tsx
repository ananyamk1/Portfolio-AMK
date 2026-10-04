import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { aboutPageStyles as s } from "@/styles/dummyStyles";
import { profile, education } from "@/data/portfolio";
import { MailIcon } from "../components/Icons";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.backgroundContainer}>
          <div className={s.contentWrapper}>
            <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h1 className={s.mainHeading}>About me</h1>
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={160}
                height={200}
                className="h-48 w-36 rounded-2xl object-cover object-top ring-1 ring-zinc-700 sm:h-56 sm:w-44"
                priority
              />
            </div>

            <div className={s.interestsContainer}>
              {profile.interests.map((item, i) => (
                <span key={item} className={s.interestItem}>
                  {item}
                  {i < profile.interests.length - 1 && <span className={s.interestSeparator}>•</span>}
                </span>
              ))}
            </div>

            <div className={s.techStackContainer}>
              {profile.techStack.map((t) => (
                <span key={t} className={s.techPill}>{t}</span>
              ))}
            </div>

            <div className={s.sectionsContainer}>
              <section>
                <h2 className={s.sectionHeading}>Who I am</h2>
                {profile.about.map((para, i) => (
                  <p key={i} className={s.paragraph}>{para}</p>
                ))}
              </section>

              <section>
                <h2 className={s.sectionHeading}>Education</h2>
                {education.map((e) => (
                  <p key={e.school} className={s.paragraph}>
                    <span className="font-semibold text-zinc-200">{e.degree}</span>, {e.school} — {e.period}
                    <br />
                    <span className="text-sm">{e.detail}</span>
                  </p>
                ))}
              </section>

              <section>
                <h2 className={s.sectionHeading}>What I&apos;m doing now</h2>
                <p className={s.paragraph}>
                  See my <Link href="/experience" className={s.contentLink}>experience</Link> and{" "}
                  <Link href="/projects" className={s.contentLink}>projects</Link> for what I&apos;ve been building.
                </p>
              </section>
            </div>

            <div className={s.ctaContainer}>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className={s.primaryButton}>
                  Download resume
                </a>
              )}
              <Link href="/contact" className={s.secondaryButton}>
                <MailIcon className={s.emailIcon} /> Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
