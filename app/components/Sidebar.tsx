"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarStyles as s } from "@/styles/dummyStyles";
import { profile, socials } from "@/data/portfolio";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  WrenchIcon,
  MailIcon,
  MenuIcon,
  XIcon,
  socialIcons,
} from "./Icons";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/experience", label: "Experience", icon: BriefcaseIcon },
  { href: "/projects", label: "Projects", icon: FolderIcon },
  { href: "/tools", label: "Tools", icon: WrenchIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1500 : deleting ? 50 : 90;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

function isActive(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  return href === "/" ? path === "/" : path.startsWith(href);
}

export default function Sidebar() {
  const pathname = usePathname();
  const typed = useTyping(profile.taglines);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const avatar = (wrapper: string, img: string, size: number) => (
    <div className={wrapper}>
      <Image src={profile.avatar} alt={profile.name} width={size} height={size} className={img} priority />
    </div>
  );

  const year = new Date().getFullYear();

  return (
    <>
      {/* Mobile top bar */}
      <div className={s.mobileTopNav}>
        <div className={s.mobileTopNavInner}>
          <Link href="/" className={s.mobileAvatarContainer}>
            {avatar(s.mobileAvatar, s.mobileAvatarImage, 40)}
            <div>
              <div className={s.mobileName}>{profile.name}</div>
              <div className={s.mobileTyping}>{typed}&nbsp;</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className={s.desktopSidebar}>
        <Link href="/" className={s.desktopAvatarContainer}>
          {avatar(s.desktopAvatar, s.desktopAvatarImage, 48)}
          <div>
            <div className={s.desktopName}>{profile.name}</div>
            <div className={s.desktopTyping}>{typed}&nbsp;</div>
          </div>
        </Link>

        <nav className={s.navContainer}>
          <ul className={s.navList}>
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${s.navItem} ${isActive(pathname, href) ? s.navItemActive : s.navItemInactive}`}
                >
                  <Icon className={s.navIcon} />
                  <span className={s.navLabel}>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={s.connectLabel}>Connect</div>
          <ul className={s.socialList}>
            {socials.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={s.socialItem}>
                    <Icon className={s.socialIcon} />
                    <span className={s.socialLabel}>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={s.footerText}>© {year} {profile.name}</div>
      </aside>

      {/* Mobile slide-out menu */}
      <div className={`${s.mobileOverlay} ${open ? s.mobileOverlayVisible : s.mobileOverlayHidden}`}>
        <div
          className={`${s.mobileOverlayBg} ${open ? s.mobileOverlayBgVisible : s.mobileOverlayBgHidden}`}
          onClick={() => setOpen(false)}
        />
        <div className={`${s.mobileSidebar} ${open ? s.mobileSidebarVisible : s.mobileSidebarHidden}`}>
          <div className={s.mobileSidebarHeader}>
            <div className={s.mobileHeaderInner}>
              <div className={s.mobileHeaderAvatarContainer}>
                {avatar(s.mobileAvatar, s.mobileAvatarImage, 40)}
                <div>
                  <div className={s.mobileName}>{profile.name}</div>
                  <div className={s.mobileTyping}>{typed}&nbsp;</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className={s.mobileCloseButton} aria-label="Close menu">
                <XIcon className={s.mobileCloseIcon} />
              </button>
            </div>
          </div>

          <div className={s.mobileContent}>
            <div className={s.mobileSectionLabel}>Navigation</div>
            <ul className={`${s.mobileNavList} mb-8`}>
              {navItems.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${s.mobileNavItem} ${isActive(pathname, href) ? s.navItemActive : s.navItemInactive}`}
                  >
                    <Icon className={s.mobileNavIcon} />
                    <span className={s.mobileNavLabel}>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={s.mobileSocialSection}>
              <div className={s.mobileSectionLabel}>Connect</div>
              <ul className={s.mobileSocialList}>
                {socials.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon];
                  return (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" className={s.mobileSocialItem}>
                        <Icon className={s.mobileSocialIcon} />
                        <span className={s.mobileSocialText}>{label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className={s.mobileFooter}>
            <div className={s.mobileFooterLabel}>{profile.location}</div>
            <div className={s.mobileFooterText}>
              <span>© {year} {profile.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className={s.bottomNav}>
        <div className={s.bottomNavContainer}>
          <div className={s.bottomNavInner}>
            <div className={s.bottomNavBar}>
              <div className={s.bottomNavGrid}>
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-label={label}
                    className={`${s.bottomNavLink} ${isActive(pathname, href) ? s.bottomNavLinkActive : s.bottomNavLinkInactive}`}
                  >
                    <Icon className={s.bottomNavIcon} />
                  </Link>
                ))}
              </div>
              <div className={s.bottomNavDivider} />
              <button onClick={() => setOpen(true)} className={s.bottomMenuButton} aria-label="Open menu">
                <MenuIcon className={s.bottomMenuIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
