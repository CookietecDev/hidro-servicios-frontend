import styled from "styled-components";

export const CardShadow = styled.div`
  height: 250px;
  width: 400px;
  background-color: #a2c7e6;
  @media (max-width: 600px) {
    height: 125px;
    width: 200px;
  }
`;

export const ContainerCard = styled.div`
  position: relative;
  margin: 70px 50px;
`;

export const ContainerImage = styled.div`
  position: absolute;
  bottom: 30px;
  left: -35px;
  @media (max-width: 600px) {
    width: 200px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: justify;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
