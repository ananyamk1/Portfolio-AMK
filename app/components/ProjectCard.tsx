import Link from "next/link";
import Image from "next/image";
import { projectStyles as s } from "@/styles/dummyStyles";
import type { Project } from "@/data/portfolio";

export function ProjectImage({ project, className }: { project: Project; className: string }) {
  if (project.image) {
    return <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.image}`} alt={project.title} fill className={className} sizes="(min-width: 1024px) 50vw, 100vw" />;
  }
  // Placeholder until a screenshot is added in data/portfolio.ts
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900/60 via-zinc-900 to-purple-900/50 transition-transform duration-500 group-hover:scale-105">
      <span className="px-6 text-center text-2xl font-bold tracking-tight text-zinc-200/90">{project.title}</span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const active = project.status === "active";
  return (
    <div className={s.projectCard}>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className={s.imageContainer}>
          <ProjectImage project={project} className={s.projectImage} />
          <div className={s.statusBadgeContainer}>
            <span className={`${s.statusBadge} ${active ? s.statusActive : s.statusInactive}`}>
              {active ? "Active" : "Archived"}
            </span>
          </div>
        </div>
      </Link>

      <div className={s.contentSection}>
        <Link href={`/projects/${project.slug}`}>
          <h3 className={s.projectTitle}>{project.title}</h3>
        </Link>
        <p className={s.projectDescription}>{project.description}</p>

        <div className={s.tagsContainer}>
          {project.tags.map((t) => (
            <span key={t} className={s.tag}>{t}</span>
          ))}
        </div>

        <div className={s.actionsContainer}>
          <div className={s.actionsLinksContainer}>
            <Link href={`/projects/${project.slug}`} className={s.visitButton}>Details</Link>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={s.otherButton}>Live</a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={s.otherButton}>GitHub</a>
            )}
          </div>
          <span className={s.archivedText}>{project.year}</span>
        </div>
      </div>
    </div>
  );
}
