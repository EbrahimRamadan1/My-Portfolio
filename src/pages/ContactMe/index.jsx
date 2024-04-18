import ContactLeft from "../../components/ContactLeft";
import Form from "../../components/Form";
import "./index.scss";

export default function ContactMe() {
  return (
    <div className="Contact col-12">
      <h2 className="col-12 text-center">
        GET IN <span>TOUCH</span>
      </h2>
      <ContactLeft />
      <Form />
    </div>
  );
}
