import axios from 'axios';

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      await axios.post('http://localhost:8000/api/contact/', data);
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}