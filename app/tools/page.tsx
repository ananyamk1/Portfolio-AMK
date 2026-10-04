import type { Metadata } from "next";
import Image from "next/image";
import { toolsPageStyles as s } from "@/styles/dummyStyles";
import { tools } from "@/data/portfolio";

export const metadata: Metadata = { title: "Tools" };

export default function ToolsPage() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.headerContainer}>
          <h1 className={s.headerTitle}>Tools</h1>
          <p className={s.headerSubtitle}>Software and AI tools I use to get work done.</p>
        </div>
        <div className={s.toolsGrid}>
          {tools.map((t) => (
            <a key={t.name} href={t.href} target="_blank" rel="noopener noreferrer" className={s.toolCardLink}>
              <div className={s.toolIconContainer}>
                <Image src={t.icon} alt={t.name} width={48} height={48} className={s.toolIcon} />
              </div>
              <div className={s.toolTextContainer}>
                <p className={s.toolName}>{t.name}</p>
                <p className={s.toolCategory}>{t.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
