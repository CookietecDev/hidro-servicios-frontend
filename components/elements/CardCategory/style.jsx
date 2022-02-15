import styled from "styled-components";

export const Card = styled.div`
  height: 220px;
  border: 3px solid #b0afaa;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0px 0px 10px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const LinkTexT = styled.p`
  font-weight: bold;
  color: #b0afaa;

  &:hover {
    cursor: pointer;
    color: #2f5597;
  }
`;
