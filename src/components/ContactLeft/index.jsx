import IconContact from "../IconConatct";
import "./index.scss";

export default function ContactLeft() {
  return (
    <div className="Left col-5">
      <h3 className="col-12">DON'T BE SHY !</h3>

      <p className="col-12">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div className="iContainer col-12">
        <i className="fa-solid fa-envelope arrow2" />
        <p className="col-12">
          <span>
            MAIL ME:
            <br />
          </span>
          ebrahimramadan18@gmail.com
        </p>
      </div>

      <div className="iContainer col-12">
        <i className="fa-solid fa-square-phone arrow2"></i>
        <p className="col-12">
          <span>
            CALL ME:
            <br />
          </span>
          01120450204
        </p>
      </div>

      <div className="links col-12">
        <IconContact
          link="https://www.facebook.com/ebrahim.eamadan"
          icon="fa-brands fa-facebook"
        />

        <IconContact
          link="https://wa.me/+201120450204"
          icon="fa-brands fa-whatsapp"
        />
        <IconContact
          link="https://github.com/EbrahimRamadan1"
          icon="fa-brands fa-github"
        />

        <IconContact
          link="https://www.linkedin.com/in/ebrahim-ramadan-35325b295"
          icon="fa-brands fa-linkedin-in"
        />
      </div>
    </div>
  );
}
