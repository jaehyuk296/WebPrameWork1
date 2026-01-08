import {
  TabsWrapper,
  TabButton,
  CategoryWrapper,
  CategoryButton,
} from '../styles/SearchTabs.styles';

const SearchTabs = ({
  mode,
  onChangeMode,
  creatorCategory,
  onChangeCreatorCategory,
  productCategory,
  onChangeProductCategory,
}) => {
  return (
    <>
      <TabsWrapper>
        <TabButton
          $active={mode === 'creator'}
          onClick={() => onChangeMode('creator')}
        >
          크리에이터 검색
        </TabButton>
        <TabButton
          $active={mode === 'category'}
          onClick={() => onChangeMode('category')}
        >
          제품 카테고리 검색
        </TabButton>
      </TabsWrapper>

      {mode === 'creator' && (
        <CategoryWrapper>
          <CategoryButton
            $active={creatorCategory === '전체'}
            onClick={() => onChangeCreatorCategory('전체')}
          >
            전체
          </CategoryButton>
          <CategoryButton
            $active={creatorCategory === '테크'}
            onClick={() => onChangeCreatorCategory('테크')}
          >
            📱 테크
          </CategoryButton>
        </CategoryWrapper>
      )}

      {mode === 'category' && (
        <CategoryWrapper>
          <CategoryButton
            $active={productCategory === '전체'}
            onClick={() => onChangeProductCategory('전체')}
          >
            🔥 전체
          </CategoryButton>
          <CategoryButton
            $active={productCategory === '뷰티'}
            onClick={() => onChangeProductCategory('뷰티')}
          >
            💄 뷰티
          </CategoryButton>
          <CategoryButton
            $active={productCategory === '테크'}
            onClick={() => onChangeProductCategory('테크')}
          >
            📱 테크
          </CategoryButton>
          <CategoryButton
            $active={productCategory === '패션'}
            onClick={() => onChangeProductCategory('패션')}
          >
            👗 패션
          </CategoryButton>
          <CategoryButton
            $active={productCategory === '라이프'}
            onClick={() => onChangeProductCategory('라이프')}
          >
            🏡 라이프
          </CategoryButton>
          <CategoryButton
            $active={productCategory === '푸드'}
            onClick={() => onChangeProductCategory('푸드')}
          >
            🍽️ 푸드
          </CategoryButton>
        </CategoryWrapper>
      )}
    </>
  );
};

export default SearchTabs;
