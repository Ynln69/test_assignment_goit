import { Link } from "react-router-dom";
import LogoHome from "../images/Follow.png";
import { HomeSection } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomeSection>
      <Link to="/tweets">
        <img src={LogoHome} alt="follow me" width="550" />
      </Link>
    </HomeSection>
  );
};

export default HomePage;
