// import { useRecoilState } from 'recoil'
import { NavLink } from "react-router-dom";
import "./index.scss";
import IconContact from "../IconConatct";
import { useRecoilState } from "recoil";
import { $HeaderModal } from "../../store";

export default function HeaderModal() {
  const [, setClicked] = useRecoilState($HeaderModal);
  return (
    <div
      className="headerModal col-12 d-lg-none "
      onClick={() => setClicked(0)}
    >
      <div
        className="containerS col-9 col-md-5 d-lg-none animate__animated animate__slideInLeft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="iconS col-12">
          <i
            className="fa-solid fa-circle-xmark arrow2"
            onClick={() => setClicked(0)}
          />
        </div>
        <div className="HeaderSContainer col-12">
          <NavLink
            className="linkS col-12"
            to="/"
            onClick={() => setClicked(0)}
          >
            <i className="fa-solid fa-house lincIcon col-2" />
            HOME
            <span className="lineSpan col-12" />
          </NavLink>

          <NavLink
            className="linkS col-12"
            to="/About"
            onClick={() => setClicked(0)}
          >
            <i className="fa-solid fa-user lincIcon col-2" />
            ABOUT ME
            <span className="lineSpan col-12" />
          </NavLink>

          <NavLink
            className="linkS col-12"
            to="/Portfolio"
            onClick={() => setClicked(0)}
          >
            <i className="fa-solid fa-briefcase lincIcon col-2" />
            MY PORTFOLIO
            <span className="lineSpan col-12" />
          </NavLink>

          <NavLink
            className="linkS col-12"
            to="/Contact"
            onClick={() => setClicked(0)}
          >
            <i className="fa-solid fa-envelope lincIcon col-2" />
            CONTACT ME
            <span className="lineSpan col-12" />
          </NavLink>

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
      </div>
    </div>
  );
}
