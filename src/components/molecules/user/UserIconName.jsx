import styled from "styled-components";
export const UserIconName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImg src={image} height={160} width={160} alt="プロフィール" />
      <SName>{name}</SName>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 100px;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
