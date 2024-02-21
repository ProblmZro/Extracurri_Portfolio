import styled from "styled-components";

const InterestPage = () => {
  return (
    <PageWrapper id="interest">
      <Title>INTEREST</Title>
      <Content>The items below are my current interests.</Content>
      <ContentWrapper>
        <ContentBox>
          <ContentTitle>Skill</ContentTitle>
          <ContentBorder>
            <ContentLeftWrapper>
              <ContentLeft>Front-End</ContentLeft>
              <ContentLeft>A.I</ContentLeft>
              <ContentLeft>Design</ContentLeft>
            </ContentLeftWrapper>
            <ContentRightWrapper>
              <ContentRight>React, TypeScript</ContentRight>
              <ContentRight>Deep Learning, Pytorch</ContentRight>
              <ContentRight>Photoshop, Figma</ContentRight>
            </ContentRightWrapper>
          </ContentBorder>
        </ContentBox>
        <ContentBox>
          <ContentTitle>Hobby</ContentTitle>
          <ContentBorder>
            <ContentLeftWrapper>
              <ContentLeft>Sports</ContentLeft>
              <ContentLeft>Work out</ContentLeft>
              <ContentLeft>Fashion</ContentLeft>
            </ContentLeftWrapper>
            <ContentRightWrapper>
              <ContentRight>Soccer, Baseball, F1</ContentRight>
              <ContentRight>Weight training</ContentRight>
              <ContentRight>Clothes, Perfume</ContentRight>
            </ContentRightWrapper>
          </ContentBorder>
        </ContentBox>
        <ContentBox>
          <ContentTitle>Etc.</ContentTitle>
          <ContentBorder>
            <ContentLeftWrapper>
              <ContentLeft>Front-End</ContentLeft>
              <ContentLeft>A.I</ContentLeft>
              <ContentLeft>Design</ContentLeft>
            </ContentLeftWrapper>
            <ContentRightWrapper>
              <ContentRight>React, TypeScript</ContentRight>
              <ContentRight>Deep Learning, Pytorch</ContentRight>
              <ContentRight>Photoshop, Figma</ContentRight>
            </ContentRightWrapper>
          </ContentBorder>
        </ContentBox>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default InterestPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: calc(100vh - 83.5px);
  padding-top: 73px;

  @media (max-width: 768px) {
    padding-top: 0px;
    text-align: center;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

const Title = styled.div`
  margin-top: 80px;
  color: #dfdfdf;
  font-size: 43px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const Content = styled.div`
  margin-top: 52px;
  color: #adadad;
  font-size: 23px;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-top: 32px;
    font-size: 18px;
  }
`;

const ContentTitle = styled.div`
  color: #dfdfdf;
  font-size: 31px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const ContentBorder = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 3px solid #dfdfdf;
  font-size: 19px;
  font-weight: 400;
  width: 100%;
  padding-top: 22px;
`;

const ContentBox = styled.div`
  width: 100%;
`;

const ContentLeftWrapper = styled.div`
  color: #dfdfdf;
  text-align: left;
`;

const ContentRightWrapper = styled.div`
  color: #adadad;
  text-align: right;
`;

const ContentLeft = styled.div``;

const ContentRight = styled.div``;

const ContentWrapper = styled.div`
  margin-top: 80px;
  gap: 82px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 81px 0px 81px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
    gap: 52px;
  }
`;
