import { motion } from 'framer-motion';
import blog1 from '../../assets/blog1.svg';
import blog2 from '../../assets/blog2.svg';
import blog3 from '../../assets/blog3.svg';

const blogPosts = [
  {
    id: 1,
    title: 'Top Graphic Design Blogs',
    image: blog1,
    category: 'Design'
  },
  {
    id: 2,
    title: 'Top Digital Marketing Blogs',
    image: blog2,
    category: 'Marketing'
  },
  {
    id: 3,
    title: 'Top Web Design Blogs',
    image: blog3,
    category: 'Web'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">CrevoPro Blogs</h2>
          <p className="section-subtitle">We educate before we execute — explore insights that empower your brand.</p>
        </motion.div>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <motion.div 
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
            >
              <div className="blog-img">
                <img src={post.image} alt={post.title} />
                <div className="blog-overlay"></div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 