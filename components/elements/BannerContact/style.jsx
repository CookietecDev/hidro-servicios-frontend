import styled from "styled-components";

export const ImageContact = styled.img`
  margin-right: 20px;
  @media (max-width: 600px) {
    height: 50px;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 70px;

  @media (max-width: 600px) {
    padding: 70px 0px;
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
  font-size: 50px;
  text-align: center;
  color: ${(props) => props.theme.default};
  font-weight: bold;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
