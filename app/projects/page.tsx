import type { Metadata } from "next";
import { projectStyles as s } from "@/styles/dummyStyles";
import { projects } from "@/data/portfolio";
import ProjectCard from "../components/ProjectCard";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <div className={s.header}>
          <h1 className={s.pageTitle}>Projects</h1>
          <p className={s.pageSubtitle}>Things I&apos;ve built — AI systems, data pipelines, and dashboards.</p>
        </div>
        <div className={s.projectsGrid}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
