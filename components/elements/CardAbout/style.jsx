import styled from "styled-components";

export const ImageService = styled.img`
  width: 80%;
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDescription = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: justify;
  color: ${(props) => props.theme.text};
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1650px;
  margin: 60px auto;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
