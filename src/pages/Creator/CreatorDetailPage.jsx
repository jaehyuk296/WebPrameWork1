import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './styles/CreatorDetailPage.style';

// 데이터 임포트
import { creators, products, creatorRecommendedProducts } from '../../mocks/setListData';

// SearchBar는 제거된 상태 유지
import CreatorBanner from './CreatorBanner';
import CreatorProductList from './CreatorProductList';

const CreatorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [creator, setCreator] = useState(null);
  const [creatorProducts, setCreatorProducts] = useState([]);

  useEffect(() => {
    const currentId = Number(id);
    
    // 1. 크리에이터 정보 찾기
    const foundCreator = creators.find(c => c.id === currentId);
    setCreator(foundCreator);

    // 2. 추천 상품 찾기
    const productIds = creatorRecommendedProducts[currentId] || [];
    const relatedProducts = products.filter(p => productIds.includes(p.id));
    setCreatorProducts(relatedProducts);

  }, [id]);

  if (!creator) return <div>Loading...</div>;

  return (
    <S.Container>
      {/* (http://localhost:5174/search 로 이동) */}
      <S.HeaderNav onClick={() => navigate('/search')}>
        ← 목록으로
      </S.HeaderNav>

      <CreatorBanner creator={creator} />

      <CreatorProductList products={creatorProducts} />
      
    </S.Container>
  );
};

export default CreatorDetailPage;