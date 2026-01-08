
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import * as S from "./styles/ProductList.style";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductList = ({ products }) => {
  const [index, setIndex] = useState(0);

  const visibleCount = 4; // 한 화면에 보여줄 카드 개수

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < products.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>크리에이터 공동구매 제품</S.Title>

        <S.ButtonBox>
          <S.NavButton onClick={handlePrev} disabled={index === 0}>
            <ChevronLeft size={15} />
          </S.NavButton>

          <S.NavButton
            onClick={handleNext}
            disabled={index >= products.length - visibleCount}
          >
            <ChevronRight size={15} />
          </S.NavButton>
        </S.ButtonBox>
      </S.Header>

      <S.SliderWrapper>
        <S.SliderTrack index={index}>
          {products.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </S.SliderTrack>
      </S.SliderWrapper>
    </S.Container>
  );
};

export default ProductList;
