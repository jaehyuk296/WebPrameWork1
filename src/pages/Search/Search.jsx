import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import SearchBar from '../Common/SearchBar';
import {
  creators,
  products,
  creatorRecommendedProducts,
} from '../../mocks/setListData';

import { PageWrapper } from './styles/Search.styles';
import SearchTabs from './components/SearchTabs';
import CreatorSection from './components/CreatorSection';
import CreatorProductsSection from './components/CreatorProductsSection';
import CategoryProductsSection from './components/CategoryProductsSection';

const Search = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const keyword = (params.get('query') || '').trim();

  const [mode, setMode] = useState('creator');
  const [creatorCategory, setCreatorCategory] = useState('전체');
  const [productCategory, setProductCategory] = useState('전체');

  const handleSearch = (nextKeyword) => {
    const q = nextKeyword.trim();
    if (!q) return;
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  const creatorResults = useMemo(() => {
    if (!keyword) return creators;

    const lower = keyword.toLowerCase();

    return creators.filter((c) => {
      const nameMatch = c.name?.toLowerCase().includes(lower);
      const categoryMatch = Array.isArray(c.category)
        ? c.category.some((x) => x.toLowerCase().includes(lower))
        : c.category?.toLowerCase?.().includes(lower);

      return nameMatch || categoryMatch;
    });
  }, [keyword]);

  const productResults = useMemo(() => {
    if (!keyword) return products;

    const lower = keyword.toLowerCase();

    return products.filter((p) => {
      const nameMatch = p.name?.toLowerCase().includes(lower);
      const categoryMatch = p.category?.toLowerCase?.().includes(lower);

      return nameMatch || categoryMatch;
    });
  }, [keyword]);

  useEffect(() => {
    if (!keyword) {
      setMode('creator');
      return;
    }

    if (creatorResults.length > 0) setMode('creator');
    else if (productResults.length > 0) setMode('category');
    else setMode('creator');

    setCreatorCategory('전체');
    setProductCategory('전체');
  }, [keyword, creatorResults.length, productResults.length]);

  const filteredCreators = useMemo(() => {
    if (creatorCategory === '전체') return creatorResults;
    return creatorResults.filter((c) =>
      Array.isArray(c.category)
        ? c.category.includes(creatorCategory)
        : c.category === creatorCategory,
    );
  }, [creatorResults, creatorCategory]);

  const filteredProducts = useMemo(() => {
    if (productCategory === '전체') return productResults;
    return productResults.filter((p) => p.category === productCategory);
  }, [productResults, productCategory]);

  const usedCreator = filteredCreators[0] || creatorResults[0] || null;

  const recommendedProducts = useMemo(() => {
    if (!usedCreator) return [];

    const ids = creatorRecommendedProducts[usedCreator.id] || [];

    return ids.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  }, [usedCreator]);

  return (
    <PageWrapper>
      <SearchBar onSearch={handleSearch} defaultQuery={keyword} />

      <SearchTabs
        mode={mode}
        onChangeMode={setMode}
        creatorCategory={creatorCategory}
        onChangeCreatorCategory={setCreatorCategory}
        productCategory={productCategory}
        onChangeProductCategory={setProductCategory}
      />

      {mode === 'creator' && usedCreator && (
        <CreatorSection
          creator={usedCreator}
          onClickCreator={() => navigate(`/creator/${usedCreator.id}`)}
        />
      )}

      {mode === 'creator' ? (
        <CreatorProductsSection products={recommendedProducts} />
      ) : (
        <CategoryProductsSection
          products={filteredProducts}
          usedCreator={usedCreator}
        />
      )}
    </PageWrapper>
  );
};

export default Search;
