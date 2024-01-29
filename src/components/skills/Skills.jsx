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
  "JavaScript",
  "TypeScript",
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
            <div className="skill-title">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 0 0-1 1v14c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H3Zm4.3 5.7a1 1 0 0 1 1.4-1.4l3 3c.4.4.4 1 0 1.4l-3 3a1 1 0 0 1-1.4-1.4L9.6 12 7.3 9.7ZM13 14a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h2>Frontend</h2>
            </div>
            <div className="skills-list">
              {frontend.map((skill) => (
                <Chip className="chips" label={skill} />
              ))}
            </div>

            <div className="skill-title">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 7.2c4.4 0 8-1.2 8-2.6C20 3.2 16.4 2 12 2S4 3.2 4 4.6C4 6 7.6 7.2 12 7.2ZM12 22c5 0 8-1.7 8-2.6V15h-.2a7.8 7.8 0 0 1-1.3.7l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.1 10.1 0 0 1-1.3-.7L4 15v4.4c0 1 3 2.6 8 2.6Zm7-14c-.1.2-.3.2-.5.3l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.2 10.2 0 0 1-1.3-.7L4 7.6V12c0 1 3 2.6 8 2.6s8-1.7 8-2.6V7.6h-.2a7.8 7.8 0 0 1-.7.5Z" />
              </svg>

              <h2>Backend</h2>
            </div>
            <div className="skills-list">
              {backend.map((skill) => (
                <Chip className="chips" label={skill} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
