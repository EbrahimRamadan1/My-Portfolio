import InfoDiv from "../infoDiv";
// import Button from "../Button";
import CV from "../CV";
import "./index.scss";
export default function PersonalInf() {
  return (
    <div className="personalInfo col-12 col-lg-6">
      {/* <h2>
        ABOUT <span>ME</span>
      </h2> */}
      <h3 className="col-12">Personal Information</h3>
      <InfoDiv name="First Name" value="Ebrahim" />
      <InfoDiv name="Last Name" value="Ramadan" />
      <InfoDiv name="Age" value="23 years" />
      <InfoDiv name="Nationality " value="Egyption" />
      <InfoDiv name="Adress" value="Giza,  Egypt" />
      <InfoDiv name="Phone" value="01120450204" />
      <InfoDiv name="Work" value="Front End Developer" />
      <InfoDiv name="Language" value="Arabic, English" />
      <InfoDiv
        name="Email"
        value={<a href="ebrahimramadan18@gmail.com">Gmail</a>}
      />
      <InfoDiv
        name="GitHub"
        value={<a href="https://github.com/EbrahimRamadan1">EbrahimRamadan1</a>}
      />
      <div className="buttonContainer col-12">
        <CV title="Download CV" />
      </div>
    </div>
  );
}
