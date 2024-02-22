import styled, { keyframes } from "styled-components";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IntroPage = () => {
  return (
    <PageWrapper id="introduce">
      <IntroWrapper>
        <Intro1>Jay Moon</Intro1>
        <Intro2>
          a undergraduate student majoring in computer science
          <br /> and engineering at University of Seoul
        </Intro2>
      </IntroWrapper>
      <ProfileImg src="images/profile.svg" alt="profile" />
      <ScrollIconWrapper>
        <ScrollIcon icon={faComputerMouse} />
      </ScrollIconWrapper>
    </PageWrapper>
  );
};

export default IntroPage;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImg = styled.img`
  height: 100%;
  object-fit: contain;
  padding-right: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IntroWrapper = styled.div`
  padding-left: 121px;

  @media (max-width: 768px) {
    padding-top: 20px;
    padding-left: 0;
  }
`;

const Intro1 = styled.div`
  color: #dfdfdf;
  /* color: #183fbf; */
  font-size: 100px;
  font-weight: 600;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 70px;
  }
`;

const Intro2 = styled.div`
  color: #adadad;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ScrollIconWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(-6px);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const ScrollIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #dfdfdf;
  position: absolute;
  transform: translateX(-50%);
  animation: ${scrollAnimation} 1s infinite alternate;
`;
