import React from "react";
import { projects } from "../dummyData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// import Hologram from "../components/hologram/Hologram";
import bg from "../assets/carouselBg.jpeg";
function Project() {
  var settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="project">
      <div className="projectTop">
        <div className="hologramBar"></div>
        <img
          src="https://cdn.vectorstock.com/i/1000x1000/47/16/two-luminous-holograms-with-light-effect-hud-vector-30114716.webp"
          alt=""
        />
        <Slider {...settings} className="projectCarousel">
          {projects.map((project, index) => (
            <div className="hologram">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ y: 0, opacity: 1 }}
                //   transition={{ duration: 1 }}
                className="hologramWrapper"
              >
                <img src={project.url} alt="" />
              </motion.div>
            </div>
          ))}
          {/* <div className="hologram">
            <div className="hologramWrapper">
              <img src={projects[1].url} alt="" />
            </div>
          </div> */}
        </Slider>
      </div>
      <div className="projectMiddle"></div>
      <div className="projectBottom"></div>
    </div>
  );
}

export default Project;
