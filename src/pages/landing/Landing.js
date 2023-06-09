import MuniLogo from "../../images/msm.png"
import Presentacion_3D_Pablo from '../../pdfs/Presentacion_3D_Pablo.pdf';
import { Slider } from "../../components/Slider/Slider";
import SocialIcons from "../../components/SocialIcons";
import angelMuni6 from "../../images/angel6.png"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Landing = ({ name, tagline }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    angelMuni: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "25%",
    },

    MuniLogo: {
        position: "absolute",
        bottom: "50px",
        opacity: "0.3",
        mixBlendMode: "lighten",
        height: "25%",
      },
      
      
    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>


        <motion.h1
          className="name"
          style={styles.name}
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {tagline}
        </motion.p>

      </div>
      
      <div className="image-container">
        <motion.img
          className="landingImage"
          ref={ref}
          initial={{ x: "4vw", opacity: 0 }}
          animate={inView ? { x: -10, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.MuniLogo}
          src={MuniLogo}
          alt=""
        />
      </div>   
      
      <SocialIcons />

 

      <div className="slider_section">
        <img  className='slider_img' src={angelMuni6}/>
      </div>

      {/* <div className="slider_section">
            <Slider/>
      </div> */}

    </section>
    
  );
};

export default Landing;
