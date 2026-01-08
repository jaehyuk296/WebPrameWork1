import React from "react";
import * as S from "./styles/CreatorCard.style";
import { useNavigate } from "react-router-dom";

const CreatorCard = ({ id, image, name, category, rank }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/creator/${id}`, {
      state: { id, image, name, category, rank }
    });
  };

  return (
    <S.Card onClick={handleClick}>
      <S.ImageWrapper>
        <S.Image src={image} alt={name} />
        <S.Rank>{rank}</S.Rank>
      </S.ImageWrapper>

      <S.InfoBox>
        <S.Name>{name}</S.Name>
        <S.Category>
          {Array.isArray(category) ? category.join(" / ") : category}
        </S.Category>
      </S.InfoBox>
    </S.Card>
  );
};

export default CreatorCard;
