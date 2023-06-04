import { useState, useEffect } from "react";
import Logo from "../../images/logo.png";
import Picture from "../../images/picture.png";
import {
  UserItem,
  UserLogo,
  UserPicture,
  LineBox,
  AvatarContainer,
  ListInfo,
  UserBtn,
} from "./UserCard.styled";

const UserCard = ({ user, tweets, followers, avatar, id }) => {
  const KEY = `isFollowing_${id}`;
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(KEY)) || false
  );

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(isFollowing));
  }, [isFollowing, KEY]);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <UserItem key={id}>
      <UserLogo src={Logo} alt="card logo" />
      <UserPicture src={Picture} alt="background card" />
      <LineBox></LineBox>
      <AvatarContainer>
        <img src={avatar} alt="user" width="62" height="62" />
      </AvatarContainer>
      <ListInfo>
        <li>
          <p>{user}</p>
        </li>
        <li>{tweets} tweets</li>
        <li>{isFollowing ? followers + 1 : followers} Followers</li>
      </ListInfo>
      <UserBtn onClick={handleFollow} isFollowing={isFollowing}>
        {isFollowing ? "Following" : "Follow"}
      </UserBtn>
    </UserItem>
  );
};

export default UserCard;
