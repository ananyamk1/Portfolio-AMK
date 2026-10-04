import type { Metadata } from "next";
import { timelineStyles as s } from "@/styles/dummyStyles";
import { experience, education, achievements, profile } from "@/data/portfolio";
import { BriefcaseIcon, GradIcon, LayersIcon } from "../components/Icons";

export const metadata: Metadata = { title: "Experience" };

const colors = {
  blue: { box: s.iconContainerBlue, icon: s.iconBlue, bullet: s.bulletBlue, text: s.textBlue },
  purple: { box: s.iconContainerPurple, icon: s.iconPurple, bullet: s.bulletPurple, text: s.textPurple },
  green: { box: s.iconContainerGreen, icon: s.iconGreen, bullet: s.bulletGreen, text: s.textGreen },
  amber: { box: s.iconContainerAmber, icon: s.iconAmber, bullet: s.bulletAmber, text: s.textAmber },
  rose: { box: s.iconContainerRose, icon: s.iconRose, bullet: s.bulletRose, text: s.textRose },
  emerald: { box: s.iconContainerEmerald, icon: s.iconEmerald, bullet: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500", text: s.textEmerald },
};

export default function ExperiencePage() {
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.timelineBadge}>
          <span className={s.timelineBadgeText}>Career timeline</span>
        </div>
        <h1 className={s.mainTitle}>Experience</h1>
        <p className={s.mainParagraph}>Where I&apos;ve worked and what I&apos;ve built along the way.</p>

        <div className="mt-12 space-y-6">
          {experience.map((job) => {
            const c = colors[job.color];
            return (
              <div key={job.company + job.role} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
                <div className={s.itemContainer}>
                  <div className={s.itemFlexContainer}>
                    <div className={c.box}>
                      <BriefcaseIcon className={c.icon} />
                    </div>
                    <div className="flex-1">
                      <h2 className={s.contentTitle}>{job.role}</h2>
                      <p className={s.contentSubtitle}>
                        <span className={c.text}>{job.company}</span> · {job.period} · {job.location}
                      </p>
                    </div>
                  </div>
                  <ul className={s.list}>
                    {job.bullets.map((b, i) => (
                      <li key={i} className={s.listItem}>
                        <span className={c.bullet} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={s.techBadgesContainer}>
                    {job.tech.map((t) => (
                      <span key={t} className={s.techBadge}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className={s.itemFlexContainer}>
              <div className={s.iconContainerAmber}>
                <GradIcon className={s.iconAmber} />
              </div>
              <div>
                <h2 className={s.contentTitle}>Education</h2>
                {education.map((e) => (
                  <div key={e.school} className="mt-2">
                    <p className="text-sm font-medium text-zinc-200">{e.degree} — {e.school}</p>
                    <p className={s.contentSubtitle}>{e.period}</p>
                    <p className={s.contentText}>{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={s.achievementGrid}>
            {achievements.map((a) => (
              <div key={a.title} className={s.achievementCard}>
                <p className={s.achievementCardTitle}>{a.title}</p>
                <p className={s.achievementCardValue}>{a.value}</p>
                <p className={s.achievementCardSub}>{a.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <LayersIcon className={s.techSectionIcon} />
            </div>
            <div>
              <h2 className={s.techSectionTitle}>Technologies</h2>
              <p className={s.techSectionSubtitle}>What I work with day to day</p>
            </div>
          </div>
          <div className={s.techGrid}>
            {profile.techStack.map((t) => (
              <div key={t} className={s.techCard}>
                <p className={`${s.techCardTitle} text-zinc-200`}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
