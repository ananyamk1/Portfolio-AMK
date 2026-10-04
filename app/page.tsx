import Link from "next/link";
import { homePageStyles as s, pageStyles as p } from "@/styles/dummyStyles";
import { profile, projects, experience } from "@/data/portfolio";
import { ArrowRightIcon, SparkIcon, MailIcon } from "./components/Icons";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const latest = experience[0];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className={`${s.backgroundGrid.wrapper} ${s.backgroundGrid.pattern}`} />
      <div className={s.gradientOverlay} />

      <div className={s.container}>
        <section className={s.heroSection}>
          <h1 className={s.h1}>Hi, I&apos;m {profile.name}</h1>
          <h2 className={s.h2}>{profile.role}</h2>

          <Link href="/experience" className={`${s.calloutCard.wrapper} mb-8 inline-block`}>
            <div className={s.calloutCard.innerContainer}>
              <div className={s.calloutCard.textContainer}>
                <SparkIcon className={s.calloutCard.icon} />
                <span className={s.calloutCard.text}>
                  Currently: {latest.role} @ {latest.company}
                </span>
              </div>
              <span className={s.calloutCard.button}>View</span>
            </div>
          </Link>

          <p className={s.paragraph}>
            {profile.summary} Take a look at my{" "}
            <Link href="/projects" className={s.link}>projects</Link>, read{" "}
            <Link href="/about" className={s.link}>more about me</Link>, or{" "}
            <Link href="/contact" className={s.link}>get in touch</Link>.
          </p>

          <div className={p.techStackContainer}>
            {profile.techStack.map((t) => (
              <span key={t} className={p.techPill}>{t}</span>
            ))}
          </div>

          <div className={p.ctaContainer}>
            <Link href="/projects" className={`${p.ctaButtonPrimary} inline-flex items-center gap-2`}>
              View projects <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/contact" className={p.ctaButtonSecondary}>
              <MailIcon className={p.emailIcon} /> Contact me
            </Link>
          </div>
        </section>

        <section className={`${s.heroSection} mt-20`}>
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-bold text-zinc-100">Featured projects</h3>
            <Link href="/projects" className="text-sm text-zinc-400 hover:text-zinc-100">See all →</Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((proj) => (
              <ProjectCard key={proj.slug} project={proj} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
