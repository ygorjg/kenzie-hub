import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121214;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    margin-top: 35px;

    @media (min-width: 1000px) {
      width: 65vw;
    }

    @media (min-width: 1440px) {
      width: 50vw;
    }
  }

  .logo {
    width: 101px;
    height: 14px;

    @media (min-width: 500px) {
      width: 130px;
      height: 20px;
    }
  }

  .btnExit {
    background: #212529;
    border: none;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 23px;
    color: #f8f9fa;
    width: 55.54px;
    height: 31.95px;

    &:hover {
      color: #212529;
      transition: 600ms;
      background-color: #f8f9fa;
    }
  }

  .barra {
    margin-top: 28px;
    width: 100vw;
    height: 2px;
    background-color: #212529;
  }

  .boxUserInfos {
    margin-top: 35px;
    margin-bottom: 12px;
    display: flex;

    align-items: flex-start;
    flex-direction: column;
    width: 85vw;

    @media (min-width: 500px) {
      justify-content: space-between;
      flex-direction: row;
    }

    @media (min-width: 1000px) {
      width: 65vw;
    }

    @media (min-width: 1440px) {
      width: 50vw;
    }
  }

  .userSalutation {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  .userModule {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
    margin-top: 7px;

    @media (min-width: 500px) {
      margin-top: auto;
    }
  }
`;

export const BoxAddTech = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  margin-top: 26px;

  @media (min-width: 1000px) {
    width: 65vw;
  }

  @media (min-width: 1440px) {
    width: 50vw;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }

  button {
    width: 32px;
    height: 32px;
    color: #f8f9fa;
    background-color: #212529;
    border-radius: 4px;
    border: none;
    font-size: 25px;
    font-weight: 500;
    text-align: center;

    &:hover {
      color: #212529;
      transition: 600ms;
      background-color: #f8f9fa;
    }
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  height: 100%;
  background: #212529;
  border-radius: 4px;
  margin-top: 20px;
  padding: 20px;
  gap: 15px;

  @media (min-width: 1000px) {
    width: 65vw;
  }

  @media (min-width: 1440px) {
    width: 50vw;
  }
`;
