import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectDetailStyles as s } from "@/styles/dummyStyles";
import { projects, profile } from "@/data/portfolio";
import { ArrowLeftIcon, ExternalIcon, GithubIcon } from "../../components/Icons";
import { ProjectImage } from "../../components/ProjectCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project", description: project?.description };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const active = project.status === "active";

  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <div className="mb-8">
          <Link href="/projects" className={s.backButton}>
            <ArrowLeftIcon className={s.backIcon} /> Back to projects
          </Link>
        </div>

        <div className={s.projectHeader}>
          <div className={s.headerFlex}>
            <div className={s.headerLeft}>
              <div className={s.titleContainer}>
                <h1 className={s.projectTitle}>{project.title}</h1>
                <span className={`${s.statusBadge} ${active ? s.statusActive : s.statusInactive}`}>
                  {active ? "Active" : "Archived"}
                </span>
              </div>
              <p className={s.projectDescription}>{project.description}</p>
              <div className={s.tagsContainer}>
                {project.tags.map((t) => (
                  <span key={t} className={s.tag}>{t}</span>
                ))}
              </div>
              <div className={s.actionButtonsContainer}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={s.visitButton}>
                    <ExternalIcon className="h-4 w-4" /> Visit live
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={s.secondaryButton}>
                    <GithubIcon className="h-4 w-4" /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="group relative mb-12 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <ProjectImage project={project} className="object-cover" />
        </div>

        <div className={s.gridContainer}>
          <div className={s.mainContent}>
            <section>
              <h2 className={s.sectionTitle}>Highlights</h2>
              <div className={s.featuresGrid}>
                {project.details.map((d, i) => (
                  <div key={i} className={s.featureCard}>
                    <div className={s.featureCardInner}>
                      <div className={s.featureIconContainer}>
                        <div className={s.featureIcon} />
                      </div>
                      <p className={`${s.featureText} text-sm leading-relaxed`}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className={s.sidebar}>
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Tech stack</h3>
              <div className={s.techStackContainer}>
                {project.tags.map((t) => (
                  <span key={t} className={s.techStackItem}>{t}</span>
                ))}
              </div>
            </div>
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Project info</h3>
              <div className={s.projectInfoContainer}>
                <div>
                  <p className={s.projectInfoLabel}>Author</p>
                  <p className={s.authorName}>{profile.name}</p>
                </div>
                <div>
                  <p className={s.projectInfoLabel}>Year</p>
                  <p className={s.projectInfoText}>{project.year}</p>
                </div>
                <div>
                  <p className={s.projectInfoLabel}>Status</p>
                  <p className={s.projectInfoText}>{project.status}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
