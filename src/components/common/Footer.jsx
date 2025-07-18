import { motion } from 'framer-motion';
import logo from '../../assets/logo3.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h4 className="footer-title">Graphic Designing</h4>
            <ul className="footer-links">
              <li><a href="#services">Logo Design</a></li>
              <li><a href="#services">Brand Identity</a></li>
              <li><a href="#services">Social Media Graphics</a></li>
              <li><a href="#services">Print Materials</a></li>
              <li><a href="#services">Packaging Design</a></li>
              <li><a href="#services">Illustration</a></li>
              <li><a href="#services">Marketing Collateral</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Web Designing</h4>
            <ul className="footer-links">
              <li><a href="#services">Website Design</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Responsive Design</a></li>
              <li><a href="#services">Landing Pages</a></li>
              <li><a href="#services">Website Redesign</a></li>
              <li><a href="#services">Mobile App Design</a></li>
              <li><a href="#services">Custom Web Applications</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Digital Marketing</h4>
            <ul className="footer-links">
              <li><a href="#services">SEO Optimization</a></li>
              <li><a href="#services">Social Media Marketing</a></li>
              <li><a href="#services">Content Marketing</a></li>
              <li><a href="#services">Email Marketing</a></li>
              <li><a href="#services">PPC Advertising</a></li>
              <li><a href="#services">Analytics & Reporting</a></li>
              <li><a href="#services">Marketing Strategy</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">E-commerce Management</h4>
            <ul className="footer-links">
              <li><a href="#services">Online Store Setup</a></li>
              <li><a href="#services">Product Management</a></li>
              <li><a href="#services">Payment Gateway Integration</a></li>
              <li><a href="#services">Inventory Management</a></li>
              <li><a href="#services">Order Fulfillment</a></li>
              <li><a href="#services">E-commerce Marketing</a></li>
              <li><a href="#services">Customer Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-logo-container">
          <img src={logo} alt="CrevoPro" className="footer-bottom-logo" />
        </div>
        
        <div className="footer-contact">
          <div className="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="footer-icon">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <span>Dehradun, Uttarakhand, India</span>
          </div>
          <div className="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="footer-icon">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            <span>+91 703 7792 988</span>
          </div>
          <div className="footer-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="footer-icon">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            <span>infocrevopro@gmail.com</span>
          </div>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div className="footer-social footer-social-center" style={{columnGap: '3.5rem'}}>
            <a href="https://www.facebook.com/profile.php?id=61576661860797" aria-label="Facebook" style={{marginRight: '3.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="https://x.com/CrevoPro" aria-label="Twitter" style={{marginRight: '3.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
            <a href="https://wa.me/917037792988" aria-label="WhatsApp" style={{marginRight: '3.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.956 7.956 0 0 0 8.003 0C3.582 0 0 3.582 0 8c0 1.409.368 2.789 1.066 4.001L.057 16l4.104-1.078A7.963 7.963 0 0 0 8.003 16c4.421 0 8.003-3.582 8.003-8 0-2.137-.833-4.146-2.405-5.674zM8.003 14.938c-1.276 0-2.527-.338-3.61-.978l-.258-.153-2.435.64.65-2.374-.168-.244A6.96 6.96 0 0 1 1.04 8c0-3.85 3.13-6.98 6.963-6.98 1.862 0 3.61.726 4.93 2.045A6.96 6.96 0 0 1 14.963 8c0 3.85-3.13 6.938-6.96 6.938zm3.813-5.278c-.209-.104-1.238-.611-1.429-.68-.191-.07-.33-.104-.47.104-.138.209-.54.68-.662.82-.122.139-.244.157-.453.052-.209-.104-.882-.325-1.68-1.037-.621-.553-1.04-1.237-1.163-1.446-.122-.209-.013-.322.092-.426.095-.094.209-.244.313-.366.104-.122.139-.209.209-.348.07-.139.035-.261-.017-.366-.052-.104-.47-1.137-.644-1.557-.17-.409-.343-.353-.47-.36-.122-.008-.261-.01-.4-.01-.139 0-.366.052-.557.261-.191.209-.73.715-.73 1.744 0 1.029.748 2.022.853 2.164.104.139 1.47 2.25 3.567 3.065.499.172.888.274 1.192.351.501.12.957.104 1.318.063.402-.047 1.238-.506 1.413-.995.174-.488.174-.906.122-.995-.052-.087-.191-.139-.4-.244z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/crevopro/" aria-label="Instagram" style={{marginRight: '3.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/crevo-pro-a216ab368/" aria-label="LinkedIn" style={{marginRight: '3.5rem'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} CrevoPro. All Rights Reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="footer-separator">|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 
