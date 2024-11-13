import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-2 text-sm text-stone-400">{EXPERIENCES.year}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h3 className="mb-2 font-semibold">
            {EXPERIENCES.role} -{" "}
            <span className="text-sm text-stone-500">
              {EXPERIENCES.company}
            </span>
          </h3>
          <p className="mb-4 text-stone-400">{EXPERIENCES.description}</p>
          {EXPERIENCES.technologies.map((tech, index) => (
            <span
              key={index}
              className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
