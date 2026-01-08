import styled from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  margin-left: 10px;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 2px;
  border: ${(props) => (props.$active ? 'none' : '1px solid #ccc')};
  background-color: ${(props) => (props.$active ? 'black' : 'white')};
  color: ${(props) => (props.$active ? 'white' : 'black')};
  transition: 0.15s;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  margin-left: 10px;
`;

export const CategoryButton = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  border-radius: 2px;
  border: ${(props) => (props.$active ? 'none' : '1px solid #ccc')};
  background-color: ${(props) => (props.$active ? 'black' : 'white')};
  color: ${(props) => (props.$active ? 'white' : 'black')};
  transition: 0.15s;
`;
