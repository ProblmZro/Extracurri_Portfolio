import styled from "styled-components";

const IntroPage = () => {
  return (
    <PageWrapper>
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
  /* height: 100vh; */
  height: calc(100vh - 83.5px);
`;

const ProfileImg = styled.img`
  height: 100%;
  object-fit: contain;
  padding-right: 0;
`;

const IntroWrapper = styled.div`
  padding-left: 121px;
`;

const Intro1 = styled.div`
  font-family: "Open Sans";
  color: #adadad;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: -16px;
`;

const Intro2 = styled.div`
  font-family: "Open Sans";
  color: #dfdfdf;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Intro3 = styled.div`
  font-family: "Open Sans";
  color: #adadad;
  font-size: 24px;
  font-weight: 400;
`;
