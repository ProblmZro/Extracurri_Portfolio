import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 꽃가루 떨어지는 애니메이션
const fallAnimation = keyframes`
  0% { transform: translateY(1vh) rotate(0deg); opacity: 1; }
  100% { transform: translateY(98vh) rotate(360deg); opacity: 0; }
`;

// 꽃가루 컴포넌트 스타일
const Pollen = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  opacity: 0.6;
  border-radius: 50%;
  animation: ${fallAnimation} ${(props) => props.duration}s linear infinite;
  left: ${(props) => props.left}vw;
  animation-delay: ${(props) => -props.duration}s;
`;

// 꽃가루를 생성하는 함수
const createPollen = (num, setPollens) => {
  if (num > 0) {
    let duration = Math.random() * 5 + 5; // n ~ n+m초 (m, n) 사이의 애니메이션 지속 시간
    let left = Math.floor(Math.random() * 98) + 1; // 화면의 왼쪽에서부터 0 ~ 100vw 사이의 위치
    const newPollen = (
      <Pollen key={`pollen_${num}`} duration={duration} left={left} />
    );
    setPollens((prevPollens) => [...prevPollens, newPollen]);

    // 다음 꽃가루 생성을 위한 타이머 설정
    setTimeout(() => createPollen(num - 1, setPollens), 100);
  }
};

// 꽃가루가 날리는 화면 컴포넌트
const PollenScreen = () => {
  const [pollens, setPollens] = useState([]);

  useEffect(() => {
    createPollen(50, setPollens); // 천천히 50개의 꽃가루 생성
  }, []);

  return <>{pollens}</>; // 생성된 꽃가루 렌더링
};

export default PollenScreen;
