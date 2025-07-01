import { motion } from 'framer-motion';
import aboutImage1 from '../../assets/vikash-bg.png';
import aboutImage2 from '../../assets/vikash.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-wrapper">
          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="section-title">About Us</motion.h2>
            <motion.p variants={itemVariants} className="about-text">
              At CrevoPro, we're a team of passionate designers, marketers, and strategists 
              dedicated to fueling your brand's growth. With a focus on creativity and results, 
              we deliver solutions that help businesses stand out in today's competitive landscape.
            </motion.p>
            <motion.p variants={itemVariants} className="about-text">
              Our approach combines strategic thinking with creative execution to create meaningful 
              experiences that connect with your audience and drive business growth. We believe in 
              building long-term partnerships with our clients, understanding their unique challenges, 
              and delivering tailored solutions that exceed expectations.
            </motion.p>

            {/*
            <motion.div variants={containerVariants} className="about-stats">
              <motion.div variants={itemVariants} className="stat-item">
                <div className="stat-number">05+</div>
                <div className="stat-label">Years Served</div>
              </motion.div>
              <motion.div variants={itemVariants} className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Digital solutions delivered</div>
              </motion.div>
              <motion.div variants={itemVariants} className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy clients worldwide</div>
              </motion.div>
            </motion.div>
            */}
          </motion.div>

          <motion.div 
            className="about-images"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="about-image-bg"
              variants={imageVariants}
            >
              <img src={aboutImage1} alt="About CrevoPro Background" />
            </motion.div>
            <motion.div 
              className="about-image-front"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.8,
                    delay: 0.3
                  } 
                }
              }}
            >
              <img src={aboutImage2} alt="About CrevoPro" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;