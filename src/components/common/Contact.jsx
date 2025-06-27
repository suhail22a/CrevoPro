import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import astronautImage from '../../assets/contactImage.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    email: '',
    contactNumber: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      time: new Date().toLocaleString()
    };

    emailjs.send(
      'service_ork2p9o',     // ✅ Your EmailJS service ID
      'template_br3zjbb',    // ✅ Your EmailJS template ID
      submissionData,
      'dlzMu0-8lluaCuGaR'    // ✅ Your EmailJS public key
    ).then(
      () => {
        alert('Message sent successfully!');
        setFormData({
          fullName: '',
          brandName: '',
          email: '',
          contactNumber: '',
          query: ''
        });
      },
      (error) => {
        console.error('FAILED...', error);
        alert(`Failed to send message: ${error.text || 'Unknown error'}`);
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-wrapper">
          <motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-title">Book an appointment</h2>
            <p className="contact-subtitle">
              now and get a free consultation with top creative
              and digital experts.
            </p>
            <p className="contact-text">
              From design to marketing, web, or e-commerce –
              <span className="brand-highlight">Crevopro</span> helps elevate your brand.
            </p>
            
            <div className="contact-image-container">
              <img 
                src={astronautImage} 
                alt="Creative Astronaut" 
                className="contact-image"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="collaborate-title">Let's Collaborate</h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="Full Name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="brandName" 
                  placeholder="Brand Name" 
                  value={formData.brandName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="contactNumber" 
                  placeholder="Contact Number" 
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="query" 
                  placeholder="FAQ query" 
                  value={formData.query}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="submit-button">
                Submit Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
