import styled from "styled-components";

export const Card = styled.div`
  user-select: none;
  width: 260px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const InfoBox = styled.div`
  padding: 12px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 90px; /* 고정 높이 -> 가격 위치 동일 */
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄 */
  -webkit-box-orient: vertical;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Discount = styled.span`
  color: #e63946;
  font-weight: 500;
  font-size: 14px;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 15px;
`;
