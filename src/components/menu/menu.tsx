import "./menu.scss";
import HamburgerIcon from "@assets/shared/tablet/icon-hamburger.svg?react";
import { CategoryCards } from "@components/category-cards";
import { useClickOutside } from "@hooks/use-click-outside";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

type MenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const clickAction = (e: MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen((prevState) => !prevState);
  };
  const { key } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [key]);

  return (
    <>
      {!isMenuOpen ? (
        <HamburgerIcon onClick={clickAction} className={`menu__icon ${isMenuOpen ? "menu__icon--disabled" : ""}`} />
      ) : (
        <span onClick={clickAction} className="menu__close-icon">
          ✖
        </span>
      )}
      {isMenuOpen &&
        createPortal(
          <div className="menu" ref={menuRef}>
            <CategoryCards />
          </div>,
          document.body
        )}
    </>
  );
}
