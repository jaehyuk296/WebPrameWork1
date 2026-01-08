import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles/CreatorDetailPage.style';

// 리뷰 데이터 가져오기
import { productsReviews } from '../../mocks/setListData';

const CreatorProductCard = ({ product }) => {
  const navigate = useNavigate();

  // 현재 상품(product.id)에 달린 리뷰만 필터링
  const matchingReviews = productsReviews.filter(review => review.productId === product.id);
  
  // 리뷰 개수
  const reviewCount = matchingReviews.length;

  // 평점 평균 계산 (리뷰가 없으면 0.0)
  const averageRating = reviewCount > 0
    ? (matchingReviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount).toFixed(1)
    : "0.0";

  return (
    <S.ProductCard>
      <S.ProductImageWrapper onClick={() => navigate(`/detail/${product.id}`)} style={{ cursor: 'pointer' }}>
        <S.ProductImage src={product.image} alt={product.name} />
      </S.ProductImageWrapper>

      <S.ProductInfo>
        <S.ProductName>{product.name}</S.ProductName>
        
        <S.ProductPrice>
            {product.discount > 0 && (
                <span style={{ color: '#ff4d4f', marginRight: '8px' }}>{product.discount}%</span>
            )}
            {product.price.toLocaleString()}원
        </S.ProductPrice>
        
        <S.RatingBox>
          <span className="star">★ {averageRating}</span>
          <span className="count">({reviewCount.toLocaleString()})</span>
        </S.RatingBox>

        <S.DetailButton onClick={() => navigate(`/detail/${product.id}`)}>
          제품 상세 페이지
        </S.DetailButton>
      </S.ProductInfo>
    </S.ProductCard>
  );
};

export default CreatorProductCard;