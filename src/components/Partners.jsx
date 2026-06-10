import { partners } from '../data/content';
import './Partners.css';

export default function Partners() {
  return (
    <div className="region-partners">
      <section className="section-pad" id="topics">
        <div className="container">
          <div className="partners-wall">
            <div className="partners-wall-bg" aria-hidden="true">
              <div className="partners-glow partners-glow-1" />
              <div className="partners-glow partners-glow-2" />
              <div className="partners-grid-pattern" />
            </div>
            <div className="partners-wall-inner">
              <div className="partners-header">
                <span className="eyebrow">Tools &amp; AI</span>
                <h2 className="h-section" style={{ marginTop: 22, color: '#fff' }}>
                  Tools that I <br />USE <em><span style={{ color: '#e8551a' }}>For My Project.</span></em>
                </h2>
              </div>
              <div className="partner-grid">
                {partners.map((p, i) => (
                  <a
                    key={i}
                    className="partner-tile"
                   
                   
                    rel="noopener"
                    style={{ '--reveal-delay': `${i * 40}ms` }}
                  >
                    <img src={p.img} alt={p.name} loading="lazy" />
                  </a>
                ))}
                <a className="partner-tile partner-tile-more">+more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
