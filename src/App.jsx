import { lazy, Suspense, useState, useEffect } from 'react';
import logo from './assets/logo.svg';

// Import Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Custom loader component
const Loader = () => (
  <div className="loader-container">
    <div className="loader">
      <div className="loader-circle"></div>
      <div className="loader-circle"></div>
      <img src={logo} alt="CrevoPro" className="loader-logo" />
    </div>
  </div>
);

// Import components with lazy loading for better performance
const Navbar = lazy(() => import('./components/common/Navbar'));
const Hero = lazy(() => import('./components/hero/Hero'));
const About = lazy(() => import('./components/common/About'));
const Services = lazy(() => import('./components/services/Services'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const WhyCrevoPro = lazy(() => import('./components/common/WhyCrevoPro'));
const Testimonial = lazy(() => import('./components/testimonial/Testimonial'));
const Blog = lazy(() => import('./components/blog/Blog'));
const Contact = lazy(() => import('./components/common/Contact'));
const Footer = lazy(() => import('./components/common/Footer'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <WhyCrevoPro />
          <Testimonial />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
