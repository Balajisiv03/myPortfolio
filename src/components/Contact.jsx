import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkozwgd");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success(
        "Thank you for getting in touch! I'm excited to connect and will get back to you as soon as possible.",
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
        }
      );
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  // Scroll function that goes topp
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="contact">
      <div className="border-t border-stone-500 pb-20 relative">
        <ToastContainer />

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl my-10 text-center"
        >
          Get in Touch
        </motion.h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 mt-8 p-6 w-full max-w-lg mx-auto rounded-lg shadow-lg border border-gray-700"
        >
          <p className="text-center text-lg text-gray-300 mt-4 mb-8">
            <span className="font-semibold">Feel free to reach out</span> with
            any questions or opportunities. I am always open to projects that
            match my skills and interests—
            <span className="text-blue-600 hover:underline">
              looking forward to connecting!
            </span>
          </p>

          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-900 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <motion.textarea
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 h-32 bg-gray-900 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
          <div className="text-lg text-center">
            <p className="text-center mb-5">or</p>
            <p>
              <span className="text-gray-300">Prefer email? Reach me at </span>
              <a
                href="mailto:balajisivakumar2003@gmail.com"
                className="text-blue-400 hover:underline text-sm md:text-xl lg:text-xl transition-all duration-300 ease-in-out hover:text-blue-500"
              >
                balajisivakumar2003@gmail.com
              </a>
            </p>
          </div>
        </form>

        <div className="mt-16 text-center border-t border-stone-500 pt-8 text-stone-400">
          <p className="mb-6 text-sm">Designed & Developed by Balaji-S</p>
          <div className="flex justify-center gap-6 text-2xl text-stone-400">
            <motion.a
              href="https://github.com/Balajisiv03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-white transition-colors duration-200"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/balajisiv03/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-white transition-colors duration-200"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/_.balaji_s._/profilecard/?igsh=Zm1vMmRidnA4ZGVw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-white transition-colors duration-200"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="tel:+917358388433"
              aria-label="Call"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-white transition-colors duration-200"
            >
              <FaPhone />
            </motion.a>
            <button
              onClick={scrollToTop}
              className="ml-40 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              aria-label="Back to Top"
            >
              <FaArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
