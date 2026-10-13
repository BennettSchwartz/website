import { Navbar } from './Navbar';
import { ArrowIcon } from './ArrowIcon';

export function Hero() {
  return (
    <section className="scene scene-hero" id="hero">
      <Navbar />

      <div className="stage">
        <h1 className="name">Bennett<br />Schwartz</h1>
        <div className="alias">
          <span>aka GustyCube</span>
          <span className="sep" aria-hidden="true">/</span>
          <span><span className="flag">🇺🇸</span> Based in United States</span>
        </div>
        <p className="subtitle">Student, software developer, and founder</p>
        <a className="cta" href="https://x.com/BennettSchwartz" target="_blank" rel="noopener noreferrer">Follow me on X <ArrowIcon /></a>
      </div>

      <div />
      <span className="scroll-cue">Scroll</span>
    </section>
  );
}
