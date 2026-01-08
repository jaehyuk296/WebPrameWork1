import React, { useState } from 'react';
import * as S from './styles/ReviewSection.style'; 

// --- 별점 선택 컴포넌트 ---
const StarRatingInput = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <S.StarRating onMouseLeave={() => setHoverRating(0)}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <S.Star
          key={starIndex}
          $active={starIndex <= (hoverRating || rating)}
          onClick={() => setRating(starIndex)}
          onMouseEnter={() => setHoverRating(starIndex)}
        >
          ★
        </S.Star>
      ))}
    </S.StarRating>
  );
};

// --- 리뷰 섹션 메인 컴포넌트 ---
const ReviewSection = ({ reviews, onSubmitReview }) => {
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  
  // 닉네임 상태 관리
  const [newReviewNickname, setNewReviewNickname] = useState('');

  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 리뷰 등록 핸들러
  const handleRegisterClick = () => {
    // 닉네임도 함께 보냄
    const isSuccess = onSubmitReview(newReviewText, newReviewRating, newReviewNickname);
    
    if (isSuccess) {
      setNewReviewText('');
      setNewReviewRating(5);
      setNewReviewNickname(''); // 닉네임 초기화
      setSelectedFilter('ALL');
      setCurrentPage(1);
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const getFilteredReviews = () => {
    if (selectedFilter === 'ALL') {
      return reviews;
    }
    return reviews.filter((review) => review.rating === selectedFilter);
  };

  const filteredList = getFilteredReviews();
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReviews = filteredList.slice(startIndex, endIndex);

  const countReviewsByRating = (rating) => {
    return reviews.filter((r) => r.rating === rating).length;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <S.ReviewSectionWrapper>
      <S.SectionTitle>상품 리뷰 ({reviews.length})</S.SectionTitle> 

      {/* 리뷰 작성 폼 */}
      <S.ReviewForm>
        <S.FormTitle>리뷰 작성하기</S.FormTitle>
        <S.FormRating>
          <S.RatingLabel>별점</S.RatingLabel>
          <StarRatingInput rating={newReviewRating} setRating={setNewReviewRating} />
          <S.RatingNumber>{newReviewRating}점</S.RatingNumber>
        </S.FormRating>
        
        {/* 닉네임 입력창 */}
        <S.NicknameInput 
          placeholder="닉네임을 입력해주세요"
          value={newReviewNickname}
          onChange={(e) => setNewReviewNickname(e.target.value)}
        />

        <S.ReviewTextarea
          placeholder="제품에 대한 솔직한 리뷰를 작성해주세요."
          value={newReviewText}
          onChange={(e) => setNewReviewText(e.target.value)}
        />
        <S.SubmitButton onClick={handleRegisterClick}>리뷰 등록</S.SubmitButton>
      </S.ReviewForm>

      {/* 필터 버튼 영역 */}
      <S.FilterContainer>
        <S.FilterButton 
          $active={selectedFilter === 'ALL'} 
          onClick={() => handleFilterChange('ALL')}
        >
          전체 ({reviews.length})
        </S.FilterButton>
        {[5, 4, 3, 2, 1].map((score) => (
          <S.FilterButton
            key={score}
            $active={selectedFilter === score}
            onClick={() => handleFilterChange(score)}
          >
            ★{score} ({countReviewsByRating(score)})
          </S.FilterButton>
        ))}
      </S.FilterContainer>

      {/* 리뷰 목록 */}
      <S.ReviewList>
        {currentReviews.length > 0 ? (
          currentReviews.map((review) => (
            <S.ReviewItem key={review.id}>
              <S.ReviewHeader>
                <S.ReviewUser>{review.nickname}</S.ReviewUser>
                <S.ReviewItemRating>{'★'.repeat(review.rating)}</S.ReviewItemRating>
              </S.ReviewHeader>
              <S.ReviewText>{review.comment}</S.ReviewText>
              <S.ReviewDate>{review.createdAt}</S.ReviewDate>
            </S.ReviewItem>
          ))
        ) : (
          <S.EmptyMessage>해당 별점의 리뷰가 없습니다.</S.EmptyMessage>
        )}
      </S.ReviewList>

      {/* 페이지네이션 */}
      {filteredList.length > itemsPerPage && (
        <S.PaginationContainer>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <S.PageButton
              key={number}
              $active={currentPage === number}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </S.PageButton>
          ))}
        </S.PaginationContainer>
      )}
    </S.ReviewSectionWrapper>
  );
};

export default ReviewSection;