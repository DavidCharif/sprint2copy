import { LoadingStyled } from "../../styles/LoadingStyled";

const logoWhite =
  "https://res.cloudinary.com/davidcharif/image/upload/v1645632540/sprint2/design/images/logoWhite_avwyhc.png";
const Loading = () => {
  return (
    <LoadingStyled>
      <img src={logoWhite} alt="logo" />
    </LoadingStyled>
  );
};

export default Loading;
