import { useNavigate } from "react-router-dom";
import "./go-back.scss";

export function GoBack() {
  const navigate = useNavigate();

  return (
    <button className="go-back" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}
