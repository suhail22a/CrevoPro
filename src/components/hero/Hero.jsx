import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.svg';
import ansika from '../../assets/brandWorkWith/ansika.svg';
import carefirst from '../../assets/brandWorkWith/carefirst.svg';
import ewaan from '../../assets/brandWorkWith/Ewaan.svg';
import gourmet from '../../assets/brandWorkWith/gourmet.svg';
import oculus from '../../assets/brandWorkWith/Oculus.svg';
import pretty from '../../assets/brandWorkWith/pretty.svg';
import techConnect from '../../assets/brandWorkWith/tech-connect.svg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const brandVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2
      }
    }
  };

  const brandItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 0.7, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Fuel Your <br />
            Brand's <br />
            Growth <br />
            with <span>Crevopro</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            — Design, Market, and Sell Smarter.
          </motion.p>
        </motion.div>

        <div className="hero-image-wrapper">
          <motion.img 
            src={heroImage} 
            alt="Hero" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-statue"
          />
        </div>

        <motion.div 
          className="brands-section"
          initial="hidden"
          animate="visible"
          variants={brandVariants}
        >
          <motion.h3 variants={brandItemVariants} className="brands-title">
          <br />
            Brands we've worked with
          </motion.h3>
          
          <div className="brands-marquee-wrapper">
            <motion.div 
              className="brands-marquee"
              initial={{ x: 0 }}
              animate={{ x: [0, -1000] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 18,
                ease: 'linear',
              }}
            >
              <div className="brands-container">
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={gourmet} alt="Gourmet" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={ewaan} alt="Ewaan" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={ansika} alt="Ansika" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={oculus} alt="Oculus" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={techConnect} alt="Tech Connect" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={carefirst} alt="Care First" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={pretty} alt="Pretty" />
                </motion.div>
                {/* Duplicate for seamless loop */}
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={gourmet} alt="Gourmet" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={ewaan} alt="Ewaan" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={ansika} alt="Ansika" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={oculus} alt="Oculus" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={techConnect} alt="Tech Connect" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={carefirst} alt="Care First" />
                </motion.div>
                <motion.div variants={brandItemVariants} className="brand-item">
                  <img src={pretty} alt="Pretty" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
