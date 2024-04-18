import { Page } from "@customTypes/types";

export function isPage(page: Page): boolean {
  return window.location.pathname.includes(page);
}
