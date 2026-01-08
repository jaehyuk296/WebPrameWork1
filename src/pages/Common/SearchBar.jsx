import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles/SearchBar.style';

import { creatorNames, productCategories } from '../../mocks/setListData';

const SearchBar = ({ defaultQuery = '' }) => {
  const [query, setQuery] = useState(defaultQuery);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = query.trim();
    if (!keyword) return;

    let type = 'product'; // 기본값

    if (creatorNames.includes(keyword)) {
      type = 'creator';
    } else if (productCategories.includes(keyword)) {
      type = 'product';
    }

    navigate(`/search?query=${encodeURIComponent(keyword)}&type=${type}`);
  };

  return (
    <S.Wrapper>
      <S.Title onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        크리에이픽
      </S.Title>

      <S.Form onSubmit={handleSearch}>
        <S.Input
          placeholder="크리에이터 또는 제품 카테고리 입력"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <S.Button type="submit">
          <Search size={20} />
        </S.Button>
      </S.Form>

      <S.Divider />
    </S.Wrapper>
  );
};

export default SearchBar;
