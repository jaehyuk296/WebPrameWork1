// src/pages/Home/CreatorList.jsx
import React, { useState } from "react";
import CreatorCard from "./CreatorCard";
import * as S from "./styles/CreatorList.style";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CreatorList = ({ creators }) => {
  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => index > 0 && setIndex(index - 1);
  const handleNext = () => {
    if (index < creators.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>트렌딩 크리에이터</S.Title>

        <S.ButtonBox>
          <S.NavButton onClick={handlePrev} disabled={index === 0}>
            <ChevronLeft size={18} />
          </S.NavButton>

          <S.NavButton
            onClick={handleNext}
            disabled={index >= creators.length - visibleCount}
          >
            <ChevronRight size={18} />
          </S.NavButton>
        </S.ButtonBox>
      </S.Header>

      <S.SliderWrapper>
        <S.SliderTrack index={index}>
          {creators.map((item, idx) => (
            <CreatorCard
              key={item.id}
              id={item.id}              // 반드시 id 전달!
              rank={idx + 1}            // 순서 전달
              {...item}                 // name, category, image 등 전달
            />
          ))}
        </S.SliderTrack>
      </S.SliderWrapper>
    </S.Container>
  );
};

export default CreatorList;
