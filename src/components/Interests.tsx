import { TextReveal } from './TextReveal';

const interests = [
  { num: '01', title: 'Philosophy & Ethics', desc: 'Exploring the deeper questions of technology, society, and human nature.' },
  { num: '02', title: 'Science & Innovation', desc: 'Passionate about scientific discovery and technological advancement.' },
  { num: '03', title: 'Civil Liberties', desc: 'An independent interest in constitutional law, press freedom, and the limits of government power.' },
  { num: '04', title: 'Capitalism & Ethics', desc: 'Balancing free market principles with ethical business practices.' },
];

export function Interests() {
  return (
    <section className="scene scene-interests" id="interests">
      <div className="scene-interests-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>05 / Interests</TextReveal></span>
          <TextReveal as="h2" className="section-title">Beyond the keyboard</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Interests that shape the work and everyday life.</p>
        </header>

        <div className="interests-grid">
          {interests.map((it) => (
            <article key={it.num} className="interest-card" data-reveal>
              <span className="interest-num">{it.num}</span>
              <TextReveal as="h3" className="interest-title">{it.title}</TextReveal>
              <p className="interest-desc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
