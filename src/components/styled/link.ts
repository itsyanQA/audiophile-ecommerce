import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  $width?: string;
};

export const Link = styled(RouterLink)<LinkProps>`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  width: ${(props) => (props.$width ? props.$width : "unset")};
`;
