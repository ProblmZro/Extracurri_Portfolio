import styled from "styled-components";

const ProjectsPage = () => {
  return (
    <PageWrapper id="projects">
      <Title>PROJECTS</Title>
      <BoxWrapper>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </BoxWrapper>
    </PageWrapper>
  );
};

export default ProjectsPage;

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
  width: 300px;
  height: 70%;
  opacity: 0.8;
  background: #0e0e0e;
  border-radius: 10px;
`;
