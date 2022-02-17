import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  height: 60px;
  background: #2f5597;
  margin-bottom: 15px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
`;
export const Text = styled.h1`
  font-size: 25px;
  font-weight: 600;
  line-height: 56px;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
