import HomeRight from "../../components/HomeRight";
import Photo from "../../components/Photo";
import "./index.scss";
import image from "../../assets/images/WhatsApp Image 2024-04-02 at 00.50.05_73ab4b55.jpg";
export default function HomePage() {
  return (
    <div className="homePage col-12">
      <Photo URL={image} />
      <HomeRight />
    </div>
  );
}
