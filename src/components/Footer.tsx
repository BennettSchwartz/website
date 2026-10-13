export function Footer({ backTo = '#hero' }: { backTo?: string }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-brand">Bennett Schwartz</span>
        <span className="footer-tagline">
          <span>aka GustyCube</span>
          <span className="sep" aria-hidden="true">/</span>
          <span><span className="flag">🇺🇸</span> United States</span>
        </span>

        <a className="footer-back-top" href={backTo}>
          Back to top <span className="arrow">↑</span>
        </a>

        <p className="footer-meta">
          © 2026 Bennett Schwartz<span className="sep" aria-hidden="true">/</span>Always building, always learning
        </p>

        <span className="footer-mark">MMXXVI</span>
      </div>
    </footer>
  );
}
