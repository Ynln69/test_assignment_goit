import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  padding: 15px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  > nav {
    padding: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 10px 22px;
  border-radius: 4px;

  color: #483d8b;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  &.active {
    color: white;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
    border-radius: 100px;
  }
`;
