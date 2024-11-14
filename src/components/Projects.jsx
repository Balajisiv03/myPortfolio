import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects">
      <div className="pb-1">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-3/4"
              >
                <div className="flex items-center">
                  {" "}
                  <h3 className="mb-2 font-semibold text-2xl">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 mb-3 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 shadow-md shadow-gray-500/20"
                  >
                    Explore on GitHub
                  </a>
                </div>

                <p className="mb-4 text-stone-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-5 rounded bg-stone-900 p-2 text-sm text-stone-300 font-medium"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
