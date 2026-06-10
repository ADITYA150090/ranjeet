import './Marquee.css';

export default function Marquee() {
  const items = [
    { text: 'AI Ad · Kling', em: 'Premiere Pro' },
    // { text: '475K+ AI LEARNERS' },
    { text: 'Product Visual · Higgsfield', em: 'Magnific' },
    { text: 'Short-form Reel · RunwayML' },
    // { text: 'NEW AI TOOL DROPS —', em: 'NEW VIDEO SHARED' },
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            <span className="dot" />
            {' '}{item.text}{item.em && <> <em>{item.em}</em></>}
          </span>
        ))}
      </div>
    </div>
  );
}
