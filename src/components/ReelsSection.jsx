import { useRef, useState, useEffect } from 'react';
import { reels } from '../data/content';
import './ReelsSection.css';

function HeartIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
}
function CommentIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;
}
function ShareIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>;
}
function MoreIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>;
}

function ReelCard({ reel }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.5 });
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <article className="reel-card">
      <a className="reel-frame" href={reel.href} target="_blank" rel="noopener" style={{ background: reel.bg }}>
      <video
  ref={videoRef}
  className="reel-video"
  muted
  autoPlay
  loop
  playsInline
  preload="auto"
  src={reel.video}
/>
        <div className="reel-shade" />
        <div className="reel-progress"><span /></div>
        <div className="reel-top">
          <span className="reel-top-title">Reels</span>
          <span className="reel-top-cam">⬤</span>
        </div>
        <div className="reel-side">
          {/* <button className="reel-act reel-act-like" type="button" aria-label="Like">
            <HeartIcon /><small>{reel.likes}</small>
          </button>
          <button className="reel-act" type="button" aria-label="Comment">
            <CommentIcon /><small>{reel.comments}</small>
          </button>
          <button className="reel-act" type="button" aria-label="Share">
            <ShareIcon /><small>{reel.shares}</small>
          </button>
          <button className="reel-act reel-act-more" type="button" aria-label="More">
            <MoreIcon />
          </button> */}
          {/* <span className="reel-audio-disc" aria-hidden="true" /> */}
        </div>
        <div className="reel-caption">
          <div className="reel-user">
            <span className="reel-avatar" />
            <span className="reel-handle">ranx.ai</span>
            <span className="reel-follow">· Follow</span>
          </div>
          <p className="reel-text">{reel.text}</p>
          <div className="reel-audio">
            <span className="reel-audio-icon">♪</span>
            <span className="reel-audio-text">{reel.audio}</span>
          </div>
        </div>
      </a>
      <div className="reel-meta">
        <span className="reel-platform">{reel.platform}</span>
        <span className="reel-views">{reel.views}</span>
      </div>
    </article>
  );
}

export default function ReelsSection() {
  const railRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
  
    const interval = setInterval(() => {
      if (isDragging) return;
  
      rail.scrollLeft += 1;
  
      if (rail.scrollLeft >= rail.scrollWidth - rail.clientWidth) {
        rail.scrollLeft = 0;
      }
    }, 10);
  
    return () => clearInterval(interval);
  }, [isDragging]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.pageX - railRef.current.offsetLeft, scrollLeft: railRef.current.scrollLeft };
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    railRef.current.scrollLeft = dragStart.current.scrollLeft - (x - dragStart.current.x);
  };
  const stopDrag = () => setIsDragging(false);

  return (
    <div className="region-white">
      <section className="section-pad" id="work">
        <div className="container">
          <div className="what-header">
            <div>
              <span className="eyebrow eyebrow-dark">LATEST REELS</span>
              <h2 className="h-section" style={{ marginTop: 22 }}>
                <em><span style={{ color: '#e8551a' }}>New AI tools</span></em> &amp; workflows, shared across the feeds
              </h2>
            </div>
            <div className="what-mission">
              I share what I live and build with AI. Every tool and tutorial is tested and used in shipping and scaling something real.
            </div>
          </div>

          <div className="reels-viewport">
            <div
              className="reels-rail"
              ref={railRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
            >
             {[...reels, ...reels].map((reel, index) => (
  <ReelCard key={index} reel={reel} />
))}
            </div>
          </div>

          <div className="reels-footer">
            {/* <div className="reels-stats">
              <span><strong>176</strong> AI tutorials shared</span>
              <span className="dot-sep">·</span>
              <span><strong>20M+</strong> views in Q1 of 2026</span>
              <span className="dot-sep">·</span>
              <span><strong>4</strong> platforms</span>
            </div> */}
            <a className="cta-btn cta-btn-dark" href="https://www.instagram.com/ranx.ai/" target="_blank" rel="noopener">
              Watch all reels
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
