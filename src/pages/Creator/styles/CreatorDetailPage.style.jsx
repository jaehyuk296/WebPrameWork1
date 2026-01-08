import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px; 
  margin: 0 auto;
  padding-bottom: 80px;
  font-family: 'Pretendard', sans-serif;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
`;

export const HeaderNav = styled.div`
  padding: 20px 0;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #000;
    font-weight: 500;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 280px; 
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-bottom: 50px;
`;

export const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 3px solid #333;
`;

export const CreatorName = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CreatorJob = styled.p`
  font-size: 16px;
  color: #ccc;
  font-weight: 400;
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #111;
  /* 섹션 구분을 위해 밑줄 추가 (선택 사항) */
  border-bottom: 2px solid #111;
  padding-bottom: 15px;
`;

export const CategorySection = styled.div`
  margin-bottom: 60px; 
`;

export const CategoryTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const ProductGrid = styled.div`
  display: grid;
  /* ✨ 3개 배치 (카드가 넓게 보임) */
  grid-template-columns: repeat(3, 1fr); 
  /* 폭이 줄었으므로 간격 30px */
  gap: 30px; 

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  border: 1px solid #eee;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.08);
  }
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 300px; 
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  padding: 28px; 
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #111;
  margin-bottom: 10px;
  line-height: 1.5;
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-bottom: 14px;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 24px;
  
  span.star {
    font-weight: bold;
    margin-right: 4px;
  }
  span.count {
    color: #999;
  }
`;

export const DetailButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  margin-top: auto; 

  &:hover {
    background-color: #333;
  }
`;