import "./about.css";
import Award from "../../img/award.png";
import dp from "../../img/dp.jpg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={dp}
            // src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        "Hello! I'm Naveed, a React specialist, and MERN stack developer.
         With Django expertise, I craft visually stunning and functional 
         web apps. Let's collaborate and create extraordinary web experiences.
          Explore my portfolio for a glimpse of my work!
        </p>
        
      </div>
    </div>
  );
};

export default About;
