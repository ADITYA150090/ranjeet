import { steps } from '../data/content';
import './Steps.css';

export default function Steps() {
  return (
    <div className="region-white">
      <section className="steps-section">
        <div className="container">
          <div className="steps-header">
            <h2 className="h-section">
              Let's get you ahead of the{' '}
              <em><span style={{ color: 'rgb(232,85,26)' }}>AI curve,</span></em> together
            </h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <a key={i} className="step-card" href={step.href} target="_blank" rel="noopener">
                <div className="num-big">{step.label}</div>
                <span className="step-tag">{step.tag}</span>
                <h4>{step.sub}</h4>
                <p>{step.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
