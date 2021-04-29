import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Home: React.FC = () => {
  return (
    <div>
      <p>Hello</p>
      <Title>Supplier</Title>
    </div>
  );
};

export default Home;
