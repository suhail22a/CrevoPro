import { motion } from 'framer-motion';
import { useState } from 'react';

// Import service icons
import graphicDesignIcon from '../../assets/graphic-design.svg';
import digitalMarketingIcon from '../../assets/digitalMarketing.svg';
import webDesignIcon from '../../assets/websiteDesign.svg';
import ecommerceIcon from '../../assets/eccomerce.svg';

const serviceItems = [
  {
    id: 1,
    icon: graphicDesignIcon,
    title: 'Graphic Design',
    description: 'Professional graphic design services for all your branding and marketing needs, including logo design, brand identity, print materials, and digital assets.',
  },
  {
    id: 2,
    icon: digitalMarketingIcon,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns to boost your online presence and reach, including SEO, social media marketing, content strategy, and paid advertising.',
  },
  {
    id: 3,
    icon: webDesignIcon,
    title: 'Website Design',
    description: 'Custom website design and development for businesses of all sizes, focusing on user experience, responsive design, and conversion optimization.',
  },
  {
    id: 4,
    icon: ecommerceIcon,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce solutions to help you sell products online effectively, including store setup, payment integration, and inventory management.',
  }
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-icon">
        <img src={service.icon} alt={service.title} />
      </div>
       {/* <motion.h2 className="service-title">{service.title}</motion.h2> */}
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <motion.div 
        className="service-link"
        animate={{ x: isHovered ? 10 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span>Learn More</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
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

  return (
    <section id="services" className="services section-padding">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">Our Services</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">We provide a wide range of creative services</motion.p>
        </motion.div>
        
        <div className="services-grid">
          {serviceItems.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 