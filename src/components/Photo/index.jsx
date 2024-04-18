// import MyPhoto from "../../assets/images/WhatsApp Image 2024-04-02 at 00.50.05_73ab4b55.jpg";
import "./index.scss";
export default function Photo(props) {
  return (
    <div className="imageContainer  col-12 col-lg-5">
      <img src={props.URL} alt="myPhoto" />
    </div>
  );
}
