import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const BackLinkBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;

  color: #373737;
  background-color: transparent;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 15px;
  &:hover {
    color: #2e8b57;
  }
  > svg {
    fill: currentColor;
  }
`;
