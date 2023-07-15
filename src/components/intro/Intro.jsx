import "./intro.css";
import Me from "../../img/moon.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className=" warn fadeInTop i-intro">Hello, My name is</h2>
          <h1 className="i-name fadeInLeft">Naveed Ul Rehman</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front End Developer</div>
              <div className="i-title-item">Back End Developer</div>
              <div className="i-title-item">Android Developer</div>
              <div className="i-title-item">MERN Stack</div>
              <div className="i-title-item">Django</div>
            </div>
          </div>
          <p className="i-desc">
          I develop services for customers of all sizes, expert in modern
           websites, web services and online stores
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
