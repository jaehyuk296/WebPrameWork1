import styled from 'styled-components';

export const CreatorSectionWrapper = styled.section`
  margin: 24px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const CreatorList = styled.div`
  display: flex;
  gap: 16px;
`;

export const CreatorProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px); /* 마우스 올리면 살짝 위로 올라가는 효과 */
  }
`;

export const CreatorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #eee;
`;

export const CreatorName = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;