import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ewaanLogo from '../../assets/brandWorkWith/Ewaan.svg';
import techConnectLogo from '../../assets/brandWorkWith/tech-connect.svg';
import gourmetLogo from '../../assets/brandWorkWith/gourmet.svg';

const testimonials = [
  {
    id: 1,
    name: 'Ewaan Lifts',
    quote: '"Working with Crevopro has been a game-changer for our brand. Their designs are creative, clean, and perfectly aligned with our vision. They\'re professional, quick to respond, and always deliver on time."',
    rating: 5,
    companyLogo: ewaanLogo
  },
  {
    id: 2,
    name: 'Tech Connect',
    quote: '"The team at CrevoPro delivered exceptional results for our marketing campaign. Their creativity and attention to detail is unmatched. We\'ve seen a significant increase in engagement since implementing their strategies."',
    rating: 5,
    companyLogo: techConnectLogo
  },
  {
    id: 3,
    name: 'Gourmet Foods',
    quote: '"CrevoPro helped us establish our brand identity from scratch. Their strategic approach and design expertise were exactly what we needed. Our customers love our new look and our sales have increased by 30%."',
    rating: 5,
    companyLogo: gourmetLogo
  }
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
      
      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Client Feedback
        </motion.h2>
        
        <div className="testimonial-slider">
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {testimonials.map(testimonial => (
                <div className="swiper-slide" key={testimonial.id}>
                  <div className="testimonial-card">
                    <div className="testimonial-client">
                      <div className="client-logo">
                        <img src={testimonial.companyLogo} alt={`${testimonial.name} logo`} />
                      </div>
                     
                    </div>
                    <div className="testimonial-content">
                      <p>{testimonial.quote}</p>
                      <div className="client-info">
                        <h4>{testimonial.name}</h4>
                        <p>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="star">★</span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial; 