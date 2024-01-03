import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const ProjectsPage = () => {
  return (
    <PageWrapper id="projects">
      <Title>PROJECTS</Title>
      <BoxWrapper>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </BoxWrapper>
      <ScrollDownButton to="contact" smooth={true} duration={500}>
        <ArrowIcon>&#8595;</ArrowIcon>
      </ScrollDownButton>
    </PageWrapper>
  );
};

export default ProjectsPage;

const ScrollDownButton = styled(ScrollLink)`
  position: absolute;
  bottom: calc(20px - 200vh);
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ArrowIcon = styled.span`
  font-size: 30px;
  color: #dfdfdf;
  opacity: 0.5;
`;

const PageWrapper = styled.div`
  height: calc(100vh - 83.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 73px 50px 0px 50px;
  gap: 43px;

  @media (max-width: 768px) {
    padding-top: 0px;
    text-align: center;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

const Title = styled.div`
  margin-top: 80px;
  margin-bottom: 9px;
  color: #dfdfdf;
  font-size: 43px;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 47px;
  width: 100%;
  justify-content: space-between;
  height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 73vh;
    gap: 40px;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background: #0e0e0e;
  border-radius: 10px;
`;
