import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export const ProductList = styled.div`
  margin-top: 20px;
  padding: 0 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  overflow: hidden;
`;

export const ProductTopRow = styled.div`
  display: flex;
  padding: 24px 28px 20px;
`;

export const ProductImageBox = styled.div`
  width: 220px;
  height: 220px;
  background: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
`;

export const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

export const ProductDiscountPriceRow = styled.div`
  font-size: 18px;
  font-weight: 700;

  span.discount {
    color: #e53935;
    margin-right: 8px;
  }
`;

export const ProductRatingRow = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;

  span.bar {
    margin: 0 6px;
    color: #ccc;
  }
`;

export const UsedCreatorRow = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #555;
`;

export const UsedCreatorLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const UsedCreatorNameRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UsedCreatorChip = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fafafa;
  font-size: 14px;

  span.icon {
    font-size: 18px;
  }

  span.category {
    font-size: 12px;
    color: #777;
  }
`;

export const ProductBottomRow = styled.div`
  border-top: 1px solid #eee;
`;

export const DetailButton = styled.button`
  width: 100%;
  padding: 14px 0;
  border: none;
  outline: none;
  background: black;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;
