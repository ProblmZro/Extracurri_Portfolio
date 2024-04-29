import { Link } from "react-router-dom";
import styled from "styled-components";
import { projects } from "../projectInfo";

const ProjectsPage = () => {
  return (
    <PageWrapper id="projects">
      <Title>여정 리스트</Title>
      <BoxWrapper>
        {projects.lists.map((list, i) => {
          return (
            <Link to={`/${list.id}`}>
              <Box>
                <IntroTitle>{list.title}</IntroTitle>
                <IntroDate>{list.date}</IntroDate>
                <IntroImg src={list.img} />
                <IntroContent>{list.content}</IntroContent>
              </Box>
            </Link>
          );
        })}
      </BoxWrapper>
    </PageWrapper>
  );
};

export default ProjectsPage;

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 52px;
  color: #dfdfdf;
  font-size: 43px;
  font-weight: 600;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

const IntroDate = styled.div`
  color: #adadad;
  margin-top: 10px;
`;

const IntroContent = styled.div`
  margin-top: 10px;
  color: #dfdfdf;
  font-size: 20px;
  word-break: keep-all;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const Box = styled.div`
  max-width: 400px;
  margin: 20px; /* 박스 간의 간격 조정 */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, background 0.3s; /* 부드러운 전환 효과 */
  opacity: 0.9; /* 기본 투명도 조정 */
  background: #232323;
  border-radius: 8px; /* 테두리 둥글기 조정 */
  padding: 30px; /* 내부 여백 조정 */
  text-align: center;
  &:hover {
    transform: translateY(-5px); /* 호버 시 박스를 약간 위로 이동 */
    background: linear-gradient(
      135deg,
      #232323,
      gray
    ); /* 호버 시 배경색 변경 */
  }
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  //flex-wrap: wrap; /* 박스를 줄 바꿈하여 정렬 */
  justify-content: center; /* 중앙 정렬 */
  gap: 20px; /* 박스 사이의 간격 */
  @media (max-width: 768px) {
    gap: 30px; /* 모바일 화면에서의 간격 조정 */
    flex-wrap: wrap;
  }
`;

// 모바일 화면에서의 텍스트 크기 조정
const IntroTitle = styled.div`
  font-size: 24px; /* 기본 텍스트 크기 조정 */
  font-weight: 600;
  color: #dfdfdf;
  @media (max-width: 768px) {
    font-size: 20px; /* 모바일 화면에서의 텍스트 크기 조정 */
  }
`;

// 모바일 화면에서의 이미지 크기 조정
const IntroImg = styled.img`
  object-fit: cover; /* 이미지 비율 유지 */
  width: 100%; /* 박스 너비에 맞게 조정 */
  height: 200px; /* 최대 높이 설정 */
  border-radius: 5px; /* 이미지의 테두리 둥글기 */
  margin-top: 20px;
`;
