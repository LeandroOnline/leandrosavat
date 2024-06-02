import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/logotipo-de-linkedin.png";
import instagram from "../assets/icons/instagram.png";

const Networks = () => {
  return (
    <div className="about-icon">
      <a href="https://github.com/LeandroOnline" target="_blank">
        <img className="aboutimg zoom" src={github} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/leandrosavat/" target="_blank">
        <img className="aboutimg delay1 zoom" src={linkedin} alt="" />
      </a>
      <a href="https://www.instagram.com/leasavat/" target="_blank">
        <img className="aboutimg delay2 zoom" src={instagram} alt="" />
      </a>
    </div>
  );
};
export default Networks;
