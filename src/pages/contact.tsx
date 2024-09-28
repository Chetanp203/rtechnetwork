// pages/contact.tsx
import Navbar from '../components/Navbar';
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to backend or API)
    console.log('Form submitted:', form);
    setForm({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>

        {/* Visit Us Section */}
        <section id="visit-us" className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Visit Us</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-8">
            We’d love to welcome you to our office! Visit us at the address below:
          </p>
          <address className="text-lg font-medium">
            1234 Company Address,<br />
            Business Park, City,<br />
            Country, ZIP Code
          </address>
        </section>

        {/* Contact Information Section */}
        <section id="contact-info" className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-8">
            Get in touch with us via the following methods:
          </p>
          <ul className="list-none text-lg">
            <li><strong>Email:</strong> contact@company.com</li>
            <li><strong>Phone:</strong> +123 456 7890</li>
            <li><strong>Fax:</strong> +123 456 7891</li>
            <li><strong>Working Hours:</strong> Monday - Friday, 9 AM - 6 PM</li>
          </ul>
        </section>

        {/* Send Message Section */}
        <section id="send-message" className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Send Message</h2>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
