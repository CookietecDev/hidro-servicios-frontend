import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 45px;
  border-radius: 10px;
  background: #2f5597;
  margin-bottom: 15px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
