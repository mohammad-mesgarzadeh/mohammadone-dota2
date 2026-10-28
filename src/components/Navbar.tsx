import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '@/data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = 'hero';
      for (const s of sections) {
        if (s.offsetTop <= mid) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-ink-600/40 bg-ink-950/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <button
          onClick={() => go('hero')}
          className="group flex items-center gap-2.5"
          aria-label="MohammadOne home"
        >
          <span className="flex h-8 w-8 items-center justify-center">
            <span className="block h-4 w-4 rotate-45 border border-ember-500 transition-all duration-300 group-hover:scale-125 group-hover:bg-ember-500/20" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.2em] text-gold-300">
            MOHAMMAD<span className="text-ember-500">ONE</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`relative text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                  active === item.id ? 'text-gold-300' : 'text-gold-300/50 hover:text-gold-300'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-ember-500 transition-all duration-300 ${
                    active === item.id ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.dotabuff}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-ember-600/50 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-ember-400 transition-all duration-300 hover:border-ember-500 hover:bg-ember-600/10 hover:text-ember-400 md:inline-block"
        >
          Dotabuff
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-gold-300 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu border-b border-ink-600/40 bg-ink-950/95 backdrop-blur-xl md:hidden ${
          open ? 'open' : ''
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`w-full py-3 text-left text-sm uppercase tracking-[0.25em] transition-colors ${
                  active === item.id ? 'text-gold-300' : 'text-gold-300/50'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={profile.dotabuff}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-sm uppercase tracking-[0.25em] text-ember-400"
            >
              Dotabuff ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
