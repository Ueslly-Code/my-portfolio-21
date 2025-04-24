import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xnnpopvj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    });
  };

  return (
    <div id="contact" className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-screen-md mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 bg-[#111] border border-gray-700 text-white rounded-md shadow-md focus:ring-2 focus:ring-green-400 outline-none transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.03 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 bg-[#111] border border-gray-700 text-white rounded-md shadow-md focus:ring-2 focus:ring-green-400 outline-none transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.03 }}
          />
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 bg-[#111] border border-gray-700 text-white rounded-md shadow-md focus:ring-2 focus:ring-green-400 outline-none transition-all duration-300 resize-none"
            whileFocus={{ scale: 1.01 }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Send Message
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-green-100 text-green-800 px-6 py-4 rounded-lg text-center font-medium shadow-lg"
            >
              ✅ Message sent successfully! I’ll get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
