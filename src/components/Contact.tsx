export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-methods stagger-children">
          <div className="card contact-item fade-in">
            <h3>Email (Primary)</h3>
            <a href="mailto:gc@gustycube.xyz">gc@gustycube.xyz</a>
          </div>
          <div className="card contact-item fade-in">
            <h3>GitHub</h3>
            <a href="https://github.com/BennettSchwartz" target="_blank">@BennettSchwartz</a>
          </div>
          <div className="card contact-item fade-in">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/gustycube/" target="_blank">@gustycube</a>
          </div>
        </div>
        <div className="card contact-cta fade-in">
          <h3>Ready to Start a Project?</h3>
          <p>Whether you need help with AI development, full-stack applications, or infrastructure solutions, I'm here to help bring your ideas to life.</p>
          <a href="mailto:gc@gustycube.xyz" className="btn btn-primary">Send Me an Email</a>
        </div>
      </div>
    </section>
  );
}
