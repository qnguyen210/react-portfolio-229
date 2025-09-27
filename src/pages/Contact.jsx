
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

  // Renders contact info and a contact form
  return (
    <div>
      <h2>Contact Me</h2>

      {/* Contact info panel */}
      <section>
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
      </section>

      {/* Interactive form */}
      <section>
        <h3>Send me a message</h3>
        <form onSubmit={handleSubmit}>
          {/* First Name field */}
          <div>
            <label>
              First Name:<br />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Last Name field */}
          <div>
            <label>
              Last Name:<br />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Contact Number field */}
          <div>
            <label>
              Contact Number:<br />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Email Address field */}
          <div>
            <label>
              Email Address:<br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Message field */}
          <div>
            <label>
              Message:<br />
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

