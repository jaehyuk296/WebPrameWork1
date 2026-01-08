import React from 'react';
import * as S from './styles/CreatorDetailPage.style';

const CreatorBanner = ({ creator }) => {
  return (
    <S.Banner>
      <S.ProfileImage src={creator.image} alt={creator.name} />
      <S.CreatorName>{creator.name}</S.CreatorName>
      
      <S.CreatorJob>
        {creator.description}
      </S.CreatorJob>

      {creator.platforms && (
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#888' }}>
          활동 플랫폼: {creator.platforms.join(', ')} (팔로워 {creator.followers})
        </div>
      )}
    </S.Banner>
  );
};

export default CreatorBanner;