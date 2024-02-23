import { useState } from "react";
import styled from "styled-components";

const ProjectsPage = () => {
  const [isHover, setIsHover] = useState([0, 0, 0]);

  return (
    <PageWrapper id="projects">
      <Title>PROJECTS</Title>
      <BoxWrapper>
        <Box
          onMouseOver={() => setIsHover([1, 0, 0])}
          onMouseOut={() => setIsHover([0, 0, 0])}
        >
          {!isHover[0] ? (
            <IntroWrapper>
              <IntroTitle>프로그래밍 게시판</IntroTitle>
              <IntroDate>2023.11 - 2023.12 (3인)</IntroDate>
              <IntroImg src="images/pro1.png" alt="project1" />
            </IntroWrapper>
          ) : (
            <ContentWrapper>
              <ContentMain>
                개발자 커뮤니티 웹 서비스입니다. <br />
                게시물 및 댓글 CRUD, 로그인, 북마크, 검색이 구현되어 있습니다.{" "}
                <br />
                <br />
                php를 이용한 전반적인 서비스 개발 및 직접 DB 테이블 정의서를
                제작하고 구축하는 과정에서 많이 배운 계기가 되었습니다.
              </ContentMain>
              <ContentSub>
                <InfoWrapper>
                  <InfoTitle>주요 기능</InfoTitle>
                  <InfoContent>
                    로그인, 게시물 및 댓글 CRUD, 북마크, 검색
                  </InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>구현 파트</InfoTitle>
                  <InfoContent>
                    북마크, 검색 및 댓글 기능 구현, DB 테이블 정의 및 구축
                  </InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>사용 기술</InfoTitle>
                  <InfoContent>PHP, JavaScript, MySQL</InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>URL</InfoTitle>
                  <InfoContent>
                    <a
                      href="https://youtu.be/_dvFNGlG4uc"
                      style={{ textDecoration: "underline" }}
                    >
                      youtu.be/_dvFNGlG4uc
                    </a>
                  </InfoContent>
                </InfoWrapper>
              </ContentSub>
            </ContentWrapper>
          )}
        </Box>
        <Box
          onMouseOver={() => setIsHover([0, 1, 0])}
          onMouseOut={() => setIsHover([0, 0, 0])}
        >
          {!isHover[1] ? (
            <IntroWrapper>
              <IntroTitle>UsPray (유스프레이)</IntroTitle>
              <IntroDate>2023.04 - 현재 (창업동아리)</IntroDate>
              <IntroImg src="images/pro2.png" alt="project2" />
            </IntroWrapper>
          ) : (
            <ContentWrapper>
              <ContentMain>
                크리스천을 대상으로 한 기도 기록 및 공유 어플입니다. 자신의
                기도를 기록 및 다른 이와 공유하여 같이 기도할 수 있습니다.
                <br />
                <br />
                처음 진행한 팀프로젝트이자 개발팀, 디자인팀, 기획팀 등의 여러
                사람과의 협업을 통해 많은 협업 관련 경험을 하고 배울 수
                있었습니다.
              </ContentMain>
              <ContentSub>
                <InfoWrapper>
                  <InfoTitle>주요 기능</InfoTitle>
                  <InfoContent>
                    기도 저장 및 공유, 알림, 간편 로그인
                  </InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>구현 파트</InfoTitle>
                  <InfoContent>프론트엔드 (히스토리, 보관함 등)</InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>사용 기술</InfoTitle>
                  <InfoContent>JavaScript, React 등</InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>URL</InfoTitle>
                  <InfoContent>
                    <a
                      href="https://www.instagram.com/_uspray/"
                      style={{ textDecoration: "underline" }}
                    >
                      instagram.com/_uspray
                    </a>
                  </InfoContent>
                </InfoWrapper>
              </ContentSub>
            </ContentWrapper>
          )}
        </Box>
        <Box
          onMouseOver={() => setIsHover([0, 0, 1])}
          onMouseOut={() => setIsHover([0, 0, 0])}
        >
          {!isHover[2] ? (
            <IntroWrapper>
              <IntroTitle>ProblmZro</IntroTitle>
              <IntroDate>2024.01 - 현재 (개인)</IntroDate>
              <IntroImg src="images/pro3.png" alt="project3" />
            </IntroWrapper>
          ) : (
            <ContentWrapper>
              <ContentMain>
                개인 포트폴리오 용도로 제작한 웹 사이트입니다. (해당 사이트)
                <br />
                <br /> React 기반 사이트로 단순 소개를 위한 것뿐만 아니라 여러
                디자인 및 기능에 대한 시도나 사이트 운영에 대한 여러 학습을 위해
                제작된 사이트입니다.
              </ContentMain>
              <ContentSub>
                <InfoWrapper>
                  <InfoTitle>주요 기능</InfoTitle>
                  <InfoContent>
                    포트폴리오, 반응형 및 애니메이션 CSS 등
                  </InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>구현 파트</InfoTitle>
                  <InfoContent>전체</InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>사용 기술</InfoTitle>
                  <InfoContent>JavaScript, React, AWS</InfoContent>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>URL</InfoTitle>
                  <InfoContent>
                    <a
                      href="https://problmzro.me/"
                      style={{ textDecoration: "underline" }}
                    >
                      problmzro.me
                    </a>
                  </InfoContent>
                </InfoWrapper>
              </ContentSub>
            </ContentWrapper>
          )}
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
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 80%;
  opacity: 0.8;
  background: #232323;
  border-radius: 2px;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #0047ff, #232323);
  }
`;

const IntroWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const IntroTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #dfdfdf;
`;

const IntroDate = styled.div`
  text-align: center;
  color: #adadad;
  margin-top: 10px;
`;

const IntroImg = styled.img`
  flex: 1;
  object-fit: contain;
  max-width: 100%; /* Ensure the image does not exceed the container width */
  max-height: 100%;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  height: 100%;
  margin: 20px;
  color: #dfdfdf;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentMain = styled.div``;

const ContentSub = styled.div`
  border-top: 2px solid #dfdfdf;
  padding-top: 5px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-top: 10px;
`;
const InfoTitle = styled.div`
  flex: 1;
`;

const InfoContent = styled.div`
  flex: 2;
`;
