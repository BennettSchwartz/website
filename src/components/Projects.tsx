export function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="stagger-children">
          <div className="project-featured fade-in">
            <div className="card project-card">
              <div className="project-header">
                <h3 className="project-title">Ignyte Solutions</h3>
                <span className="project-status active">Active</span>
              </div>
              <p className="project-desc">
                Infrastructure-level networking software providing portable public IPv4 connectivity. Dedicated IPs that follow devices across networks using WireGuard-encrypted tunnels &amp; DDoS-filtered edge ingress.
              </p>
              <div className="project-footer">
                <div className="project-tags">
                  <span className="tag">Networking</span>
                  <span className="tag">Distributed Systems</span>
                  <span className="tag">WireGuard</span>
                  <span className="tag">Infrastructure</span>
                </div>
                <a href="https://ignyte.solutions" target="_blank" className="project-link">
                  Visit &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="projects-grid-sub">
            <div className="card project-card fade-in">
              <div className="project-header">
                <h3 className="project-title">EnsuraScript</h3>
                <span className="project-status open-source">Open Source</span>
              </div>
              <p className="project-desc">
                A declarative programming language for defining and enforcing system guarantees. Built for DevOps automation and configuration management.
              </p>
              <div className="project-footer">
                <div className="project-tags">
                  <span className="tag">Go</span>
                  <span className="tag">Programming Language</span>
                  <span className="tag">DevOps</span>
                  <span className="tag">CLI</span>
                </div>
                <a href="https://github.com/BennettSchwartz/EnsuraScript" target="_blank" className="project-link">
                  View Source &rarr;
                </a>
              </div>
            </div>
            <div className="card project-card fade-in">
              <div className="project-header">
                <h3 className="project-title">ERR-EVAL</h3>
                <span className="project-status open-source">Open Source</span>
              </div>
              <p className="project-desc">
                Benchmark for evaluating AI epistemic reliability—testing how well LLMs handle uncertainty, avoid hallucinations, and acknowledge what they don&apos;t know.
              </p>
              <div className="project-footer">
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">AI</span>
                  <span className="tag">Benchmark</span>
                </div>
                <a href="https://github.com/BennettSchwartz/ERR-EVAL" target="_blank" className="project-link">
                  View Source &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
