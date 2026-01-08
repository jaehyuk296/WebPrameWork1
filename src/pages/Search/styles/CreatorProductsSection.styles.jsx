import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export const ProductGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0 30px 40px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  height: 650px;
  background: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ProductImageBox = styled.div`
  flex: 1;
  background: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  padding: 16px 18px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;

  span.discount {
    color: #e53935;
    margin-right: 8px;
  }
`;

export const ProductRating = styled.div`
  font-size: 14px;
  color: #666;
`;
