import React from 'react';
import SearchBar from '../Common/SearchBar';
import styled from 'styled-components';
import ProductList from './ProductList';
import { dummyProducts } from '../../mocks/setListData';
import CreatorList from './CreatorList';
import { dummyCreators } from '../../mocks/setListData';
import { useNavigate } from 'react-router-dom';

// JSON mock 데이터 import
import {
  creators,
  products,
  creatorRecommendedProducts,
} from "../../mocks/setListData";

// ✅ 화면 전체 폭으로 검색바가 확장되게
const FullWidthSection = styled.section`
  width: 100vw; /* 브라우저 전체 너비 */
  margin-left: calc(-50vw + 50%); /* 중앙정렬 깨기 */
  padding: 20px 80px 0 80px; /* 상단, 좌우 여백 */
  text-align: left;
  box-sizing: border-box;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <FullWidthSection>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} />
      <CreatorList creators={creators} />
    </FullWidthSection>
  );
};

export default Home;
