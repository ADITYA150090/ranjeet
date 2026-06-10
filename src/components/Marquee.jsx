import './Marquee.css';

export default function Marquee() {
  const items = [
    { text: 'LETS MAKE SOMETHING THAT GETS NOTICED' },
     { text: 'START A PROJECT' },
    { text: ' REPLY WITHIN 24 HOURS ' },
    { text: 'AVAILABLE FOR BRANDS & AGENCIES' },
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
