import PropTypes from "prop-types";
import { ListOfUser } from "./UserList.styled.js";

const UserList = ({ children }) => {
  return <ListOfUser>{children}</ListOfUser>;
};

UserList.propTypes = {
  children: PropTypes.any,
};

export default UserList;
