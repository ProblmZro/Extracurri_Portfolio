import styled, { keyframes } from "styled-components";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <PageWrapper id="introduce" key={1}>
      <IntroWrapper>
        <Intro3>2020920020 컴퓨터과학부 문재영</Intro3>
        <Intro1>나를 찾아가는 여정</Intro1>
        <Intro2>2023학년도 비교과교육 프로그램 참여후기</Intro2>
      </IntroWrapper>
      <ScrollIconWrapper>
        <Link to="projects">
          <ScrollIcon icon={faPlane} />
          <PlaneText>Click!</PlaneText>
        </Link>
      </ScrollIconWrapper>
    </PageWrapper>
  );
};

export default IntroPage;

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;

const IntroWrapper = styled.div``;

const Intro1 = styled.div`
  color: #dfdfdf;
  /* color: #183fbf; */
  font-size: 100px;
  font-weight: 600;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 46px;
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

const Intro3 = styled.div`
  color: #adadad;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
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
  transform: translateX(-50%);
  animation: ${scrollAnimation} 1.2s infinite alternate;
`;

const PlaneText = styled.div`
  color: #dfdfdf;
  margin-top: 10px;
  transform: translateX(-50%);
  animation: ${scrollAnimation} 1.2s infinite alternate;
`;
