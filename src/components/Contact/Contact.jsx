import { profile } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import './Contact.scss';

export function Contact() {
  const ref = useReveal();
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: '📧' },
    { label: 'LinkedIn', value: 'abhishekiscoding', href: profile.linkedin, icon: '💼' },
    { label: 'GitHub', value: 'abhishek3059', href: profile.github, icon: '🐙' },
    { label: 'Resume', value: 'View CV', href: profile.resume, icon: '📄' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <SectionHeading kicker="// let's connect" title="Let's Build Something Together" />
        <p className="contact__sub">
          I&apos;m open to full-stack, backend, and AI engineering roles. Let&apos;s talk.
        </p>
        <div ref={ref} className="contact__grid">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-card__icon" aria-hidden="true">
                {l.icon}
              </span>
              <span className="contact-card__label">{l.label}</span>
              <span className="contact-card__value">{l.value}</span>
            </a>
          ))}
        </div>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__phone">
          {profile.phone}
        </a>
      </div>
    </section>
  );
}
