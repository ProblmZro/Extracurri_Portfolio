// import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import ContactPage from "./pages/ContactPage";
import InterestPage from "./pages/InterestPage";
import IntroPage from "./pages/IntroPage";
import ProjectsPage from "./pages/ProjectsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const pages = [
  <IntroPage />,
  <InterestPage />,
  <ProjectsPage />,
  <ContactPage />,
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    setCurrentPage((current) =>
      current === pages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <PageContainer>
      {pages[currentPage]}
      <NextBtn onClick={goToNextPage}>
        <FontAwesomeIcon icon={faArrowDown} />
      </NextBtn>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NextBtn = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`;
