import styled from "styled-components";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/problm_zro", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/ProblmZro", "_blank");
  };

  return (
    <PageWrapper id="contact">
      <Title>CONTACT</Title>
      <Content>
        Please contact using the methods below that are convenient for you.
      </Content>
      <ContentWrapper>
        <ContentBox>
          <IconWrapper>
            <FontAwesomeIcon icon={faEnvelope} />
          </IconWrapper>
          <ContentItem>
            <a href="mailto:reozt599@gmail.com">reozt599@gmail.com</a>
          </ContentItem>
        </ContentBox>
        <ContentBox onClick={handleInstagramClick}>
          <IconWrapper>
            <FontAwesomeIcon icon={faInstagram} />
          </IconWrapper>
          <ContentItem>@problm_zro</ContentItem>
        </ContentBox>
        <ContentBox onClick={handleGithubClick}>
          <IconWrapper>
            <FontAwesomeIcon icon={faGithub} />
          </IconWrapper>
          <ContentItem>@ProblmZro</ContentItem>
        </ContentBox>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ContactPage;

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
    display: none;
  }
`;

const ContentItem = styled.span`
  transition: 0.1s ease;
`;

const ContentBox = styled.div`
  width: 100%;
  color: #adadad;
  font-size: 19px;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #dfdfdf;
    ${ContentItem} {
      border-bottom: 2px solid #0047ff;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 37px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 80px;
  gap: 82px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 81px 0px 81px;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
