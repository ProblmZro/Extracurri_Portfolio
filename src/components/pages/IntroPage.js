import styled from "styled-components";

const IntroPage = () => {
  return (
    <PageWrapper id="introduce">
      <IntroWrapper>
        <Intro1>Hello, I am</Intro1>
        <Intro2>Jay Moon</Intro2>
        <Intro3>a student majoring in computer science in Korea</Intro3>
      </IntroWrapper>
      <ProfileImg src="images/profile.svg" alt="profile" />
    </PageWrapper>
  );
};

export default IntroPage;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;

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
  color: #adadad;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: -16px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Intro2 = styled.div`
  color: #dfdfdf;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 70px;
  }
`;

const Intro3 = styled.div`
  color: #adadad;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
