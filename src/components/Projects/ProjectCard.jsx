import { useRef } from 'react';
import './Projects.scss';

export function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMouseMove = (e) => {
    const el = cardRef.current;
    if (!el || reduceMotion || e.pointerType === 'touch') return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-4px)`;
    el.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`);
  };

  const onMouseLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = '';
  };

  const featured = Boolean(project.featured);

  return (
    <article
      ref={cardRef}
      className={`project-card${featured ? ' project-card--featured' : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-card__brand" aria-hidden="true">
        <span className="project-card__glyph">{project.icon}</span>
      </div>
      <div className="project-card__body">
        <p className="project-card__status">{project.status}</p>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tag">
              {t}
            </span>
          ))}
        </div>
        <p className="project-card__metric">✦ {project.metric}</p>
        <div className="project-card__footer">
          {featured && project.extraLinks?.[0] && (
            <a
              href={project.extraLinks[0].url}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary project-card__cta"
            >
              {project.extraLinks[0].label}
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={featured ? 'project-card__link' : 'project-card__link'}
            aria-label={`${project.name} on GitHub`}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
            GitHub
          </a>
          {(featured ? project.extraLinks?.slice(1) : project.extraLinks)?.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="project-card__link">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
