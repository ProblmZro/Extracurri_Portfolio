import styled from "styled-components";
import FloatingList from "../FloatingList";

const Project1 = () => {
  const sections = [
    { id: "proj3_1", title: "활동 소개" },
    { id: "proj3_2", title: "활동 방식" },
    { id: "proj3_3", title: "활동 내용" },
    { id: "proj3_4", title: "최종 퀴즈" },
    { id: "proj3_5", title: "느낀 점" },
    { id: "proj3_6", title: "활동 후의 나" },
  ];

  return (
    <PageWrapper>
      <PageHeader>
        <MainImg src="images/pro1/1.png" />
        <Title>mySUNI와 함께하는 SK Guided Project 과정</Title>
        <SubTitle>
          과정 1. SK텔레콤 기지국 장비 성능 통계의 EDA 및 불량 탐색
        </SubTitle>
      </PageHeader>
      <FloatingList sections={sections} />
      <ContentWrapper>
        <ContentTitle id="proj3_1">활동 소개</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro1/2.png" />
        </ContentImgWrapper>
        <p>
          제가 참여한 mySUNI와 함께하는 SK Guided Project 과정의 과정 1,
          SK텔레콤 기지국 장비 성능 통계의 EDA 및 불량 탐색 과정에서는 실제
          SKT에서 수집한 많은 기지국 장비의 다양한 성능 데이터를 활용하여
          Exploratory Data Analysis (EDA)를 수행하고 이를 통해 불량을 탐색하는
          과정이었다. 이 과정의 주요 목표는 다양한 데이터로부터 유용한 통찰력을
          얻어 불량을 탐색함으로써 기지국 장비 성능을 향상시키는데 도움을 주고,
          데이터 분석 기술을 향상시키는 것이었다.
        </p>
        <ContentTitle id="proj3_2">활동 방식</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro1/3.png" />
        </ContentImgWrapper>
        <p>
          이번 프로젝트는 동영상 강의를 통해 개념을 배우고 직접 코드로 실습하여
          결과를 확인한 후, 중간중간 퀴즈로 자신의 실력을 점검하는 순서로
          진행되었다.
        </p>
        <ContentTitle id="proj3_3">활동 내용</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro1/4.png" />
        </ContentImgWrapper>
        <p>
          전반적인 이 프로젝트의 진행 과정은 첫 번째로 mySUNI에서 제공한 SKT가
          수집한 기지국 장비의 성능 데이터를 전처리하는 과정을 진행했다. 실제
          데이터 분석 작업의 핵심인 이 과정에서 다른 형식으로 되어 있는 Raw
          데이터를 하나의 데이터로 효과적이고 일관성 있게 통합하고, 보간법을
          이용한 데이터의 결측치를 처리하여 데이터 품질을 높혔다. 그리고 이러한
          데이터를 정규화와 표준화를 통해 변수들의 값의 범위를 비슷하게 만들어
          주었다. 두 번째로 시계열 데이터 EDA를 통한 이상치 탐지 과정이다.
          정규성 확인, 상관계수나 산점도 등을 통한 변수 사이의 상관성 확인, STL
          기법, 자기상관, 그리고 행렬 프로파일 등 다양한 기법을 사용하여 시계열
          데이터의 이상치나 주기성을 파악했다. 더 나아가 ARIMA 시계열 예측과
          같은 기계학습 알고리즘을 통해 이상치 탐지를 하는 방법을 학습했다.
        </p>
        <ContentTitle id="proj3_4">최종 퀴즈</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro1/5.png" />
        </ContentImgWrapper>
        <p>
          이러한 프로젝트 진행 과정 사이에 중간 퀴즈로 실력을 점검하고 부족했던
          개념에 대해 파악할 수 있었고, 최종 프로젝트 퀴즈를 통해서 프로젝트
          일련의 과정을 이해할 수 있었습니다.
        </p>
        <ContentTitle id="proj3_5">느낀 점</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro1/6.png" />
        </ContentImgWrapper>
        <p>
          위의 일련의 학습 과정은 데이터 분석 및 컴퓨팅 기술에 관련된 핵심
          개념과 기술을 제공했다. 이 교육 과정에서 데이터 수집, 정제, 시각화,
          통계 분석, 머신 러닝 등의 기술을 활용하여 실무에서 발생하는 문제에
          대한 해결책을 개발하는 과정을 이해하고 이를 적용하는 경험을 하였다.
          또한, 프로그래밍 및 데이터 분석 도구를 활용하여 실무의 많은 양의
          데이터로 작업하는 경험을 쌓을 수 있었다.
        </p>
        <p>
          이번 프로젝트를 하면서 추상적으로만 이해하고 있던 데이터 분석은 실제
          비즈니스 의사 결정에 큰 도움이 된다는 점을 깨달았다. 데이터를 통해
          문제를 해결하고 개선점을 발견하는 과정이 매우 흥미로웠다. 데이터 분석
          과정에 대해 추상적으로 생각만 하고 배우고 싶다는 단순한 생각만
          있었는데 이번 프로젝트를 통해 전체적인 데이터 분석의 흐름을 이해할 수
          있어 좋았고, 한편으로는 입문자 과정이다보니 새로 알아 가는 게 아무래도
          많을 순 없었다는 아쉬움은 조금 존재했다.
        </p>
        <ContentTitle id="proj3_6">활동 후의 나</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro1/7.png" />
        </ContentImgWrapper>
        <p>
          그래서 이번 프로젝트의 아쉬웠던 점이나 배운 점을 통해서 조금 더
          구체적으로 데이터 과학 및 머신 러닝 분야에서 더 깊은 지식을 쌓고, 실제
          개인 프로젝트를 진행해서 데이터 수집부터의 모든 과정을 스스로
          적용하고자 했다. 지난 학기에 들은 인공지능 관련 수업 지식을 기반으로
          하여 데이터 수집이나 분석에 대한 공부를 추가적으로 진행했고, 관심 있는
          분야에 대한 논문 리뷰 위주로 블로그 글을 작성하고 있다. 더 나아가 관련
          대회나 다른 사람들과의 협업을 통해서 소통 능력을 기르고, 데이터
          사이언스의 최신 동향도 꾸준히 파악하고 적용해 나갈 것이다.
        </p>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Project1;

const PageWrapper = styled.div`
  width: 100%;
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImg = styled.img`
  filter: brightness(20%);
  position: relative;
  object-fit: cover; /* 이미지 비율 유지 */
  width: 100%; /* 박스 너비에 맞게 조정 */
  max-height: 700px; /* 최대 높이 설정 */
  /* opacity: 0.4; */
  z-index: 200;
`;

const Title = styled.div`
  position: absolute;
  top: 20%;
  color: #dfdfdf;
  font-size: 60px;
  font-weight: 600;
  z-index: 250;
  @media (max-width: 1200px) {
    font-size: 40px;
    top: 10%;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    top: 5%;
  }
`;

const SubTitle = styled.div`
  position: absolute;
  top: 40%;
  color: #dfdfdf;
  font-size: 36px;
  z-index: 250;
  @media (max-width: 1200px) {
    font-size: 25px;
    top: 30%;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    top: 12%;
  }
`;

const ContentWrapper = styled.div`
  margin: 0px 340px 0px 340px;

  & > p {
    font-size: 19px;
    color: #dfdfdf;
    line-height: 35px;
    margin-top: 20px;
    margin-bottom: 20px; /* 문단 간의 간격 조절 */
  }
  @media (max-width: 1200px) {
    margin: 0px 200px 200px 200px;
    & > p {
      font-size: 17px;
      line-height: 30px;
    }
  }

  @media (max-width: 768px) {
    margin: 30px;
    & > p {
      font-size: 15px;
      line-height: 23px;
    }
  }
`;

const ContentTitle = styled.div`
  margin-top: 40px;
  font-size: 36px;
  font-weight: 600;
  text-decoration-line: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 3px;
  color: #dfdfdf;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const ContentImgWrapper = styled.div`
  margin-top: 20px;
  justify-content: center;
  display: flex;
`;

const ContentImg = styled.img`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  max-height: 500px;
`;
