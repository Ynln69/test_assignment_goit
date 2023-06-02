import Logo from "../../images/logo.png";
import Picture from "../../images/picture.png";
// import Avatar from "../../images/Hansel.png";
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
  return (
    <UserItem key={id}>
      <UserLogo src={Logo} alt="card logo" />
      <UserPicture src={Picture} alt="background card" />
      <LineBox></LineBox>
      <AvatarContainer>
        <img src={avatar} alt="user" width="62" height="62" />
      </AvatarContainer>
      <ListInfo className="list-info">
        <li>{user}</li>
        <li>{tweets} tweets</li>
        <li>{followers} Followers</li>
      </ListInfo>
      <UserBtn>Follow</UserBtn>
    </UserItem>
  );
};

export default UserCard;
