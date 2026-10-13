import { TextReveal } from './TextReveal';
import { WordReveal } from './WordReveal';

export function About() {
  return (
    <section className="scene scene-about" id="about">
      <div className="scene-about-inner">
        <header className="section-header">
          <span className="kicker"><TextReveal>04 / About</TextReveal></span>
          <TextReveal as="h2" className="section-title">About me</TextReveal>
          <p className="section-sub reveal-up delay-2" data-reveal>Who I am, and how I got here.</p>
        </header>

        <TextReveal as="p" className="about-statement">I build things that sit at the intersection of technology and society.</TextReveal>

        <div className="about-body">
          <WordReveal>I'm a software developer, entrepreneur, and researcher, and a high honor roll sophomore at Morristown Beard School. I began programming at age five out of curiosity about how things work. That curiosity has stayed with me as I've explored full-stack development, systems engineering, networking, and AI tooling. I'm particularly interested in infrastructure software and scalable systems, from the algorithms behind them to the applications people use.</WordReveal>
          <WordReveal>Computer science and mathematics are central interests, but I enjoy learning well beyond them. At school, I study Latin and participate in debate. Outside the classroom, I explore constitutional law and civil liberties, especially press freedom and the limits of government power.</WordReveal>
          <WordReveal>I'm also drawn to physics, biology, and cognitive science, and to the questions philosophy and ethics raise about technology's place in society. Democratic values matter to me, and I care about how the tools we build affect people's freedom and ability to understand the world. Those questions are part of what keeps me interested in both research and building software.</WordReveal>
          <WordReveal>Outside of that, I enjoy gaming, music, and reading. My reading ranges across subjects, with science fiction and fantasy alongside nonfiction about my interests. I like having room to follow a new question, pick up something unfamiliar, or simply get absorbed in a good story.</WordReveal>
        </div>
      </div>
    </section>
  );
}
