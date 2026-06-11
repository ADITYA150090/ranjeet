import './Notes.css';

export default function Notes() {
  return (
    <div className="region-dark">
      <section>
        <div className="container">
          <div className="note-row">
            <div className="note-card">
              <span className="eyebrow">Why Work With Me</span>
              <h3>Fast Turnaround</h3>
              <p>AI lets me produce in days what used to take weeks  without cutting quality.</p>
              <a className="cta-btn" href="https://www.linkedin.com/in/ranjeet-tekam-447615197/" target="_blank" rel="noopener">
                LinkedIn
                <svg style={{ marginLeft: 6 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
            <div className="note-bigword">Future-Proof Skills</div>
          </div>

          <div className="note-row note-row-right">
            <div className="note-bigword" style={{ textAlign: 'left' }}>Content<br />Creator</div>
            <div className="note-card">
              <span className="eyebrow">CREATING WITH AI</span>
              <h3>AI Product Visualization</h3>
              <p> I track and test every new AI tool so your content always feels ahead of the curve.
              </p>
              <a className="cta-btn" href="https://www.instagram.com/ranx.ai/" target="_blank" rel="noopener">
                Instagram
                <svg style={{ marginLeft: 6 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pull-quote-section">
        <div className="container">
          <p className="pull-quote">
            "AI tutorials show you what's possible.<br />
            I show you <span className="accent" style={{ color: 'rgb(232,85,26)' }}>what actually works</span>"
          </p>
          <div className="pull-quote-meta">
            <span>NOTES · @ranx.ai</span>
            <span>2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}
