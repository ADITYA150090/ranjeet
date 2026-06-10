import { useEffect, useRef } from 'react';
import { stats } from '../data/content';
import './Audience.css';

function StatCard({ val, label }) {
  const ref = useRef(null);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current.classList.add('visible');
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="aud-card" ref={ref}>
      <div className="big">{val}</div>
      <div className="aud-label">{label}</div>
    </div>
  );
}

export default function Audience() {
  return (
    <div className="region-dark aud-region-dark">
      <section className="section-pad">
        <div className="container">
          <div className="aud-header">
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.65)' }}>MY AUDIENCE</span>
              <h2 className="h-section" style={{ marginTop: 22, color: '#fff' }}>
               Explore<br />AI with<em><span style={{ color: '#e8551a' }}>me</span></em>
              </h2>
            </div>
            <span className="platforms-pill">INSTAGRAM · FACEBOOK · LINKEDIN · THREADS</span>
          </div>
          <div className="aud-grid">
            {stats.map((s, i) => <StatCard key={i} val={s.val} label={s.label} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
