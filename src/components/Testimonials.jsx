import { useState } from 'react';
import { testimonials } from '../data/content';
import './Testimonials.css';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="region-white">
      <section className="section-pad section-pad-tight">
        <div className="container">
          <div className="brands-header">
            <span className="eyebrow eyebrow-dark" style={{ padding: '6px 12px' }}>FOR BRANDS</span>
            <h2 className="h-section" style={{ marginTop: 22 }}>
              Selective<br /><em><span style={{ color: '#e8551a' }}>partnerships.</span></em>
            </h2>
          </div>

          <div className="brands-slider">
            <div className="brands-slide-wrap">
              <div className="brand-quote-mark">"</div>
              <blockquote>{testimonials[current].quote}</blockquote>
              <div className="brand-attr">
                <div className="who">{testimonials[current].who}</div>
                <div className="what">{testimonials[current].what}</div>
              </div>
            </div>

            <div className="brands-controls">
              <div className="brands-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={i === current ? 'active' : ''}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
              <div className="tag-row">
                <span className="tag">Short-form ads</span>
                <span className="tag">Tool walkthroughs</span>
                <span className="tag">Launch campaigns</span>
              </div>
              <a className="cta-btn cta-btn-dark" href="mailto:hello@ranx.aikhalid.com">
                Pitch a partnership
                <span className="arrow" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
