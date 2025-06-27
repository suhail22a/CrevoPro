import { motion } from 'framer-motion';
import calendarIcon from '../../assets/calender.svg';
import digitalSolutionIcon from '../../assets/digitalSolution.svg';

const stats = [
  {
    id: 1,
    title: "Years Served",
    value: "03+",
    icon: calendarIcon
  },
  {
    id: 2,
    title: "Digital solutions delivered",
    value: "100+",
    icon: digitalSolutionIcon
  }
];

const WhyCrevoPro = () => {
  return (
    <section className="why-crevopro">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Why CrevoPro
        </motion.h2>
        
        <div className="stats-container">
          {stats.map(stat => (
            <motion.div 
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.title} />
              </div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="why-crevopro-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Looking for a Creative Design & Digital Partner You Can Rely On?
        </motion.p>
        
        <motion.p 
          className="why-crevopro-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer all-in-one solutions for majority of your Graphic Design, Digital Marketing, Website Design, and E-commerce Management. As a dynamic creative agency in India, we craft bold and effective strategies, and performance-focused experiences that help brands grow and thrive.
        </motion.p>
        
        <motion.p 
          className="why-crevopro-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From eye-catching designs and targeted campaigns to custom websites and fully managed online stores, our team blends creativity with performance to deliver real results. We handle the details, so you can focus on running your business.
        </motion.p>
        
        <motion.p 
          className="why-crevopro-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          At CrevoPro, we don't just create – we elevate. Partner with us to transform your brand through smart design, strategic marketing, and efficient e-commerce solutions tailored to your goals.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyCrevoPro; 