import LogoHome from "../images/Follow.png";
import { HomeSection, LinkImg } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomeSection>
      <LinkImg to="/tweets">
        <img src={LogoHome} alt="follow me" width="550" />
      </LinkImg>
    </HomeSection>
  );
};

export default HomePage;
