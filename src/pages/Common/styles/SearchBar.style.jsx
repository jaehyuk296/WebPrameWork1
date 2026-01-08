// src/components/SearchBar.styled.js
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* 화면 전체 쓰기 */
  margin: 1rem 0 0 0;
  padding: 0 2rem;        /* 좌우 여백만 가볍게 */
  text-align: left;
`;

export const Title = styled.h1`
  user-select: none;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  border: 1px solid #dcdfe3;
  border-radius: 10px;
  background: #fff;
  transition: border-color .2s;
  &:hover { border-color: #b8bec6; }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 42px 14px 16px;
  border: 0;
  outline: none;
  font-size: 14px;
`;

export const Button = styled.button`
  position: absolute;
  right: 12px; top: 50%;
  transform: translateY(-50%);
  border: 0; background: transparent;
  color: #6b7280; cursor: pointer;
  &:hover { color: #111; }
`;

export const Divider = styled.hr`
  margin-top: 16px;
  border: 0; border-top: 1px solid #eceff3;
`;
