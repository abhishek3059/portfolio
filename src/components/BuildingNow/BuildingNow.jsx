import { building } from '../../data/building';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import './BuildingNow.scss';

export function BuildingNow() {
  const ref = useReveal();
  return (
    <section id="building" className="building">
      <div className="building__container">
        <SectionHeading kicker="// building now" title="Currently Building" />
        <div ref={ref} className="building__card">
          <p className="building__status">
            <span className="building__pulse" aria-hidden="true" />
            {building.status}
          </p>
          <h3 className="building__name">{building.name}</h3>
          <p className="building__pitch">{building.pitch}</p>
          <ul className="building__list">
            {building.capabilities.map((c) => (
              <li key={c.slice(0, 32)} className="building__item">
                {c}
              </li>
            ))}
          </ul>
          <div className="building__pillars">
            {building.pillars.map((p) => (
              <div key={p.title} className="building__pillar">
                <span className="building__pillar-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <h4 className="building__pillar-title">{p.title}</h4>
                <p className="building__pillar-text">{p.text}</p>
              </div>
            ))}
          </div>
          <a href={building.repo} target="_blank" rel="noreferrer" className="btn btn--primary">
            View super-agent on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
