import styled from "styled-components";

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <Title>PROJECTS</Title>
      <BoxWrapper>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </BoxWrapper>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
  gap: 43px;
  /* height: 100vh; */
`;

const Title = styled.div`
  margin-top: 80px;
  margin-bottom: 9px;
  color: #dfdfdf;
  font-size: 43px;
  font-weight: 600;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 47px;
  width: 100%;
  justify-content: space-between;
  height: 28vh;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background: #0e0e0e;
  border-radius: 10px;
`;
