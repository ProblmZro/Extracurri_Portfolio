import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FloatingList = (props) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <FloatBtnWrapper>
        {props.sections.map((section) => (
          <FloatBtn
            key={section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
          </FloatBtn>
        ))}
      </FloatBtnWrapper>
      <UpIcon icon={faArrowUp} onClick={() => scrollToTop()} />
    </>
  );
};

export default FloatingList;

const FloatBtnWrapper = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 1px solid #dfdfdf;
  /* text-align: right; */
  padding-left: 10px;
  position: fixed;
  right: 8%;
  top: 20%;
  @media (max-width: 1200px) {
    gap: 8px;
    right: 5%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatBtn = styled.div`
  cursor: pointer;
  color: #dfdfdf;
  font-size: 16px;
  opacity: 0.8;
  &:hover {
    color: white;
    font-weight: 500;
    opacity: 1;
  }
`;

const UpIcon = styled(FontAwesomeIcon)`
  color: #dfdfdf;
  z-index: 100;
  cursor: pointer;
  font-size: 18px;
  position: fixed;
  right: 10%;
  bottom: 10%;
  opacity: 0.8;
  border-radius: 50%;
  padding: 20px;
  &:hover {
    color: white;
    font-weight: 500;
    opacity: 1;
  }
  @media (max-width: 1200px) {
    right: 5%;
  }

  @media (max-width: 768px) {
    right: 5%;
    bottom: 5%;
  }
`;
