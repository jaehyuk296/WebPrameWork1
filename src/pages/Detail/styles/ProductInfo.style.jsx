import styled from 'styled-components';

export const ProductImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #eee;
  background-color: #f9f9f9;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 300px;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 16px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 32px;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 24px;
  }
`;

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.span`
  font-size: 14px;
  color: #888;
  font-weight: 500;
`;

export const Icons = styled.div`
  display: flex;
  gap: 12px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;  
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

export const Stars = styled.div`
  display: flex;
  font-size: 18px; /* 별 크기 */
  letter-spacing: 1px;
`;

// 소수점 비율대로 색칠되는 별
export const DynamicStar = styled.span`
  /* 그라데이션 배경 생성: 왼쪽부터 $percent%까지는 노랑, 그 뒤는 회색 */
  background: linear-gradient(
    90deg, 
    #ffc107 ${(props) => props.$percent}%, 
    #ddd ${(props) => props.$percent}%
  );
  
  /* 배경을 글자(별) 모양으로 잘라내기 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  display: inline-block;
`;

export const RatingText = styled.span`
  font-size: 14px;
  color: #555;
`;

export const PriceInfo = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;

  .discount {
    font-size: 24px;
    font-weight: 700;
    color: #e60023;
  }
  .final-price {
    font-size: 28px;
    font-weight: 700;
    color: #333;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 16px;    
  color: #999;
  text-decoration: line-through;
  margin-left: 8px;
`;

export const BuyButton = styled.a`
  display: block;
  width: 100%;
  padding: 16px;
  background-color: #3498db;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  margin-top: auto; 
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`;