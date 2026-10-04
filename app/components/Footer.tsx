import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-8 text-center text-xs text-zinc-500 md:px-12">
      © {new Date().getFullYear()} {profile.name} · Built with Next.js
    </footer>
  );
}
