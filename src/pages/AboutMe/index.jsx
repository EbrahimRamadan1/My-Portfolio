// import { useContext, useEffect } from "react";
import "./index.scss";
// import HandleMove from "../../Contexts/HandleMove";
import PersonalInf from "../../components/PersonalInfo";
import Line from "../../components/line";
import Education from "../../components/Education";
import Photo from "../../components/Photo";
import image from "../../assets/images/2.jpg";
import Skills from "../../components/Skills";

// import 'animate.css';
// import Icon from "../../components/Icons/Icon";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  // const [, setPosition] = useContext(HandleMove);
  // var e.clientX = 0;
  // useEffect(() => {
  // //   const handleMouseMove = (e) => {
  // //     setPosition({ x: e.clientX, y: e.clientY });
  // //   };
  // //   // return handleMouseMove;
  // // },[]);
  return (
    <div className="aboutMe col-12">
      <h2>
        ABOUT <span>ME</span>
      </h2>
      <div className="sec1 coL-12">
        <Photo URL={image} />
        <PersonalInf className="col-6" />
      </div>
      <Line />
      <Education />
      <Line />
      <Skills />
    </div>
  );
}
