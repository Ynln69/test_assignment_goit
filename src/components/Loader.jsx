import { MutatingDots } from "react-loader-spinner";

const loaderBox = {
  padding: 100,
  display: "flex",
  justifyContent: "center",
};

const Loader = () => {
  return (
    <div style={loaderBox}>
      <MutatingDots
        height="100"
        width="100"
        color="#ffd700"
        secondaryColor="#ffd700"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
