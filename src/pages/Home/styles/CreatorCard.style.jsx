import styled from "styled-components";

export const Card = styled.div`
  user-select: none;
  width: 260px;  
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

/* 🔥 이미지 + Rank를 포함하는 래퍼 */
export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
`;

/* 이미지 */
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 꽉 채움 */
  display: block;
`;

/* 이미지 위에 겹치는 검정 Rank 박스 */
export const Rank = styled.div`
  position: absolute;
  top: 10px; 
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

export const InfoBox = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #eee;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 450;
  margin-bottom: 4px;
`;

export const Category = styled.div`
  font-size: 14px;
  color: #6b7280;
`;
