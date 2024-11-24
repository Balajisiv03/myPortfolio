import profilePic from "../assets/profileimage.jpg";
import { ABOUTME_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containervariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childvariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // it is stagger each letter appearance
    },
  }),
};
const paraletterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.01, // can reduce delay for faster display
      duration: 0.01, // shorter duration for quicker animation
      ease: "easeOut",
    },
  }),
};

const AboutPage = () => {
  const name = "Balaji S";
  const msg = "Hey there! I am Balaji S";
  return (
    <section id="about">
      <div className="mt-20 pb-4 lg:mb-36">
        <div className="flex flex-wrap flex-row">
          {msg.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={`text-white text-xl block lg:hidden ${
                char === " " ? "w-2" : ""
              } ${index % 2 === 0 ? "text-blue-300" : "text-blue-400"}`}
            >
              {char}
            </motion.span>
          ))}

          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
              <motion.img
                src={profilePic}
                alt="Balaji"
                width={450}
                height={450}
                className="border border-stone-800 rounded-3xl sm:w-50 h-50"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containervariants}
              className="flex flex-col items-center lg:items-start mt-10"
            >
              <motion.h2
                variants={childvariants}
                className="pb-2 text-4xl tracking-tighter lg:text-8xl hidden sm:block"
              >
                {name.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.span
                variants={childvariants}
                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent hidden sm:block"
              >
                <span className="text-blue-100">Full Stack</span>{" "}
                <span>Developer</span>
              </motion.span>
              <motion.p
                variants={childvariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              >
                {ABOUTME_CONTENT.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={paraletterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <motion.a
                variants={childvariants}
                href="/CIT_BALAJI-S_CSE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
