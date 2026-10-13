import { TextReveal } from './TextReveal';
import { ArrowIcon } from './ArrowIcon';
import { WordReveal } from './WordReveal';

interface Entry {
  date?: string;
  company: string;
  role?: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

const entries: Entry[] = [
  {
    company: 'Gusty Laboratories',
    role: 'Founder',
    description: 'Aiming to build powered exoskeletons and personal flight systems that extend human mobility on the ground and in the air.',
    href: '/projects/gusty-laboratories',
    linkLabel: 'Read about Gusty Laboratories',
  },
  {
    company: 'Veridity',
    role: 'Founder',
    description: 'An ontology platform for research. Its earlier subdivision, Veridity Live, focused on fact-checking political livestreams.',
    href: '/projects/veridity',
    linkLabel: 'Read about Veridity',
  },
  {
    company: 'Open Innovation Design Studio',
    role: 'Software & Technology Leadership',
    description: 'Helping establish a club at Morristown Beard School where students can pursue projects of their own. Contributing ideas and advising on software and technology, with plans for the studio to offer peer STEM tutoring.',
  },
];

export function Experience() {
  return (
    <section className="scene scene-experience" id="experience">
      <div className="scene-experience-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>03 / Experience</TextReveal></span>
          <TextReveal as="h2" className="section-title">Currently</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Current projects and leadership roles.</p>
        </header>

        <div className="exp-list">
          {entries.map((e) => (
            <article key={e.company} className="exp-entry" data-reveal>
              {e.date && <p className="exp-date">{e.date}</p>}
              <TextReveal as="h3" className="exp-company">{e.company}</TextReveal>
              {e.role && <p className="exp-role">{e.role}</p>}
              <WordReveal className="exp-desc">{e.description}</WordReveal>
              {e.href && e.linkLabel && (
                <a className="exp-link" href={e.href}>
                  {e.linkLabel} <ArrowIcon />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
