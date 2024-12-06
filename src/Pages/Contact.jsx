import './Contact.css';
import Chat from '../Pages/chat/Chat.jsx';

// Import the Contact page's stylesheet and Chat component

function Contact() {
  return (
    <div className="contact-container">
      {/* Page header */}
      <header className="contact-header">
        <h1>Contact Meiqi Cheng</h1>
        <p>Get in touch with Meiqi Cheng for inquiries, research collaborations, or more information.</p>
      </header>

      {/* Contact details section */}
      <div className="contact-content">
        <h2>Email</h2>
        <p>24107816@studentmail.ul.ie</p>
        <h2>Mobile Number</h2>
        <p>+353 0838525724</p>
      </div>
      
      {/* Embed chat component */}
      <Chat />
    </div>
  );
}

export default Contact;