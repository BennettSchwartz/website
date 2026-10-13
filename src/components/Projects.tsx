import { TextReveal } from './TextReveal';
import { ArrowIcon } from './ArrowIcon';
import { WordReveal } from './WordReveal';

interface Project {
  id?: string;
  num: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Membrane',
    description: 'Open source memory and learning substrate for AI agents. Lets systems persist context across runs, recall it semantically, and refine behavior over time.',
    href: 'https://github.com/bennettschwartz/membrane',
    linkLabel: 'View source on GitHub',
  },
  {
    num: '02',
    id: 'gusty-laboratories',
    title: 'Gusty Laboratories',
    description: 'Powered exoskeletons and personal flight systems, with the goal of extending human mobility on the ground and in the air.',
    href: '/projects/gusty-laboratories',
    linkLabel: 'Read about Gusty Laboratories',
  },
  {
    num: '03',
    title: 'Veridity',
    description: 'An open-source ontology platform designed to connect public information and help researchers trace relationships back to their sources.',
    href: '/projects/veridity',
    linkLabel: 'Read about Veridity',
  },
];

export function Projects() {
  return (
    <section className="scene scene-work" id="work">
      <div className="scene-work-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>01 / Work</TextReveal></span>
          <TextReveal as="h2" className="section-title">Selected projects</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Research and engineering across software and human mobility.</p>
        </header>

        <div className="work-list">
          {projects.map((p) => (
            <article key={p.num} id={p.id} className="project" data-reveal>
              <div className="project-num">{p.num}</div>
              <div className="project-body">
                <header className="project-header">
                  <TextReveal as="h3" className="project-title">{p.title}</TextReveal>
                </header>
                <WordReveal className="project-desc">{p.description}</WordReveal>
                {p.href && p.linkLabel && (
                  <a className="project-link" href={p.href}>
                    {p.linkLabel} <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <aside className="work-recognition" aria-labelledby="recognition-heading">
          <div>
            <h3 id="recognition-heading">Competitions &amp; recognition</h3>
            <p>Competition results and the projects behind them.</p>
          </div>
          <a className="text-link" href="/competitions">View competition results <ArrowIcon /></a>
        </aside>
      </div>
    </section>
  );
}
