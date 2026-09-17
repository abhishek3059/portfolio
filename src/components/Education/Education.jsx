import { education } from '../../data/education';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import './Education.scss';

export function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="education">
      <div className="education__container">
        <SectionHeading kicker="// education" title="Education" />
        <div ref={ref} className="education__grid">
          {education.map((e) => (
            <article key={e.institution} className="education__card">
              <span className="education__icon" aria-hidden="true">
                🎓
              </span>
              <h3 className="education__degree">{e.degree}</h3>
              <p className="education__school">{e.institution}</p>
              <p className="education__meta">
                {e.timeline} · {e.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
