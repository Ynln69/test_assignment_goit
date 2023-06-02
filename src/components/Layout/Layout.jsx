import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link } from "./Layout.styled";
import Loader from "components/Loader";

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
