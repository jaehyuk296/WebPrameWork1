import React from 'react';

import { Link } from 'react-router-dom'; 
import * as S from './styles/CreatorSection.style';

const CreatorSection = ({ creators, title = "추천 크리에이터" }) => {
  if (!creators || creators.length === 0) return null;

  return (
    <S.CreatorSectionWrapper>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.CreatorList>
        {creators.map((creator) => (
          // 2. S.CreatorProfile을 Link로 사용
          <S.CreatorProfile 
            key={creator.id} 
            as={Link}
            to={`/creator/${creator.id}`} // 클릭 시 이동할 주소 (예: /creator/1)
            style={{ textDecoration: 'none' }}
          >
            <S.CreatorImage src={creator.image} alt={creator.name} />
            <S.CreatorName>{creator.name}</S.CreatorName>
          </S.CreatorProfile>
        ))}
      </S.CreatorList>
    </S.CreatorSectionWrapper>
  );
};

export default CreatorSection;