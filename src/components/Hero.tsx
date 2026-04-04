import { useState, useEffect } from 'react';

const phrases = [
  'Full Stack Developer',
  'Systems Architect',
  'Founder & Entrepreneur',
  'AI Enthusiast',
  'Science Lover',
  'Philosophy Enthusiast',
  'Ethics Advocate',
];

export function Hero() {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = phrases[phraseIndex];

      if (!isDeleting) {
        if (charIndex < current.length) {
          charIndex++;
          setText(current.substring(0, charIndex));
          timer = setTimeout(tick, 80);
          return;
        }

        // Pause at end of phrase before deleting
        timer = setTimeout(() => {
          isDeleting = true;
          tick();
        }, 2000);
        return;
      } else {
        charIndex--;
        setText(current.substring(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          // Pause before typing next phrase
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 40);
      }
    }

    tick();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <h1 className="hero-name">Bennett<br />Schwartz</h1>
        <p className="hero-alias">(aka GustyCube)</p>
        <div className="hero-typing-wrapper">
          <span id="typed-text">{text}</span><span className="cursor"></span>
        </div>
        <div className="hero-status">Open to Collaboration &bull; United States</div>
        <p className="hero-tagline">Building the future through code and exploring big ideas</p>
        <div className="hero-pills">
          <span className="pill">Coding</span>
          <span className="pill">Ethics</span>
          <span className="pill">Philosophy</span>
          <span className="pill">Science</span>
          <span className="pill">Democracy</span>
          <span className="pill">Capitalism</span>
        </div>
        <a href="https://ghcommits.com" target="_blank" rel="noopener noreferrer" className="hero-badge">
          <img src="https://ghcommits.com/api/badge/GustyCube.svg" alt="GitHub Commits Badge" />
        </a>
        <div className="hero-buttons">
          <a href="mailto:gc@gustycube.xyz" className="btn btn-primary">Let's Collaborate</a>
          <a href="https://gustycubeventures.com" target="_blank" className="btn btn-blue">My Ventures</a>
          <a href="https://github.com/gustycube" target="_blank" className="btn btn-secondary">View My Work</a>
          <a href="https://gustycube.substack.com" target="_blank" className="btn btn-dark">My Writing</a>
        </div>
        <div className="hero-socials">
          <a href="https://gustycube.com">Web &rarr; gustycube.com</a>
          <a href="https://github.com/gustycube">Code &rarr; github.com/gustycube</a>
          <a href="https://youtube.com/@gustycube">Video &rarr; youtube.com/@gustycube</a>
          <a href="mailto:gc@gustycube.xyz">Mail &rarr; gc@gustycube.xyz</a>
        </div>
      </div>
    </section>
  );
}
