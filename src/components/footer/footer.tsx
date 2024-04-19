import "./footer.scss";
import { Nav } from "@components/nav";
import Logo from "@assets/shared/desktop/logo.svg?react";
import { Social } from "@components/social";
import { CodedBy } from "@components/coded-by/coded-by";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-and-nav">
        <Logo />
        <Nav />
      </div>

      <div className="footer__typography-and-icons">
        <div className="footer__typography">
          <p className="footer__audiophile-description">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are
            devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <span className="footer__copyright">Copyright 2021. All Rights Reserved</span>
        </div>
        <Social />
      </div>
      <CodedBy />
    </footer>
  );
}
