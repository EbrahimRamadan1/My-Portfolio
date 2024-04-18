import EducationField from "../EducationField";
import "./index.scss";

export default function Education() {
  return (
    <div className="Education col-12">
        <h3 className="col-12 text-center">Education & Courses</h3>
      <EducationField
        place="Bachelor of Software Engineering"
        date="Helwan University 2019 - 2023"
        data="I'm a software engineer, I graduated from the faculty of computer science, Helwan University, specializing in information sustems"
      />
      <EducationField
        place="Diploma of front end development"
        date="Eraasoft November 2023 - March 2023"
        data="I had studied Front End development using React.js as a framework at Eraasoft Academy, and the duration of the diploma was about five months."
      />
    </div>
  );
}
