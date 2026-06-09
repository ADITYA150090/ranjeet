
import {GridScan} from "../components/GridScan/GridScan";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="region-hero" id="hero">
     <div className="hero-bg">
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="#2F293A"
    gridScale={0.1}
    scanColor="#FF9FFC"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
    lineJitter={0.1}
    scanGlow={0.5}
    scanSoftness={2}
    enableWebcam={false}
    showPreview={false}
/>
</div>

      <section className="hero">
        <div className="hero-pin">
          <div className="container">
            <div className="hero-left">
              <span className="eyebrow">
                AI CONTENT CREATOR · VIDEO EDITOR
              </span>

              <h1
                className="hero-headline"
                style={{ fontFamily: '"Inter Tight"' }}
              >
                I turn ideas into
                <em>
                  <span style={{ color: "#e8551a" }}>
                    {" "}
                    AI-powered video{" "}
                  </span>
                </em>
                that stops the scroll.
              </h1>

              <p className="hero-sub">
                I blend generative AI with hands-on editing to create ads,
                product visuals, and short-form content — faster, sharper,
                and built to perform.
              </p>

              <div style={{ marginTop: 30 }}>
                <a href="#work" className="cta-btn">
                  View My Work
                </a>
              </div>
            </div>

            <div className="hero-right">
              <ul className="hero-list">
                <li>
                  <span className="label">VIDEOS CREATED</span>
                  360+
                </li>

                <li>
                  <span className="label">CREATOR ADS</span>
                  50+
                </li>

                <li>
                  <span className="label">SHORT-FORM REELS</span>
                  200+
                </li>

                <li>
                  <span className="label">AI TOOLS MASTERED</span>
                  13+
                </li>

                <li>
                  <span className="label">LOCATION</span>
                  India
                </li>

                <li>
                  <span className="label">AVAILABLE</span>
                  Worldwide
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

