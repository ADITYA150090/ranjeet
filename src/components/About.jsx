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
              <em><span style={{ color: '#e8551a' }}>AI is the tool</span></em><br />
              Storytelling is the craft<br />
              <em><span style={{ color: '#e8551a' }}>I do both</span></em>
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
                <p>I'm Ranjeet  an AI content creator and video editor based in India, working with brands and creators around the world.

I sit at the intersection of generative AI and traditional post-production. That means I can take a concept from raw idea to finished video using tools like RunwayML, Kling, Higgsfield, and Midjourney then polish it in Premiere Pro and After Effects until it actually feels premium.

I've produced 360+ pieces of content AI ads, product visualizations, long-form videos, and short-form reels and I lead AI content adoption at my company, helping a growing business stay ahead as the space evolves.

If you want video that's fast to produce, fresh in style, and built for attention, you're in the right place.
</p>
              </div>
              <div className="about-quad">
                <div className="cell"><div className="lab">CHANNEL</div><div className="val">@ranx.ai</div></div>
                <div className="cell"><div className="lab">BASED</div><div className="val"> India</div></div>
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
