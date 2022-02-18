import styled from "styled-components";

export const Card = styled.div`
  height: 180px;
  border: none;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0px 0px 10px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin: 10px;
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.default};
  }

  @media (max-width: 900px) {
    height: 139px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
