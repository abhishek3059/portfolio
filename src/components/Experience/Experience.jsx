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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
