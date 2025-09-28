
// Contact page component
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  // React Router navigation hook
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: ""
  });

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData); // captured data
    navigate("/"); // redirect to Home
  }

  // Renders contact info and a contact form with improved styling
  return (
    <div className="container">
      <h2>Contact Me</h2>

      <div className="contact-layout">
        {/* Contact info panel */}
        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ngocquynhh21@gmail.com">ngocquynhh21@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+16473541270">(647) 354-1270</a>
          </p>
          <p><strong>Location:</strong> Toronto, ON</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/quinn-nguyen-22851b324/" target="_blank" rel="noreferrer">
              linkedin.com/in/quinn-nguyen-22851b324
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/qnguyen210" target="_blank" rel="noreferrer">
              github.com/qnguyen210
            </a>
          </p>
        </div>

        {/* Interactive form */}
        <div className="contact-form-card">
          <h3>Send me a message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

