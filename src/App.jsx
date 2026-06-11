import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReelsSection from './components/ReelsSection';
import Marquee from './components/Marquee';
import Partners from './components/Partners';
import Steps from './components/Steps';
import Notes from './components/Notes';
import About from './components/About';
// import Testimonials from './components/Testimonials';
import Audience from './components/Audience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page">
      <a id="top" />
      <Navbar />
      <Hero />
      <ReelsSection />
      <Marquee />
      <Partners />
      <Steps />
      <Notes />
      <About />
      {/* <Testimonials /> */}
      <Audience />
      <Footer />
    </div>
  );
}

export default App;
