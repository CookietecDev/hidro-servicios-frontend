import styled from "styled-components";

export const ImageContact = styled.img`
  margin-right: 20px;
`;

export const Container = styled.div`
  background-color: #95bfe2;
  padding: 70px;
  p {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    margin: 0;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1400px;
  margin: 40px auto;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 10px;
`;

export const TextContact = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
`;
