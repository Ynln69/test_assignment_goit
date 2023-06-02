import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeSection = styled.section`
  padding: 80px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  >(Link) {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const LinkImg = styled(Link)`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
`;
