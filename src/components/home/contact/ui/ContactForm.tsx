"use client";
import { useState } from "react";
import { motion} from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { toast, ToastOptions } from "react-toastify";
import { sendEmail } from "@/actions/email.action";
import { fieldVariants } from "@/data/varients";

const toastOptions : ToastOptions = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
};

const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name" , toastOptions);
      return false;
    }
    if (!emailReg.test(formData.email)) {
      toast.error("Enter a valid email" , toastOptions);
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      toast.error("Message must be at least 10 characters" , toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      const {success , message} = await sendEmail(formData)

      if (!success) {
        toast.error(message || "Failed to send message" , toastOptions);
      } else {
        toast.success(message || "Message sent! 🚀" , toastOptions);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error, please try again later." , toastOptions);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-base-200/80 backdrop-blur-md border border-gray-700 rounded-lg p-6 shadow-md"
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
          <label htmlFor="name" className="block font-semibold mb-2 text-accent">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input border-none py-8 w-full bg-base-300/50 rounded-2xl text-accent placeholder:text-accent outline-none focus:outline-none"
            placeholder="Your Name"
          />
        </motion.div>

        <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
          <label htmlFor="email" className="block font-semibold mb-2 text-accent">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input border-none py-8 w-full bg-base-300/50 rounded-2xl text-accent placeholder:text-accent outline-none focus:outline-none"
            placeholder="you@example.com"
          />
        </motion.div>

        <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
          <label htmlFor="message" className="block font-semibold mb-2 text-accent">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea border-none placeholder:text-accent textarea-bordered w-full focus:outline-none bg-base-300/50 text-accent transition-all duration-300"
            placeholder="Your message..."
            rows={5}
          />
        </motion.div>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
          <button
            type="submit"
            className="btn btn-lg btn-accent btn-soft w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm text-base-content" />
            ) : (
              <>
                <FaPaperPlane className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;