import { profile } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import { useTyping } from '../../hooks/useTyping';
import './Hero.scss';

export function Hero() {
  const typed = useTyping(profile.typingRoles);
  const ref = useReveal();

  return (
    <section id="about" className="hero">
      <div ref={ref} className="hero__content">
        <img
          className="hero__avatar"
          src={profile.avatar}
          alt="Portrait of Abhishek Shukla"
          width="120"
          height="120"
          loading="lazy"
        />
        <p className="hero__eyebrow">Hello, I&apos;m</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__typing" aria-live="polite">
          <span className="hero__typing-text">{typed}</span>
          <span className="hero__caret" aria-hidden="true" />
        </p>
        <p className="hero__body">{profile.heroBody}</p>
        <div className="hero__ctas">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--outline">
            Get In Touch
          </a>
        </div>
        <dl className="hero__stats">
          {profile.stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <dt className="hero__stat-value">{s.value}</dt>
              <dd className="hero__stat-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <a href="#skills" className="hero__scroll" aria-label="Scroll to skills">
        <span />
      </a>
    </section>
  );
}
