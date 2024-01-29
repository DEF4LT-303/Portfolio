import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/DEF4LT-303"
            target="_blank"
            className="git"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-rafi-061301158/"
            target="_blank"
            className="linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.facebook.com/ryan.rafi.921/"
            target="_blank"
            className="facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/tat._.0/"
            target="_blank"
            className="insta"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
