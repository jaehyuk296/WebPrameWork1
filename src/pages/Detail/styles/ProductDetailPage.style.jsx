import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  background-color: #ffffff;
  font-family: 'Pretendard', sans-serif;
`;

// '목록으로' 버튼 스타일
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

export const MainContent = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 16px 0;
`;