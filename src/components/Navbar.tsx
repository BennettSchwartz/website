import { GitHubIcon, XIcon, GlobeIcon, LinkedInIcon } from './SocialIcons';
import { ArrowIcon } from './ArrowIcon';

export function Navbar({ home = true }: { home?: boolean }) {
  const anchor = (id: string) => `${home ? '' : '/'}#${id}`;
  return (
    <div className="top">
      <a className="mark" href={home ? '#hero' : '/'}>Bennett Schwartz</a>
      <nav className="nav-desktop" aria-label="Primary">
        <a href={anchor('work')}>Work</a>
        <a href="/writing">Writing</a>
        <a href="https://research.gustycube.com" target="_blank" rel="noopener noreferrer">Research</a>
        <a href={anchor('about')}>About</a>
        <span className="nav-divider" aria-hidden="true" />
        <div className="nav-socials">
          <a href="https://github.com/BennettSchwartz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://x.com/BennettSchwartz" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X (Twitter)">
            <XIcon />
          </a>
          <a href="https://gustycube.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Substack — Writing" title="Substack — Writing">
            <GlobeIcon />
          </a>
          <a href="https://www.linkedin.com/in/gustycube/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
        <a href={anchor('contact')} className="contact-cta">Contact</a>
      </nav>
      <nav className="nav-mobile" aria-label="Primary">
        <a className="menu-link" href="https://research.gustycube.com" target="_blank" rel="noopener noreferrer">Research</a>
        <a className="menu-link" href={anchor('contact')}>Contact <ArrowIcon /></a>
      </nav>
    </div>
  );
}
