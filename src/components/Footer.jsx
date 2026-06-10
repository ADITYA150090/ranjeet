import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  

  const [email, setEmail] = useState('');
const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();


  const response = await fetch(
     "https://formspree.io/f/mkoablrj",
    
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    }
  );

  if(response.ok){
    setSuccess(true);
    setEmail('');
  }

  

  setTimeout(() => {
    setSuccess(false);
  }, 4000);
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
              {success && (
  <div className="success-toast">
    ✓ Thanks for subscribing. Check your inbox.
  </div>
)}
            </div>

            <div className="footer-cols">
              <div>
                <div className="col-head">Watch</div>
                <ul>
                  <li><a href="https://www.instagram.com/ranx.ai/" target="_blank" rel="noopener">Instagram <span>↗</span></a></li>
                  
                  <li><a href="https://www.linkedin.com/in/ranjeet-tekam-447615197/" target="_blank" rel="noopener">LinkedIn <span>↗</span></a></li>
            
                </ul>
              </div>
              <div>
                
                <ul>
                  
                </ul>
              </div>
              <div>
                <div className="col-head">Contact</div>
                <ul>
                  <li><a href="mailto:ranjeettekam18@gmail.com">ranjeettekam18@gmail.com</a></li>
                  <li> India</li>
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
