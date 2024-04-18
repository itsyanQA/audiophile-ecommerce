import "./header.scss";
import Logo from "@assets/shared/desktop/logo.svg?react";
import { useLocation } from "react-router-dom";
import { Nav } from "@components/nav";
import { Link } from "@components/styled";
import { Cart } from "@features/cart";
import { Menu } from "@components/menu";
import { useState } from "react";

const PAGES_WITHOUT_BORDER = ["product"];

export function Header() {
  const { pathname } = useLocation();
  const shouldHideBorder = PAGES_WITHOUT_BORDER.some((page) => pathname.includes(page));
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header
      className={`header ${pathname === "/" ? "header--inside-homepage" : "header--non-homepage"} ${
        shouldHideBorder ? "header--hide-border" : ""
      } ${isMenuOpen ? "header--menu-open" : ""}`}
    >
      <div className="header__logo-and-menu">
        <div className="header__menu-wrapper" onClick={(e) => e.stopPropagation()}>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__nav-wrapper">
        <Nav />
      </div>
      <Cart />
    </header>
  );
}
