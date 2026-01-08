import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  user-select: none;
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const NavButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d1d5db;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:hover:not(:disabled) {
    background: #f3f4f6;
  }
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 35px;
  transition: transform 0.35s ease;

  transform: translateX(${(props) => props.index * -295}px);
`;

