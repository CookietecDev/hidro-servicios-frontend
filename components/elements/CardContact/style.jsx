import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #95bfe2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContact = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
`;
