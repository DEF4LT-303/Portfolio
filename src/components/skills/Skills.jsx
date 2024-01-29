import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Chip from "@mui/material/Chip";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./skills.scss";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const frontend = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "SCSS",
  "React",
  "Redux",
  "NextJS",
];

const backend = [
  "NodeJS",
  "ExpressJS",
  "Flask",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
];

const tools = ["Git", "GitHub", "Postman", "VS Code"];

const programming = ["Python", "Java", "JavaScript", "TypeScript"];

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="wrapper" variants={textVariants}>
        <motion.div className="title" variants={textVariants}>
          <h1>
            <motion.b whileHover={{ color: "orange" }} variants={textVariants}>
              About.
            </motion.b>
          </h1>

          <hr />
        </motion.div>

        <div className="desc-wrapper">
          <div className="about">
            <p className="desc">
              Enthusiastic final year Computer Science student at BRAC
              University with a keen interest in cutting-edge technologies,
              particularly Machine Learning, Artificial Intelligence, Image
              Processing, Cyber Security and Web Development.
            </p>
            <div className="icons">
              My Links
              <ArrowForwardIcon />
              <a href="https://github.com/DEF4LT-303" target="_blank">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-rafi-061301158/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://www.facebook.com/ryan.rafi.921/" target="_blank">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="skills-wrapper">
            <div className="grid-item">
              <div className="skill-title">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 9 3 3-3 3m5 0h3M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                  />
                </svg>

                <h2>Frontend</h2>
              </div>
              <div className="skills-list">
                {frontend.map((skill) => (
                  <Chip className="chips" label={skill} />
                ))}
              </div>
            </div>

            <div className="grid-item">
              <div className="skill-title">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 6c0 1.7-3.1 3-7 3S5 7.7 5 6m14 0c0-1.7-3.1-3-7-3S5 4.3 5 6m14 0v6M5 6v6m0 0c0 1.7 3.1 3 7 3s7-1.3 7-3M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
                  />
                </svg>

                <h2>Backend</h2>
              </div>
              <div className="skills-list">
                {backend.map((skill) => (
                  <Chip className="chips" label={skill} />
                ))}
              </div>
            </div>

            <div className="grid-item">
              <div className="skill-title">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                </svg>

                <h2>Programming</h2>
              </div>
              <div className="skills-list">
                {programming.map((skill) => (
                  <Chip className="chips" label={skill} />
                ))}
              </div>
            </div>

            <div className="grid-item">
              <div className="skill-title">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3"
                  />
                </svg>

                <h2>Tools</h2>
              </div>
              <div className="skills-list">
                {tools.map((skill) => (
                  <Chip className="chips" label={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
