import { useState, useEffect } from "react";
import styled from "styled-components";

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
      </IntroWrapper>
      <ProfileImg src="images/profile.svg" alt="profile" />
    </PageWrapper>
  );
};

export default IntroPage;

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 83.5px);
`;

const ProfileImg = styled.img`
  height: 100%;
  object-fit: contain;
  padding-right: 0;
`;

const IntroWrapper = styled.div`
  padding-left: 121px;
`;

const Intro1 = styled.div`
  color: #adadad;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: -16px;
`;

const Intro2 = styled.div`
  color: #dfdfdf;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Intro3 = styled.div`
  color: #adadad;
  font-size: 24px;
  font-weight: 400;
`;
