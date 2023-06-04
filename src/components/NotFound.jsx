import NotFoundImg from "../images/404 robot.png";
import BackLink from "./BackLink/BackLink";

const NotFound = () => {
  return (
    <section
      style={{
        padding: "80px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackLink />
      <h1
        style={{
          fontSize: "xxx-large",
          textAlign: "center",
        }}
      >
        {" "}
        Opss, this page <br /> not found
      </h1>
      <img src={NotFoundImg} alt="Not found page img 404" width="800px" />
    </section>
  );
};

export default NotFound;
