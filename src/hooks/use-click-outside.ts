import { MutableRefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement = HTMLElement>(ref: MutableRefObject<T>, callback: () => void): void {
  const handleClick = (event: MouseEvent | TouchEvent) => {
    const target = event.target as Node;
    if (!ref.current || ref.current.contains(target)) {
      return;
    }
    callback();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, []);
}
