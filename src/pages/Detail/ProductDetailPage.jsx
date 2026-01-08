import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 

import { products, productsReviews, creators } from '../../mocks/setListData'; 

import * as S from './styles/ProductDetailPage.style';
import ProductInfo from './ProductInfo';
import CreatorSection from './CreatorSection';
import ReviewSection from './ReviewSection';

const ProductDetailPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  
  const targetProduct = products.find((item) => item.id === Number(id));

  if (!targetProduct) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>존재하지 않는 상품입니다.</div>;
  }

  const [isLiked, setIsLiked] = useState(false);
  const [reviews, setReviews] = useState([]);
  
  const reviewStorageKey = `reviews-${targetProduct.id}`;
  const WISHLIST_KEY = 'my-wishlist';

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedReviewsJSON = localStorage.getItem(reviewStorageKey);
    const defaultProductReviews = productsReviews.filter(r => r.productId === targetProduct.id);

    if (storedReviewsJSON) {
      try {
        const parsedReviews = JSON.parse(storedReviewsJSON);
        const isDataValid = Array.isArray(parsedReviews) && 
                            parsedReviews.every(r => r.nickname && r.comment);

        if (isDataValid) {
          setReviews(parsedReviews);
        } else {
          setReviews(defaultProductReviews);
          localStorage.setItem(reviewStorageKey, JSON.stringify(defaultProductReviews));
        }
      } catch (e) {
        setReviews(defaultProductReviews);
      }
    } else {
      setReviews(defaultProductReviews);
    }

    const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    if (wishlist.includes(targetProduct.id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [id, reviewStorageKey, targetProduct.id]); 

  const handleLikeClick = () => {
    let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    if (isLiked) {
      wishlist = wishlist.filter((itemId) => itemId !== targetProduct.id);
      setIsLiked(false);
      alert('찜 목록에서 삭제되었습니다.');
    } else {
      wishlist.push(targetProduct.id);
      setIsLiked(true);
      alert('찜 목록에 추가되었습니다! ❤️');
    }
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  };

  const handleSubmitReview = (newReviewText, newReviewRating, newReviewNickname) => {
    if (newReviewText.trim() === '' || newReviewNickname.trim() === '') {
      alert('닉네임과 내용을 모두 입력해주세요.');
      return false; 
    }

    const nextUserNumber = reviews.length + 1;
    
    const newReview = {
      productId: targetProduct.id, 
      id: Date.now(),
      nickname: newReviewNickname, 
      createdAt: new Date().toLocaleDateString(), 
      comment: newReviewText, 
      rating: newReviewRating,
    };
    
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews); 
    localStorage.setItem(reviewStorageKey, JSON.stringify(updatedReviews)); 
    return true; 
  };

  const calculateAverageRating = () => {
    if (!reviews || reviews.length === 0) return 0;
    
    const totalScore = reviews.reduce((sum, review) => {
      const score = Number(review.rating);
      return sum + (isNaN(score) ? 0 : score);
    }, 0);
    
    const average = totalScore / reviews.length;
    return Number(average.toFixed(1)); 
  };

  const currentProductData = {
    ...targetProduct, 
    rating: calculateAverageRating(), 
    reviews: reviews.length,          
    imageUrl: targetProduct.image     
  };

  const recommender = creators.find(c => c.id === targetProduct.creatorId);
  const recommenderList = recommender ? [recommender] : [];

  const relatedCreators = creators.filter(c => {
    if (c.id === targetProduct.creatorId) return false;
    if (Array.isArray(c.category)) {
      return c.category.includes(targetProduct.category);
    }
    return c.category === targetProduct.category;
  });

  return (
    <S.PageContainer>
      <S.HeaderNav onClick={() => navigate('/search')}>
        ← 목록으로
      </S.HeaderNav>

      <S.MainContent>
        <ProductInfo
          productData={currentProductData} 
          isLiked={isLiked}
          onLikeClick={handleLikeClick}
        />
      </S.MainContent>

      <S.Divider />

      {recommenderList.length > 0 && (
        <CreatorSection 
          title="이 제품을 추천한 크리에이터" 
          creators={recommenderList} 
        />
      )}

      {relatedCreators.length > 0 && (
        <>
          <S.Divider />
          <CreatorSection 
            title={`'${targetProduct.category}' 관련 크리에이터`} 
            creators={relatedCreators} 
          />
        </>
      )}

      <S.Divider />

      <ReviewSection
        reviews={reviews} 
        onSubmitReview={handleSubmitReview} 
      />
    </S.PageContainer>
  );
};

export default ProductDetailPage;