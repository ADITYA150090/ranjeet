import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a className={`brand-static${scrolled ? ' scrolled' : ''}`} href="#top">
        <span className="brand-mark">+</span>
        <span>
          <div className="brand-name">ranjeet tekam</div>
          <div className="brand-sub">@ranx.ai</div>
        </span>
      </a>
      <nav className="nav">
        <span className="brand-spacer" aria-hidden="true" />
        <div className="nav-pill" role="navigation">
          <a href="#work">Reels</a>
          <a href="#topics">Tools</a>
          <a href="#about">About</a>
          <a href="https://calendly.com/hypervail/30min" target="_blank" rel="noopener" className="active">Book a Call</a>
        </div>
        <a className="subscribe" href="mailto:ranjeettekam18@gmail.com">
          Work with me
          <span className="subscribe-arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </nav>
    </>
  );
}
