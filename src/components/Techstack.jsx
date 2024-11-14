import {
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoBootstrap,
} from "react-icons/bi";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFigma,
  SiGit,
  SiPowerbi,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techstack = () => {
  return (
    <section id="techstack" className="px-4 sm:px-8 pb-12">
      <div className="pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl sm:text-5xl font-semibold"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2.5)}
          >
            <RiReactjsLine className="text-4xl sm:text-6xl text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2.5)}
          >
            <SiJavascript className="text-4xl sm:text-6xl text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(3.5)}
            className="p-4"
          >
            <TbBrandNextjs className="text-4xl sm:text-6xl" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(5)}
            className="p-4"
          >
            <SiMongodb className="text-4xl sm:text-6xl text-cyan-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2.5)}
            className="p-4"
          >
            <BiLogoPostgresql className="text-4xl sm:text-6xl text-sky-700" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(3)}
            className="p-4"
          >
            <SiMysql className="text-4xl sm:text-6xl text-orange-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(3)}
            className="p-4"
          >
            <SiExpress className="text-4xl sm:text-6xl text-gray-700" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2)}
            className="p-4"
          >
            <FaNodeJs className="text-4xl sm:text-6xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(3.1)}
            className="p-4"
          >
            <SiCss3 className="text-4xl sm:text-6xl text-blue-600" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2.5)}
            className="p-4"
          >
            <BiLogoTailwindCss className="text-4xl sm:text-6xl text-teal-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2)}
            className="p-4"
          >
            <SiFigma className="text-4xl sm:text-6xl text-pink-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(3)}
            className="p-4"
          >
            <SiGit className="text-4xl sm:text-6xl text-red-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(3)}
            className="p-4"
          >
            <SiPowerbi className="text-4xl sm:text-6xl text-yellow-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2.5)}
            className="p-4"
          >
            <BiLogoBootstrap className="text-4xl sm:text-6xl text-indigo-600" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(0.7)}
            className="p-4"
          >
            <FaGithub className="text-4xl sm:text-6xl text-gray-800" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;
