import "../styles/ContactUs.css";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Have questions or suggestions? We’d love to hear from you.
      </p>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <Mail className="icon" />
            <span>support@retrohub.com</span>
          </div>
          <div className="info-item">
            <Phone className="icon" />
            <span>+91 9359662678</span>
          </div>
          <div className="info-item">
            <MapPin className="icon" />
            <span>Pune, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
