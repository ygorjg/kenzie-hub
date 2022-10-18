import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #212529;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    width: 85vw;
    height: 320px;
    margin-top: 190px;

    @media screen and (min-width: 500px) {
      width: 60vw;
    }

    @media screen and (min-width: 700px) {
      width: 40vw;
    }

    @media screen and (min-width: 1000px) {
      width: 30vw;
    }
  }

  .modalHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    background: #343b41;
    border-radius: 3.20867px 3.20867px 0px 0px;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #f8f9fa;
  }

  .btnCloseModal {
    font-size: 12px;
    font-weight: 500;
    color: #868e96;
    background: none;
    border: none;

    &:hover {
      color: #ffffff;
      transition: 600ms;
    }
  }

  .modalContent {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 15px;
    margin-top: 30px;
  }

  input,
  select {
    height: 35px;
    background: #343b41;
    border: none;
    border-radius: 3.20867px;
  }

  input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    color: #868e96;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #f8f9fa;
  }

  .modalFooter {
    display: flex;
    justify-content: space-between;
  }

  .btnSaveEditTech {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    color: #ffffff;
    background: #ff577f;
    border: none;
    border-radius: 4.06066px;
    height: 35px;
    margin-top: 8px;

    &:hover {
      transition: 600ms;
      color: #ff577f;
      background-color: #ffffff;
    }
  }

  .btnDeleteTech {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.7913px;
    color: #ffffff;
    margin-top: 8px;
    height: 35px;
    background: #868e96;
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: #ffffff;
      color: #868e96;
      transition: 600ms;
    }
  }
`;
