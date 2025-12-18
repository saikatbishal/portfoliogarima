import React, { useState } from "react";
import Gmail from "../../assets/Gmail";
import LinkedIn from "../../assets/LinkedIn";
import GitHub from "../../assets/GitHub";
import Twitter from "../../assets/Twitter";

const ContactSection = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // TODO: Replace with your email service integration
      // Example: EmailJS, Formspree, or custom backend API

      // Simulated API call (replace with actual implementation)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Example EmailJS integration would look like:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      url: personal.linkedin || "https://linkedin.com",
      color: "hover:bg-blue-600/20",
    },
    {
      name: "GitHub",
      icon: <GitHub />,
      url: personal.github || "https://github.com",
      color: "hover:bg-purple-600/20",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      url: personal.twitter || "https://twitter.com",
      color: "hover:bg-sky-500/20",
    },
    {
      name: "Email",
      icon: <Gmail />,
      url: `mailto:${personal.email}`,
      color: "hover:bg-red-600/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-slate-200 mb-6 text-left">
          Send a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-2 text-left"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2 text-left"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-slate-300 mb-2 text-left"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Job Opportunity"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2 text-left"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              placeholder="Your message here..."
            />
          </div>

          {status.message && (
            <div
              className={`p-4 rounded-lg text-sm text-left ${
                status.type === "success"
                  ? "bg-green-500/10 border border-green-500/30 text-green-400"
                  : "bg-red-500/10 border border-red-500/30 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:shadow-none"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Contact Info & Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-200 mb-6 text-left">
            Get in Touch
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6 text-left">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about QA and testing. Feel free to reach out
            through the form or connect with me on social media!
          </p>

          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 text-slate-300">
              <Gmail />
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {personal.email}
              </a>
            </div>
            {personal.phone && (
              <div className="flex items-center gap-3 text-slate-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="white"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <span>{personal.phone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-slate-200 mb-6 text-left">
            Connect on Social Media
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl transition-all duration-300 ${link.color}`}
              >
                {link.icon}
                <span className="text-slate-300 font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
