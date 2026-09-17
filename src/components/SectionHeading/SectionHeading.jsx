import { useReveal } from '../../hooks/useReveal';
import './SectionHeading.scss';

export function SectionHeading({ kicker, title }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="section-heading">
      <span className="section-heading__kicker">{kicker}</span>
      <h2 className="section-heading__title">{title}</h2>
      <div className="section-heading__divider" aria-hidden="true">
        <span className="section-heading__node" />
        <span className="section-heading__line" />
        <span className="section-heading__node" />
      </div>
    </div>
  );
}
