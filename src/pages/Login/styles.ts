import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 101px;
    height: 14px;
    margin-top: 35px;

    @media (min-width: 500px) {
      width: 144.06px;
      height: 19.97px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  width: 85vw;
  height: 60vh;
  gap: 7px;
  margin-top: 40px;

  @media (min-width: 500px) {
    width: 50vw;
  }

  @media (min-width: 1000px) {
    width: 30vw;
  }

  .boxTitleLogin {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #f8f9fa;
  }

  .boxInputLabel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 15px;
    gap: 10px;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #f8f9fa;
  }

  input {
    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
    width: 75vw;
    height: 30px;

    @media (min-width: 500px) {
      width: 45vw;
    }

    @media (min-width: 1000px) {
      width: 25vw;
    }

    &::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.9865px;
      line-height: 21px;
      color: #868e96;
    }
  }

  .msgLoginError {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #ff577f;
  }

  .btnLogin {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #ffffff;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    width: 76vw;
    height: 40px;
    margin-top: 6px;

    &:hover {
      color: #ff577f;
      transition: 600ms;
      background-color: #ffffff;
      border: #ffffff;
    }

    @media (min-width: 500px) {
      width: 45vw;
    }

    @media (min-width: 1000px) {
      width: 25vw;
    }
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: #868e96;
    margin-top: 17px;
  }

  .btnRegister {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #f8f9fa;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    width: 76vw;
    height: 40px;

    &:hover {
      color: #868e96;
      transition: 600ms;
      background-color: #f8f9fa;
      border: #f8f9fa;
    }

    @media (min-width: 500px) {
      width: 45vw;
    }

    @media (min-width: 1000px) {
      width: 25vw;
    }
  }
`;
