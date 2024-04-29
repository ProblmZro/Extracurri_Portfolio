import styled from "styled-components";
import FloatingList from "../FloatingList";

const Project3 = () => {
  const sections = [
    { id: "proj3_1", title: "UsPray 서비스 소개" },
    { id: "proj3_2", title: "개발 내용 - 히스토리" },
    { id: "proj3_3", title: "개발 내용 - 보관함" },
    { id: "proj3_4", title: "활동 느낀점" },
  ];

  return (
    <PageWrapper>
      <PageHeader>
        <MainImg src="images/pro3/1.png" />
        <Title>SI Crew 창업동아리</Title>
        <SubTitle>크리스천 기도 서비스 'UsPray' 개발</SubTitle>
      </PageHeader>
      <FloatingList sections={sections} />
      <ContentWrapper>
        <ContentTitle id="proj3_1">UsPray 서비스 소개</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro3/1.png" />
        </ContentImgWrapper>
        <p>
          Uspray(유스프레이)는 크리스천들이 기도 제목을 간편하게 관리하고 공유할
          수 있는 서비스입니다. 기도를 기록하고, 다른 사람들과 공유할 수 있으며,
          기도를 저장하는 등의 기도 기록과 관련된 전반적인 기능을
          구현하였습니다.
        </p>
        <p>
          또한 저희 Uspray 팀은 대표자와 9명의 개발팀, 그리고 5명의
          비전전략팀으로 구성되어 총 15명이 함께하고 있습니다. 팀원들은 학교
          수업, 대외 활동, 인턴, 개인 프로젝트 등을 통해 다양한 개발 실력과
          서비스 운영 지식을 습득해 왔으며, 각자의 역량을 활용하여 애플리케이션
          제작과 서비스 운영에 기여하고 있습니다.
        </p>
        <p>
          23년 3월 팀이 구성된 이후 현재까지 약 1년 이상 앱스토어와 구글
          플레이리스트를 통해 서비스 배포 중이며 새로운 버전에 대한 제작이
          꾸준히 이어지고 있습니다. SNS를 활용한 마케팅을 포함하여, 개인
          사용뿐만 아니라 공동체에서도 다 같이 사용할 수 있는 기능을 두고
          있습니다. 궁극적으로 모든 크리스천이 현대사회의 바쁜 일상에서도
          신앙생활을 유지할 수 있도록 돕는 서비스를 개발하고자 합니다.
        </p>
        <ContentTitle id="proj3_2">개발 내용 - 히스토리</ContentTitle>
        <p>
          저는 SI Crew의 유스프레이 팀 소속으로 약 1년 간 Front-end 팀에서 여러
          기능 및 디자인 구현 등의 직무를 맡았습니다. 그 중에서도 특히 과거 기도
          내역을 볼 수 있는 히스토리 파트와 공유받은 기도가 저장되는 보관함
          파트를 가장 중점적으로 맡았습니다.
        </p>
        <ContentImgWrapper>
          <ContentImg src="images/pro3/2.png" />
        </ContentImgWrapper>
        <p>
          히스토리의 중점적인 기능은 총 세 가지로 첫 번째는 사용자가 히스토리에
          있는 기도 내용을 수정하고 날짜 및 카테고리를 지정하여 기도를 추가할 수
          있는 ‘기도 추가’, 두 번째는 사용자가 기도 히스토리에서 특정 기도를
          삭제할 수 있는 ‘기도 삭제’, 마지막으로 ‘날짜 조회, 카테고리별 조회 등
          다양한 조건으로 기도를 검색할 수 있는 ‘검색 기능’ 등이 존재합니다.
        </p>
        <p>
          React라는 프론트엔드 프레임워크를 이용하여 사용자 인터페이스를
          구현하였으며, 리덕스(Redux)를 활용하여 전역 상태 관리를 구현하여
          데이터 흐름을 효과적으로 관리했습니다. 날짜 선택을 위해 활용한
          react-datepicker 등 여러 라이브러리를 사용하여 사용자 친화적인 경험을
          제공하고자 노력했습니다. 그 결과 기도 내역을 효과적으로 추가, 삭제할
          수 있으며, 검색 기능을 통해 빠르게 원하는 기도 정보를 찾을 수 있도록
          기능을 구현하였습니다.
        </p>
        <p>
          하지만 구현 과정에서 기능 구현에 급급하여 일부 세세한 디자인이나 약간
          기능적 오류가 발생하였고, 많은 기도 데이터가 쌓였을 때 데이터 로드나
          기도 검색 시에 대용량 데이터에서의 성능 이슈가 발생할 수 있으므로 향후
          최적화가 필요합니다. 따라서 데이터 로딩 및 처리 속도를 개선하기 위해
          비동기 처리 및 페이징 등의 기술을 도입할 예정입니다.
        </p>
        <ContentTitle id="proj3_3">개발 내용 - 보관함</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro3/3.png" />
        </ContentImgWrapper>
        <p>
          다음으로 보관함 파트에서의 중점적인 기능은 다른 사용자에게서 공유받은
          기도를 보관할 수 있는 공유받은 ‘기도 보관’, 공유받은 기도 중 원하는
          기도를 보관함에 저장할 수 있는 ‘기도 저장’, 마지막으로 불필요한 기도를
          보관함에서 삭제할 수 있는 ‘기도 삭제’ 기능 등이 존재합니다.
        </p>
        <p>
          보관함도 리액트를 사용하여 각 기능을 모듈화하여 재사용성을 높였으며,
          Context API를 이용해서 컴포넌트 간의 데이터 공유 및 전달을
          관리했습니다. 그리고 여러 화면이나 컴포넌트 간의 전환 시에 부드러운
          애니메이션을 적용하여 사용자 경험을 향상시키고자 노력했습니다. 이러한
          점을 통해 사용자가 손쉽게 공유받은 기도를 보관하고 필요한 경우 저장 및
          삭제할 수 있도록 기능이 구현되었습니다.
        </p>
        <p>
          하지만 다수의 사용자 간 공유된 기도의 관리와 보관함의 용량 제한에 대한
          고려가 필요하며, 여러 실행 환경에 따라 변수가 발생하고 특히 ios
          기기에서 실행 시의 약간의 버벅임이 존재했습니다. 따라서 고용량 데이터
          처리를 위해 서버 측에서의 데이터 필터링 및 페이징 기능을 개선할
          계획입니다.
        </p>
        <ContentTitle id="proj3_4">활동 느낀점</ContentTitle>
        <ContentImgWrapper>
          <ContentImg src="images/pro3/4.png" />
        </ContentImgWrapper>
        <p>
          SI Crew의 유스프레이 창업 동아리의 팀원으로서 창업 아이템을 실제로
          개발하는 과정에서 협력과 협동의 중요성을 몸소 깨닫게 되었습니다.
          프론트엔드 개발을 맡아 보관함과 히스토리 기능의 구현에 주력하며
          팀원들과의 원활한 소통을 통해 창의적이고 효과적인 결과물을 만들어내는
          과정에서 다양한 도전에 직면하고 극복해왔습니다. 특히, 디자인팀,
          기획팀과의 협력을 통해 효율적인 작업 방식과 목표 달성에 대한 중요성을
          체감하였습니다.
        </p>{" "}
        <p>
          이 과정에서 서로 다른 이해관계로 여러 어려움도 있었지만 해결해나가는
          과정에서 갈등을 풀어나가는 방식을 체득할 수 있었습니다. 실제 22년 말에
          창업을 시도했었고, 하지만 미래에 대한 두려움과 제 창업, 개발에 대한
          역량이 부족하다는 것을 많이 느꼈습니다. 이때 창업에 대한 지식과 개발
          역량을 강화할 필요성을 느끼게 되었고, 현재는 창업 동아리 SI CREW
          활동을 통해 지난 실패에서 배운 교훈을 적극적으로 활용하고 있습니다.
          창업에 대한 열정과 지식이 점차 증가하고 있으며, 이를 통해 성공적인
          창업을 위한 기반이 열심히 쌓는 계기가 되었습니다.
        </p>
        <p>
          창업적인 측면 이외에도 여러 기능을 구현하는 과정에서 프로그램의 작동
          흐름에 대한 이해, 웹 프로그래밍 기법의 활용 등을 통해 프론트엔드에
          대한 이해도가 높아졌습니다. 그 과정에서 프론트엔드뿐만 아니라 여러
          컴퓨터과학 분야에 대해 더 탐구하고 찾아보는 계기가 되었고, 이 활동을
          토대로 현재는 인공지능에 관심을 가져 열심히 학습하는 중입니다. 또한
          개인 프로젝트를 제외하곤 팀 프로젝트를 해보지 않았는데 팀 내부 기획팀,
          디자이너, 개발자 등 많은 팀원들과의 잦은 소통과 협업을 하면서 협업
          방식과 갈등 해결 방식에 대해서 터득하게 되었고 이를 기반으로 효과적인
          개발이 가능했습니다.
        </p>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Project3;

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
  /* margin-top: 200px; */
  color: #dfdfdf;
  font-size: 60px;
  font-weight: 600;
  z-index: 250;

  @media (max-width: 768px) {
    font-size: 20px;
    top: 5%;
    /* margin-top: 50px; */
  }
`;

const SubTitle = styled.div`
  position: absolute;
  top: 40%;
  color: #dfdfdf;
  font-size: 36px;
  z-index: 250;
  /* font-weight: 600; */
  @media (max-width: 768px) {
    font-size: 15px;
    top: 12%;
  }
`;

const ContentWrapper = styled.div`
  margin: 0px 340px 0px 340px;

  & > p {
    font-size: 20px;
    color: #dfdfdf;
    line-height: 38px;
    margin-top: 20px;
    margin-bottom: 20px; /* 문단 간의 간격 조절 */
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
