
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
