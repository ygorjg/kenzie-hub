import styled from "styled-components";

export const MsgZeroTechs = styled.h5`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #f8f9fa;
`;

export const Item = styled.li`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  background: #121214;
  border-radius: 4px;
  padding: 10px;

  @media (min-width: 1000px) {
    width: 60vw;
  }

  @media (min-width: 1440px) {
    width: 48vw;
  }

  &:hover {
    transition: 600ms;
    background: #343b41;
  }

  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: #f8f9fa;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: #868e96;
  }

  button {
    background: none;
    border: none;
  }
`;
