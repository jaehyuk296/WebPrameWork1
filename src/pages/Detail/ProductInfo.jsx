import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import * as S from './styles/ProductInfo.style';

const ProductInfo = ({ productData, isLiked, onLikeClick }) => {
  
  // 1. 구조 분해 할당
  const { 
    category, 
    name, 
    rating = 0,  // 값이 없으면 0
    reviews = 0, // 값이 없으면 0
    price = 0,
    discount = 0, // 할인이 없으면 0
    imageUrl,
    link
  } = productData;

  // 2. 가격 계산 로직 (할인이 있을 때만 계산)
  const hasDiscount = discount > 0;
  const finalPrice = hasDiscount ? price * (1 - discount / 100) : price;
  
  const formattedPrice = Math.floor(finalPrice).toLocaleString(); 
  const formattedOriginalPrice = price.toLocaleString(); 

  const handleShareClick = async () => {
    const currentUrl = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: name, url: currentUrl });
      } else {
        await navigator.clipboard.writeText(currentUrl);
        alert('상품 링크가 복사되었습니다!');
      }
    } catch (error) {
      console.log('공유 취소');
    }
  };

  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    return Array.from({ length: 5 }, (_, index) => {
      const starIndex = index + 1;
      let fillPercentage = 0;
      if (score >= starIndex) fillPercentage = 100;
      else if (score > index) fillPercentage = (score - index) * 100;
      
      return (
        <S.DynamicStar key={index} $percent={fillPercentage}>★</S.DynamicStar>
      );
    });
  };

  return (
    <> 
      <S.ProductImageWrapper> 
        <S.ProductImage src={imageUrl || "https://via.placeholder.com/400"} alt={name} />
      </S.ProductImageWrapper>
      
      <S.InfoContainer>
        <S.InfoTop>
          <S.Category>{category}</S.Category>
          <S.Icons>
            <S.IconButton onClick={handleShareClick}>
              <Share2 size={24} color="#555" />
            </S.IconButton>
            
            <S.IconButton onClick={onLikeClick}>
              <Heart 
                size={24} 
                color={isLiked ? "#ff4d4f" : "#ccc"} 
                fill={isLiked ? "#ff4d4f" : "none"} 
              />
            </S.IconButton>
          </S.Icons>
        </S.InfoTop>
        
        <S.Title>{name}</S.Title>
        
        <S.Rating>
          <S.Stars>{renderStars(rating)}</S.Stars>
          {/* reviews가 숫자이므로 toLocaleString() 사용 가능 */}
          <S.RatingText>{rating} / 5.0 ({reviews.toLocaleString()}개)</S.RatingText>
        </S.Rating>

        <S.PriceInfo>
          <S.Price>
            {/* 할인이 있을 때만 할인율 표시 */}
            {hasDiscount && <span className="discount">{discount}%</span>}
            <span className="final-price">{formattedPrice}원</span>
          </S.Price>
          
          {/* 할인이 있을 때만 원래 가격(취소선) 표시 */}
          {hasDiscount && <S.OriginalPrice>{formattedOriginalPrice}원</S.OriginalPrice>}
        </S.PriceInfo>

        <S.BuyButton href={link} target="_blank" rel="noopener noreferrer">
          구매하기
        </S.BuyButton>
      </S.InfoContainer>
    </>
  );
};

export default ProductInfo;