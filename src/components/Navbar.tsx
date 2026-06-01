'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/notes', label: 'Notes' },
  { href: '/cv', label: 'CV' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800/50 bg-neutral-950/80 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-semibold text-base tracking-tight hover:no-underline"
          style={{ textDecoration: 'none' }}
        >
          <span className="gradient-text">RC</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'nav-link-active text-white' : 'text-neutral-400 hover:text-neutral-200'}`}
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-neutral-300 transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-300 transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-neutral-300 transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-neutral-800/50 bg-neutral-950/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4 gap-3 text-sm">
            {links.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-1 ${isActive ? 'text-white font-medium' : 'text-neutral-400 hover:text-neutral-200'}`}
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}