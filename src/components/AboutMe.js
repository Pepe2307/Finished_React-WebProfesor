import { useEffect, useState } from "react";

import MuniLogo from "../images/msm.png"
import SocialIcons from "../components/SocialIcons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={MuniLogo} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Subsecretaría de modernizacion - Municipalidad de San Miguel</h4>
            <h5>Mas del 1.000 alumnos capacitados el utlimo año!</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>

            <div className="infoContainer">
              <div className="row">
                
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Ubicacion de los cursos:</span>
                  <p>{location}</p>
                </div>
                
              </div>
            </div>

            <div className="buttonContainer">
                <a href="https://www.msm.gov.ar/" target="_blank" rel="noopener noreferrer">
                    <button className="btn downloadCV">Web de la Municipalidad</button>
                </a>
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
