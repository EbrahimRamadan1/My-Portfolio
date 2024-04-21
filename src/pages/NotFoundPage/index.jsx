import { Link } from "react-router-dom";
import "./index.scss";

export default function NotFoundPage() {
  return (
    <div className="not-found-page col-12">
      <h2 className="col-12 text-center">
        ERROR <span>404 !</span>
      </h2>
      <h3 className="col-12 text-center">PAGE NOT FOUND</h3>
      <Link className="button3 text-center" to="/">Go to home page</Link>
    </div>
  );
}
