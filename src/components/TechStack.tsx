import { TextReveal } from './TextReveal';
import type { CSSProperties } from 'react';

const stack = [
  { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
  { label: 'Backend', items: ['Go', 'Python'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { label: 'Infra', items: ['Linux', 'Docker', 'Cloudflare'] },
  { label: 'Environment', items: ['macOS', 'VS Code'] },
];

export function TechStack() {
  return (
    <section className="scene scene-stack" id="stack">
      <div className="scene-stack-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>02 / Stack</TextReveal></span>
          <TextReveal as="h2" className="section-title">The stack</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Languages, frameworks, and infrastructure behind the work.</p>
        </header>

        <div className="stack-grid">
          {stack.map((row) => (
            <div key={row.label} className="stack-row" data-reveal>
              <span className="stack-label"><TextReveal className="stack-label-inner">{row.label}</TextReveal></span>
              <div className="stack-tags">
                {row.items.map((tag, i) => (
                  <span key={tag} className="tag" style={{ '--i': i } as CSSProperties}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="stack-footnote reveal-up" data-reveal>Always learning, always adding.</p>
      </div>
    </section>
  );
}
