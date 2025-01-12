// Contact.js
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        If you need any support, please reach out to us using the information
        below.
      </p>
      <div className="contact-info">
        <p>
          <strong>Phone:</strong> <a href="tel:8605341106">8605341106</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@example.com">abhiagore24@gmail.com</a>
        </p>
        <p>
          <strong>Support:</strong>{" "}
          <a href="https://chatgpt.com/?model=gpt-4o">ChatGPT</a>
        </p>
      </div>
      <div className="contact-icons">🚀 🚀</div>
    </div>
  );
};

export default Contact;
