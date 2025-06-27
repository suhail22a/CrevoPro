import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log('Searching for:', searchValue);
      // Implement search functionality here
    }
  };
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          variants={itemVariants}
        >
          <a href="#home">
            <img src={logo} alt="CrevoPro" />
          </a>
        </motion.div>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <motion.ul variants={navVariants}>
            <motion.li variants={itemVariants}><a href="#about">About</a></motion.li>
            <motion.li variants={itemVariants}><a href="#services">Our Services</a></motion.li>
            <motion.li variants={itemVariants}><a href="#portfolio">Our Work</a></motion.li>
            <motion.li variants={itemVariants}><a href="#why">Why Crevopro</a></motion.li>
            <motion.li variants={itemVariants}>
              <a href="#contact" className="contact-btn">Contact</a>
            </motion.li>
          </motion.ul>
        </div>

        <div className="navbar-search">
          <motion.form 
            onSubmit={handleSearchSubmit}
            className="search-form"
            variants={itemVariants}
          >
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search" 
                value={searchValue}
                onChange={handleSearch}
              />
            </div>
          </motion.form>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={`bar ${mobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
