import { useEffect, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Header.scss';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'building', label: 'Building' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ onOpenPalette }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open ]);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#about" className="header__logo" aria-label="Back to top">
          AS<span className="header__logo-accent"> /&gt;</span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`header__link${active === l.id ? ' header__link--active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__palette-btn" onClick={onOpenPalette} aria-label="Open command palette (Ctrl+K)">
            ⌘K
          </button>
          <span className="header__status">
            <span className="header__status-dot" aria-hidden="true" />
            Online
          </span>
          <button
            type="button"
            className={`header__burger${open ? ' header__burger--open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`header__scrim${open ? ' header__scrim--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav className={`header__drawer${open ? ' header__drawer--open' : ''}`} aria-label="Mobile">
        {LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="header__drawer-link" onClick={close}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
