import './Marquee.css';

export default function Marquee() {
  const items = [
    { text: 'DAILY VIDEO ON AI', em: 'since 2020' },
    { text: '475K+ AI LEARNERS' },
    { text: 'EMERGENT · KLING AI · MANUS AI', em: 'partners' },
    { text: 'AI FOR FOUNDERS & CREATORS' },
    { text: 'NEW AI TOOL DROPS —', em: 'NEW VIDEO SHARED' },
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
