import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 40px;

  @media (max-width: 1120px) {
    justify-content: center;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  margin: 30px 0px;
  font-weight: 500;
`;
