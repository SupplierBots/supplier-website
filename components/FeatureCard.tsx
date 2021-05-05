import { colors } from 'constants/theme';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* border-radius: 1rem; */
  background: ${colors.tertiaryBackground};
  font-size: 2.25rem;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1rem;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  transition: 0.3s all;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: ${colors.lightGrey};
  font-weight: 300;
`;

const Title = styled.p`
  margin: 0.5rem 0 1rem 0;
`;

const Content = styled.div`
  padding: 3rem 4rem 6rem 4rem;
`;

interface Props {
  iconName: string;
  title: string;
  description: string;
}
const FeatureCard = ({ iconName, title, description }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <Image src={`/static/${iconName}.svg`} width="50" height="50" />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
};

export default FeatureCard;
