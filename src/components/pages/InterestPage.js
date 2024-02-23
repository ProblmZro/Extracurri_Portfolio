import styled from "styled-components";
import {
  faLaptopCode,
  faNetworkWired,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

const InterestPage = () => {
  return (
    <PageWrapper id="interest">
      <Title>STACKS</Title>
      <Content>The stacks below are my current interests.</Content>
      <ContentWrapper>
        <ContentBox>
          <StackIcon icon={faReact} />
          <ContentTitle>Front-End</ContentTitle>
          <ContentBorder>
            <ContentLeftWrapper>
              TypeScript&nbsp;&nbsp;&nbsp;React
              <br />
              NextJS&nbsp;&nbsp;&nbsp;GraphQL
            </ContentLeftWrapper>
          </ContentBorder>
        </ContentBox>
        <ContentBox>
          <StackIcon icon={faPython} />
          <ContentTitle>Artifical Intelligence</ContentTitle>
          <ContentBorder>
            <ContentLeftWrapper>
              Python&nbsp;&nbsp;&nbsp;Pytorch <br /> DeepLearing
            </ContentLeftWrapper>
          </ContentBorder>
        </ContentBox>
        <ContentBox>
          <StackIcon icon={faFigma} />
          <ContentTitle>Design</ContentTitle>
          <ContentBorder>
            <ContentLeftWrapper>
              Photoshop&nbsp;&nbsp;&nbsp;Figma
            </ContentLeftWrapper>
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
  /* height: calc(100vh - 83.5px); */
  height: 100vh;
  padding-top: 73px;

  @media (max-width: 768px) {
    padding-top: 0px;
    text-align: center;
    /* height: calc(var(--vh, 1vh) * 100); */
    height: 100vh;
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

const StackIcon = styled(FontAwesomeIcon)`
  color: #0047ff;
  font-size: 68px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentTitle = styled.div`
  color: #dfdfdf;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: left;
  }
`;

const ContentBorder = styled.div`
  display: flex;
  justify-content: left;
  border-top: 3px solid #dfdfdf;
  font-size: 19px;
  font-weight: 400;
  width: 100%;
  padding-top: 22px;

  @media (max-width: 768px) {
    justify-content: right;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  background-color: #232323;
  padding: 20px;
  border-radius: 2px;
  transition: all 3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: linear-gradient(135deg, #0047ff, #232323);
  }

  &:hover ${StackIcon} {
    color: #adadad;
  }
`;

const ContentLeftWrapper = styled.div`
  color: #adadad;
  font-size: 21px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 19px;
    text-align: right;
  }
`;

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
