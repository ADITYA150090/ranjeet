import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll be in touch at ${email}`);
    setEmail('');
  };

  return (
    <div className="region-footer-white">
      <section className="footer-section" id="contact">
        <div className="container">
          <div className="footer-top">
            <div className="footer-mark">
              <div className="footer-eyebrow">
                <span className="dot-orange" /> ranjeet tekam · @ranx.ai
              </div>
              <h2 className="footer-display">
                Build with <em>AI</em>,<br />ship every <em>week.</em>
              </h2>
              <p className="footer-tag">Subscribe for one practical AI tutorial in your inbox each week.</p>
              <form className="footer-subscribe" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="you@email.com"
                  aria-label="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  Subscribe
                  <span className="arrow" style={{ background: 'var(--orange)', color: '#fff' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>

            <div className="footer-cols">
              <div>
                <div className="col-head">Watch</div>
                <ul>
                  <li><a href="https://www.instagram.com/ranx.ai/" target="_blank" rel="noopener">Instagram <span>↗</span></a></li>
                  <li><a href="#">Facebook <span>↗</span></a></li>
                  <li><a href="https://www.linkedin.com/in/arshmankhalid/" target="_blank" rel="noopener">LinkedIn <span>↗</span></a></li>
                  <li><a href="#">YouTube <span>↗</span></a></li>
                </ul>
              </div>
              <div>
                <div className="col-head">Read</div>
                <ul>
                  <li><a href="#">Threads <span>↗</span></a></li>
                  <li><a href="#">X <span>↗</span></a></li>
                  <li><a href="#">All links <span>↗</span></a></li>
                </ul>
              </div>
              <div>
                <div className="col-head">Contact</div>
                <ul>
                  <li><a href="mailto:hello@ranx.aikhalid.com">hello@ranx.aikhalid.com</a></li>
                  <li>madhya pradesh, India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-stamp" aria-hidden="true">@ranx.ai</div>

          <div className="footer-bottom">
            <div className="meta-left">
              <span className="plus">+</span>
              <span>© 2026 ranjeet tekam. All rights reserved.</span>
            </div>
            <div className="meta-mid">
              <span>EST 2020 — 2026</span>
              <span className="sep">·</span>
              <span>v 1.0</span>
            </div>
            <div className="meta-right">
              <a href="#top">
                Back to top
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
