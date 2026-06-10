import './About.css';
import img1 from "../assets/ranjeet-tekam.jpg"

export default function About() {
  return (
    <div className="region-white about-region">
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-header">
            <span className="eyebrow eyebrow-dark">ABOUT</span>
            <h2 className="h-section" style={{ marginTop: 20 }}>
              A <em><span style={{ color: '#e8551a' }}>one-person</span></em><br />
              studio helping you turn<br />
              AI into real output
            </h2>
          </div>
          <div className="about-grid">
            <div className="poster" aria-hidden="true">
              <img
                className="poster-img"
                src={img1}
                alt="ranjeet tekam portrait"
                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
              />
              <div className="poster-overlay" />
              <div className="c-tl corner" /><div className="c-tr corner" />
              <div className="c-bl corner" /><div className="c-br corner" />
              <div className="top"><span>PORTRAIT · 2026</span></div>
            </div>

            <div className="about-right">
              <div className="about-card">
                <p>ranjeet tekam is the AI educator behind one of the fastest-growing AI channels online, reaching over half a million followers across four platforms. Trained as a data scientist, he spent years shipping AI systems at PwC and L'Oréal before turning the camera on his own work. Today, he helps creators, founders, and brands cut through the noise of new AI tools and find what actually helps them build, ship, and grow.</p>
              </div>
              <div className="about-quad">
                <div className="cell"><div className="lab">CHANNEL</div><div className="val">@ranx.ai</div></div>
                <div className="cell"><div className="lab">BASED</div><div className="val">Madhya Pradesh, India</div></div>
                <div className="cell"><div className="lab">PREVIOUSLY</div><div className="val">Video Editor</div></div>
                <div className="cell"><div className="lab">WORKED AT:</div><div className="val">Freelancer</div></div>
              </div>
              <div className="about-actions">
                <a className="cta-btn" href="https://www.instagram.com/ranx.ai/" target="_blank" rel="noopener">
                  Watch latest
                  <span className="arrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </a>
                <a className="cta-btn" href="#">All links
                  <svg style={{ marginLeft: 6 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </a>
                <a className="cta-btn" href="mailto:ranjeettekam18@gmail.com">
                  Get in touch
                  <svg style={{ marginLeft: 6 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16v12H4zM4 6l8 7 8-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
