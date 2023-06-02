import styled from "@emotion/styled";

export const TweetsSection = styled.section`
  padding: 120px 16px;
  text-align: center;
`;

export const LoadMore = styled.button`
  padding: 14px 56px;
  margin-top: 40px;
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;

  color: #373737;
  background: #ebd8ff;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  &:hover {
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    color: #ebd8ff;
  }
`;
