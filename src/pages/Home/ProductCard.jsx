import React from "react";
import * as S from "./styles/ProductCard.style";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price, discount, image, ...rest }) => {
  const navigate = useNavigate();

  // 🔥 할인적용된 가격
  const finalPrice = Math.round(price * (1 - discount / 100));

  // 🔥 클릭 시 상품 상세 페이지로 이동
  const handleClick = () => {
    navigate(`/detail/${id}`, {
      state: {
        id,
        name,
        price,
        discount,
        image,
        ...rest, // category, link 등 추가 데이터 그대로 전달
      },
    });
  };

  return (
    <S.Card onClick={handleClick}>
      <S.ImageWrapper>
        <S.Image src={image} alt={name} />
      </S.ImageWrapper>

      <S.InfoBox>
        <S.Name>{name}</S.Name>

        <S.PriceRow>
          <S.Discount>{discount}%</S.Discount>
          <S.Price>₩{finalPrice.toLocaleString()}</S.Price>
        </S.PriceRow>
      </S.InfoBox>
    </S.Card>
  );
};

export default ProductCard;
