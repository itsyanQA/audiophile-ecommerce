import { Link } from "@components/styled";
import "./nav.scss";

export function Nav() {
  return (
    <nav>
      <ul className="nav-items">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/headphones">headphones</Link>
        </li>
        <li>
          <Link to="/speakers">speakers</Link>
        </li>
        <li>
          <Link to="/earphones">earphones</Link>
        </li>
      </ul>
    </nav>
  );
}
