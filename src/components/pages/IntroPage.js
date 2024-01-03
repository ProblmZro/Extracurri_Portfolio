import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const IntroPage = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "ay Moon";
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + targetText[count]
          : targetText[0];
        setCount(count + 1);

        if (count >= targetText.length) {
          setTypedText(targetText);
          return;
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count, targetText]);

  return (
    <PageWrapper id="introduce">
      <IntroWrapper>
        <Intro1>Hello, I am</Intro1>
        <Intro2>J{typedText}</Intro2>
        <Intro3>a student majoring in computer science in Korea</Intro3>
        <ScrollDownButton to="interest" smooth={true} duration={500}>
          <ArrowIcon>&#8595;</ArrowIcon>
        </ScrollDownButton>
      </IntroWrapper>
      <ProfileImg src="images/profile.svg" alt="profile" />
    </PageWrapper>
  );
};

export default IntroPage;

const ScrollDownButton = styled(ScrollLink)`
  position: absolute;
  bottom: 20px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 83.5px);

  @media (max-width: 768px) {
    flex-direction: column;
    /* height: auto; */
    text-align: center;
    height: calc(100vh - 84px);
  }
`;

const ProfileImg = styled.img`
  height: 100%;
  object-fit: contain;
  padding-right: 0;

  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`;

const IntroWrapper = styled.div`
  padding-left: 121px;

  @media (max-width: 768px) {
    padding-top: 20px;
    padding-left: 0;
  }
`;

const Intro1 = styled.div`
  color: #adadad;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: -16px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Intro2 = styled.div`
  color: #dfdfdf;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 70px;
  }
`;

const Intro3 = styled.div`
  color: #adadad;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
