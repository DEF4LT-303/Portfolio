import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Knowledge Nexus",
    img: "/KnowledgeNexus.png",
    hosted: "https://knowledge-nexus-lime.vercel.app",
    github: "https://github.com/DEF4LT-303/BRACU-Knowledge-Nexus",
    desc: "A web-based platform that includes user account management functionalities, such as user registration, login, profile update, along with features like post creation, upvoting and downvoting mechanisms, discussion threads, and search functionality.",
  },
  {
    id: 2,
    title: "NextJS Auth Utility",
    img: "/NextAuth.png",
    hosted: "https://next-auth-project-teal.vercel.app",
    github: "https://github.com/DEF4LT-303/Next-Auth-Utility",
    desc: "Project focusing on Authentication and Authorization with credentials as well as OAuth, Email verification, Password reset, 2 Factor Authentication, client & server side session handleing and more.",
  },
  {
    id: 3,
    title: "Bracu Thesis Finder",
    img: "/ThesisFinder.png",
    hosted: "https://bracu-thesis-finder.vercel.app",
    github: "https://github.com/DEF4LT-303/BRACU-Thesis-Finder",
    desc: "A NextJS website for users to find, create or apply to thesis groups integrated with realtime chat feature using Socket.io and profile customizations.",
  },
  {
    id: 3,
    title: "League Landing Page",
    img: "/League.png",
    hosted: "https://league-landing-page.vercel.app",
    github: "https://github.com/DEF4LT-303/League-Landing-Page",
    desc: "A league of legends themed landing page built with DaisyUI.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="links">
              <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="icon"
                href={item.github}
                target="_blank"
              >
                <GitHubIcon />
              </motion.a>
              {item.hosted && (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="icon"
                  href={item.hosted}
                  target="_blank"
                >
                  <OpenInNewSharpIcon />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
