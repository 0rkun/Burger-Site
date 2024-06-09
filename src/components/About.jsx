import Hamburger from "../assets/hamburger.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Hamburger})` }}
      ></div>
      <div>
        <h1>
          <i>Hakkımızda</i>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam
          laboriosam saepe ullam quod, distinctio sunt tempore voluptate quidem
          praesentium iure molestiae, dolorum sequi nihil. Reiciendis minus a
          minima quos.
        </p>
      </div>
    </div>
  );
}

export default About;
