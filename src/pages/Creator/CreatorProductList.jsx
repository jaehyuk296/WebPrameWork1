import React, { useMemo } from 'react';
import * as S from './styles/CreatorDetailPage.style';
import CreatorProductCard from './CreatorProductCard';

const CreatorProductList = ({ products }) => {
  
  // 제품들을 카테고리별로 묶는 로직
  const groupedProducts = useMemo(() => {
    const groups = {};
    
    products.forEach((product) => {
      const category = product.category || '기타'; // 카테고리가 없으면 '기타'로 분류
      
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(product);
    });
    
    return groups;
  }, [products]);

  // 카테고리 키값들 
  const categories = Object.keys(groupedProducts);

  return (
    <S.ContentWrapper>
      <S.SectionTitle>사용 및 추천 제품 ({products.length})</S.SectionTitle>

      {/* 카테고리별로 반복 렌더링 */}
      {categories.map((category) => (
        <S.CategorySection key={category}>
          {/* 카테고리 제목 */}
          <S.CategoryTitle>
            {category} ({groupedProducts[category].length})
          </S.CategoryTitle>

          {/* 해당 카테고리의 상품 그리드 */}
          <S.ProductGrid>
            {groupedProducts[category].map((product) => (
              <CreatorProductCard key={product.id} product={product} />
            ))}
          </S.ProductGrid>
        </S.CategorySection>
      ))}

      {/* 제품이 하나도 없을 경우 */}
      {products.length === 0 && (
        <div style={{ padding: '50px', textAlign: 'center', color: '#999' }}>
          추천 제품이 없습니다.
        </div>
      )}
    </S.ContentWrapper>
  );
};

export default CreatorProductList;