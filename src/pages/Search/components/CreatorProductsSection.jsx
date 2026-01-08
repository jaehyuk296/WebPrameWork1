import { useNavigate } from 'react-router-dom';

import {
  SectionTitle,
  ProductGrid,
  ProductCard,
  ProductImageBox,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductRating,
} from '../styles/CreatorProductsSection.styles';

import { getProductRatingInfo } from '../../../mocks/setListData';

const CreatorProductsSection = ({ products }) => {
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return (
      <>
        <SectionTitle>추천 제품 0</SectionTitle>
        <div style={{ padding: '20px', color: '#999' }}>
          추천 제품이 없습니다.
        </div>
      </>
    );
  }

  return (
    <>
      <SectionTitle>추천 제품 {products.length}</SectionTitle>

      <ProductGrid>
        {products.map((p) => {
          if (!p) return null;

          const ratingInfo = getProductRatingInfo(p.id);

          return (
            <ProductCard
              key={p.id}
              onClick={() => navigate(`/detail/${p.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <ProductImageBox>
                <img src={p.image} alt={p.name} />
              </ProductImageBox>

              <ProductInfo>
                <ProductName>{p.name}</ProductName>

                <ProductPrice>
                  <span className="discount">{p.discount}%</span>
                  <span>₩{Number(p.price || 0).toLocaleString()}</span>
                </ProductPrice>

                <ProductRating>
                  ⭐ {ratingInfo.average} ({ratingInfo.count})
                </ProductRating>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductGrid>
    </>
  );
};

export default CreatorProductsSection;
