import { projects } from '../../data/projects';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { ProjectCard } from './ProjectCard';
import './Projects.scss';

export function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <SectionHeading kicker="// shipped systems" title="Projects" />
        <div ref={ref} className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
