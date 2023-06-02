import styled from "@emotion/styled";

export const UserItem = styled.li`
  position: relative;
  display: flex;
  width: 380px;
  height: 460px;
  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const UserLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const UserPicture = styled.img`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LineBox = styled.div`
  width: 100%;
  height: 8px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  > img {
    border-radius: 50%;
  }
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  > li {
    color: #ebd8ff;
    font-weight: 500;
    font-size: 20px;
    line-height: calc(24 / 20);
    text-transform: uppercase;
  }
`;

export const UserBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 14px 56px;
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;

  color: #373737;
  background: ${(props) => (props.isFollowing ? "#45b3e0" : "#ebd8ff")};
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  &:hover {
  }
`;
