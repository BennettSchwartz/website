import type { DetailPage as DetailPageContent } from '../content/pages';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowIcon } from './ArrowIcon';

export function DetailPage({ page }: { page: DetailPageContent }) {
  return (
    <>
      <header className="detail-top" id="page-top"><Navbar home={false} /></header>
      <main className="detail-main" id="main-content" tabIndex={-1}>
        <article className="detail-article">
          <a className="text-link detail-back" href={page.path.startsWith('/projects/') ? '/#work' : '/'}>← Back to {page.path.startsWith('/projects/') ? 'projects' : 'home'}</a>
          <header className="detail-heading">
            <h1>{page.title}</h1>
            <p className="detail-lead">{page.description}</p>
          </header>
          <div className="detail-body">
            {page.sections.map((section, index) => (
              <section className="detail-section" key={section.heading ?? index}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.links && (
                  <ul className="detail-links">
                    {section.links.map((link) => <li key={link.href}><a className="text-link" href={link.href}>{link.label} <ArrowIcon /></a></li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer backTo="#page-top" />
    </>
  );
}

export function NotFound() {
  return (
    <>
      <header className="detail-top" id="page-top"><Navbar home={false} /></header>
      <main className="detail-main" id="main-content" tabIndex={-1}>
        <div className="detail-article detail-heading">
          <p className="kicker">404</p>
          <h1>Page not found</h1>
          <p className="detail-lead">This page could not be found.</p>
          <a className="text-link" href="/">Return home <ArrowIcon /></a>
        </div>
      </main>
      <Footer backTo="#page-top" />
    </>
  );
}
