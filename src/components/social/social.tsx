import "./social.scss";
import FacebookIcon from "@assets/shared/desktop/icon-facebook.svg?react";
import InstagramIcon from "@assets/shared/desktop/icon-instagram.svg?react";
import TwitterIcon from "@assets/shared/desktop/icon-twitter.svg?react";
import { Link } from "@components/styled";

export function Social() {
  return (
    <div className="social">
      <Link to="https://www.facebook.com/" target="_blank">
        <FacebookIcon />
      </Link>

      <Link to="https://www.x.com/" target="_blank">
        <TwitterIcon />
      </Link>

      <Link to="https://www.instagram.com/" target="_blank">
        <InstagramIcon />
      </Link>
    </div>
  );
}
