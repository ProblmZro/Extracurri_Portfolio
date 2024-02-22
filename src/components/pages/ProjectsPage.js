import styled from "styled-components";

const ProjectsPage = () => {
  return (
    <PageWrapper id="projects">
      <Title>PROJECTS</Title>
      <BoxWrapper>
        <Box>
          <div>프로그래밍 게시판</div>
          <div>2023.11 - 2023.12</div>
          <div>이미지</div>
          <div>
            프로그래밍을 주제로 한 커뮤니티 웹 서비스입니다. 간략화한 로그인
            기능과 더불어 각 게시판 카테고리별 글과 해당 글에 대한 댓글을 작성,
            수정, 삭제, 조회 및 즐겨찾기가 가능합니다. <br /> 3명이서 제작한
            수업 팀 프로젝트 서비스로써, 처음으로 모르는 분들과 협업하여 진행한
            프로젝트이었기에 색다른 협업 경험을 할 수 있었습니다. 또한 직접 DB
            테이블 정의서를 제작하고 구축하는 과정에서 데이터베이스 분야에 대해
            많이 배운 계기가 되었습니다.
          </div>
          <div>주요 기능 : 회원가입, 로그인, 게시물 및 댓글 CRUD, 북마크</div>
          <div>
            구현 파트 : 북마크 및 댓글 기능 구현, DB 테이블 정의 및 구축
          </div>
          <div>사용 기술 : PHP, JavaScript, MySQL</div>
        </Box>
        <Box>
          <div>UsPray(유스프레이)</div>
          <div>2023.04 - 현재</div>
          <div>이미지</div>
          <div>
            크리스천을 대상으로 한 기도 기록 및 공유 어플리케이션입니다. 자신의
            기도를 기록할 뿐 아니라 다른 사람들과의 공유를 통해 같이 기도할 수
            있습니다. React를 이용한 웹앱 기반의 어플로 다양한 앱 기능을 React를
            통해 구현했습니다.
            <br /> 처음으로 진행한 팀프로젝트이자 백, 프론트엔드, 인프라 외에도
            디자인, 기획팀 등의 여러 분야의 사람들과의 협업을 통해 다른
            사람들과의 소통, 협업 시의 코딩 방식 등 많은 협업 관련 경험을 하고
            배울 수 있는 경험이었습니다.
          </div>
          <div>주요 기능 : 기도 저장 및 공유, 알림 기능, 간편 회원가입 </div>
          <div>구현 파트 : 프론트엔드 (히스토리, 보관함 등)</div>
          <div>사용 기술 : JavaScript, React</div>
        </Box>
        <Box>
          <div>ProblmZro</div>
          <div>2023.04 - 현재</div>
          <div>이미지</div>
          <div>
            포트폴리오 용도로 제작한 웹 사이트입니다. (해당 사이트)
            <br /> React를 기반으로 한 사이트로 단순 저에 대한 소개를 위한
            것뿐만 아니라 여러 디자인 및 기능에 대한 시도나 사이트 운영에 대한
            여러 학습을 위해 제작된 사이트입니다.
          </div>
          <div>주요 기능 : 포트폴리오, 반응형/애니메이션 등</div>
          <div>구현 파트 : 전체 부분 (1인 개발)</div>
          <div>사용 기술 : JavaScript, React</div>
        </Box>
      </BoxWrapper>
    </PageWrapper>
  );
};

export default ProjectsPage;

const PageWrapper = styled.div`
  /* height: calc(100vh - 83.5px); */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 73px 50px 0px 50px;
  gap: 43px;

  @media (max-width: 768px) {
    padding-top: 0px;
    text-align: center;
    /* height: calc(var(--vh, 1vh) * 100); */
    height: 100vh;
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
  gap: 20px;
  width: 100%;
  justify-content: space-evenly;
  height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 73vh;
    gap: 40px;
    align-items: center;
  }
`;

const Box = styled.div`
  width: 350px;
  height: 80%;
  opacity: 0.8;
  background: #232323;
  border-radius: 2px;
`;
