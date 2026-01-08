import styled from 'styled-components';

export const ReviewSectionWrapper = styled.section`
  margin: 24px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const ReviewForm = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
  background-color: #fff;
`;

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const FormRating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const RatingLabel = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const StarRating = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled.span`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s, transform 0.1s;
  color: ${(props) => (props.$active ? '#ffb400' : '#ddd')} !important;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RatingNumber = styled.span`
  font-size: 14px;
  color: #333;
  margin-left: 4px;
  font-weight: bold;
`;

// 닉네임 입력창 스타일
export const NicknameInput = styled.input`
  width: 200px; /* 적당한 너비 */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 12px; /* 텍스트 영역과의 간격 */
  display: block; /* 줄바꿈 */

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

export const ReviewTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  font-size: 14px;
  margin-bottom: 16px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #333;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #555;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.$active ? '#333' : '#e0e0e0')};
  background-color: ${(props) => (props.$active ? '#333' : '#fff')};
  color: ${(props) => (props.$active ? '#fff' : '#555')};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.$active ? '#333' : '#f5f5f5')};
  }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReviewItem = styled.div`
  padding: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  background-color: white;
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ReviewUser = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const ReviewItemRating = styled.div`
  color: #ffb400; 
  font-size: 14px;
  letter-spacing: 2px;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 8px;
  white-space: pre-wrap;
`;

export const ReviewDate = styled.span`
  font-size: 12px;
  color: #999;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 32px;
  color: #999;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
`;

export const PageButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${(props) => (props.$active ? '#333' : '#e0e0e0')};
  border-radius: 4px;
  background-color: ${(props) => (props.$active ? '#333' : '#fff')};
  color: ${(props) => (props.$active ? '#fff' : '#333')};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.$active ? '#333' : '#f0f0f0')};
  }
`;