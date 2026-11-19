import { experience } from '../../data/experience';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import './Experience.scss';

export function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <SectionHeading kicker="// career timeline" title="Experience" />
        <div ref={ref} className="timeline">
          {experience.map((job) => (
            <article key={job.company} className="timeline__item">
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <h3 className="timeline__role">{job.role}</h3>
                <p className="timeline__company">{job.company}</p>
                <p className="timeline__meta">
                  {job.timeline} · {job.location}
                </p>
                {job.bullets.length > 0 && (
                  <ul className="timeline__bullets">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 32)} className="timeline__bullet">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {job.projects.length > 0 && (
                  <div className="timeline__projects">
                    <p className="timeline__projects-label">Production work</p>
                    {job.projects.map((p) => (
                      <div key={p.name} className="case-card">
                        <h4 className="case-card__name">{p.name}</h4>
                        <p className="timeline__meta">{p.timeline}</p>
                        <ul className="timeline__bullets">
                          {p.bullets.map((b) => (
                            <li key={b.slice(0, 32)} className="timeline__bullet">
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="case-card__tags">
                          {p.tech.map((t) => (
                            <span key={t} className="case-card__tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
