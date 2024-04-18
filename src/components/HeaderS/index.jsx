import { useRecoilState } from "recoil";
import "./index.scss";
import { $HeaderModal } from "../../store";

export default function HeaderS() {
  const [, setClicked] = useRecoilState($HeaderModal);
  // console.log(clicked)
  return (
    <div
      className="headerS"
      onClick={() => {
        setClicked(1);
      }}
      //   style={clicked ? { display: "none" } : null}
    >
      <i className="fa-solid fa-bars arrow3" />
    </div>
  );
}
