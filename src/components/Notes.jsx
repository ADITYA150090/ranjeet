import './Notes.css';

export default function Notes() {
  return (
    <div className="region-dark">
      <section>
        <div className="container">
          <div className="note-row">
            <div className="note-card">
              <span className="eyebrow">BUILDING WITH AI</span>
              <h3>Been building with AI even before ChatGPT</h3>
              <p>I spent years shipping AI systems in PwC, L'Oréal, and Fortune 500 companies across 3 continents.</p>
              <a className="cta-btn" href="https://www.linkedin.com/in/arshmankhalid/" target="_blank" rel="noopener">
                LinkedIn
                <svg style={{ marginLeft: 6 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
            <div className="note-bigword">Data Scientist</div>
          </div>

          <div className="note-row note-row-right">
            <div className="note-bigword" style={{ textAlign: 'left' }}>Content<br />Creator</div>
            <div className="note-card">
              <span className="eyebrow">CREATING WITH AI</span>
              <h3>Helping people get 1% better at AI, everyday</h3>
              <p>Every tutorial is a real project I'm shipping. I chase dead ends, find the fix and the prompts that actually worked, then millions see it on their feed.</p>
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
            <span>EST 2020 — 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}
