import { skills } from '../../data/skills';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import './Skills.scss';

export function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <SectionHeading kicker="// core stack" title="Skills & Systems" />
        <div ref={ref} className="skills__grid">
          {skills.map((module) => (
            <article key={module.title} className="skill-card">
              <div className="skill-card__icon" aria-hidden="true">
                {module.icon}
              </div>
              <h3 className="skill-card__title">{module.title}</h3>
              <div className="skill-card__tags">
                {module.tags.map((tag) => (
                  <span key={tag} className="skill-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
