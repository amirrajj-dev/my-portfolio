"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const fieldVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 },
  }),
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-base-200/80 backdrop-blur-md border border-gray-700 rounded-lg p-6 shadow-md"
    >
      <form className="space-y-4">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
        >
          <label
            htmlFor="name"
            className="block font-semibold mb-2 text-accent"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input border-none py-8 w-full bg-base-300/50 rounded-2xl text-accent placeholder:text-accent outline-none focus:outline-none transition-all duration-300"
            placeholder="Your Name"
          />
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
        >
          <label
            htmlFor="email"
            className="block font-semibold mb-2 text-accent"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input border-none py-8 w-full bg-base-300/50 rounded-2xl text-accent placeholder:text-accent outline-none focus:outline-none transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
        >
          <label
            htmlFor="message"
            className="block font-semibold mb-2 text-accent"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea border-none focus:border-none focus:outline-none placeholder:text-accent textarea-bordered w-full bg-base-300/50 text-accent transition-all duration-300"
            placeholder="Your message..."
            rows={5}
          />
        </motion.div>
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
        >
          <button type="submit" className="btn btn-lg btn-accent btn-soft w-full">
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
