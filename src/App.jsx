import Navbar from './Pages/Navbar/Navbar.jsx';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Timeline from './Pages/Timeline/Timeline.jsx';
import FAQ from './Pages/FAQ/faq.jsx';
import Footer from './Pages/Footer/Footer.jsx';


function App() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #bfffe0 0%, #dcfff4 30%, #e6ebff 65%, #dff3ff 100%)'
      }}
    >
      <Navbar />
      <Hero />
      
      {/* Combined About, Timeline, and FAQ in a single box */}
      <section id="about" className="py-4 md:py-6">
        <div className="max-w-6xl mx-4 md:mx-auto px-4 md:px-6 lg:px-8 my-0 md:my-4 bg-white/60 backdrop-blur-md rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
          <About />
          <div id="timeline">
            <Timeline />
          </div>
          <div id="faq">
            <FAQ />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
export default App;
