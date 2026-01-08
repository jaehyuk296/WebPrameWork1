import {
  SectionTitle,
  CreatorBox,
  CreatorIcon,
  CreatorInfo,
} from '../styles/CreatorSection.styles';

const CreatorSection = ({ creator, onClickCreator }) => {
  if (!creator) return null;

  return (
    <>
      <SectionTitle>크리에이터 1</SectionTitle>

      <CreatorBox onClick={onClickCreator} style={{ cursor: 'pointer' }}>
        <CreatorIcon>
          <img
            src={creator.image}
            alt={creator.name}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </CreatorIcon>

        <CreatorInfo>
          <span>{creator.name}</span>

          <span>
            {Array.isArray(creator.category)
              ? creator.category.join(', ')
              : creator.category}
          </span>

          <span>{creator.followers}</span>
        </CreatorInfo>
      </CreatorBox>
    </>
  );
};

export default CreatorSection;
