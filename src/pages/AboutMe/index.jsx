// import { useContext, useEffect } from "react";
import "./index.scss";
// import HandleMove from "../../Contexts/HandleMove";
import PersonalInf from "../../components/PersonalInfo";
import Line from "../../components/line";
import Education from "../../components/Education";
import Photo from "../../components/Photo";
import image from "../../assets/images/2.jpg";
import Skills from "../../components/Skills";


export default function AboutMe() {
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
