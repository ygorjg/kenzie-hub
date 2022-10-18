import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    margin-top: 35px;

    @media (min-width: 500px) {
      width: 50vw;
    }

    @media (min-width: 1000px) {
      width: 30vw;
    }
  }

  .logo {
    width: 101px;
    height: 14px;

    @media (min-width: 500px) {
      width: 144.06px;
      height: 19.97px;
    }
  }

  .btnReturn {
    background: #212529;
    border: none;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
    color: #f8f9fa;
    width: 79.54px;
    height: 31.95px;

    &:hover {
      color: #212529;
      transition: 600ms;
      background-color: #f8f9fa;
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
  height: 70%;
  gap: 5px;
  margin-top: 25px;

  @media (min-width: 500px) {
    width: 50vw;
  }

  @media (min-width: 1000px) {
    width: 30vw;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;
    color: #f8f9fa;
    margin-top: 15px;
  }

  .textCreateAcc {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 18px;
    color: #868e96;
    margin-top: 10px;
  }

  .boxInputLabel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 10px;
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
    border: none;
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

  .msgRegisterError {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #ff577f;
  }

  .btnRegister {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
    color: #ffffff;
    background: #ff577f;
    border-radius: 4px;
    border: none;
    width: 76vw;
    height: 40px;
    margin-top: 8px;
    margin-bottom: 25px;

    &:hover {
      color: #ff577f;
      transition: 600ms;
      background-color: #ffffff;
    }

    @media (min-width: 500px) {
      width: 45vw;
    }

    @media (min-width: 1000px) {
      width: 25vw;
    }
  }

  select {
    background: #343b41;
    border: none;
    border-radius: 3.20867px;
    width: 76vw;
    height: 31px;

    @media (min-width: 500px) {
      width: 45vw;
    }

    @media (min-width: 1000px) {
      width: 25vw;
    }
  }

  option {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    color: #868e96;
  }
`;
