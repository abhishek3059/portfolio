import { useEffect, useMemo, useRef, useState } from 'react';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import './CommandPalette.scss';

function toggleTheme() {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
}

export function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const commands = useMemo(
    () => [
      { name: '/about', hint: 'Scroll to About', run: () => scrollTo('about') },
      { name: '/skills', hint: 'Scroll to Skills', run: () => scrollTo('skills') },
      { name: '/projects', hint: 'Scroll to Projects', run: () => scrollTo('projects') },
      { name: '/building', hint: 'Scroll to Currently Building (super-agent)', run: () => scrollTo('building') },
      { name: '/experience', hint: 'Scroll to Experience', run: () => scrollTo('experience') },
      { name: '/contact', hint: 'Scroll to Contact', run: () => scrollTo('contact') },
      {
        name: '/github',
        hint: 'Open GitHub profile',
        run: () => window.open(profile.github, '_blank', 'noopener'),
      },
      { name: '/theme', hint: 'Toggle light / dark mode', run: toggleTheme },
      ...projects.map((p) => ({
        name: p.name,
        hint: 'Project — scroll to Projects',
        run: () => scrollTo('projects'),
      })),
    ],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    const clean = q.startsWith('/') ? q.slice(1) : q;
    return commands.filter(
      (c) =>
        c.name.toLowerCase().includes(clean) ||
        c.hint.toLowerCase().includes(clean),
    );
  }, [query, commands]);

  useEffect(() => {
    if (open) {
      setQuery('');
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open ]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const execute = (cmd) => {
    cmd.run();
    onClose();
  };

  return (
    <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="palette__scrim" onClick={onClose} aria-hidden="true" />
      <div className="palette__box">
        <input
          ref={inputRef}
          className="palette__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && results[0]) execute(results[0]);
          }}
          placeholder="Type a command or search…  (ESC to close)"
          aria-label="Command search"
        />
        <ul className="palette__list">
          {results.length === 0 && <li className="palette__empty">No matches</li>}
          {results.map((c) => (
            <li key={c.name}>
              <button type="button" className="palette__item" onClick={() => execute(c)}>
                <span className="palette__name">{c.name}</span>
                <span className="palette__hint">{c.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
