import { Link, Navigate } from "react-router-dom";

import logo from "../../assets/Logo.svg";
import TechItem from "../../components/TechItem";
import ModalAddTech from "../../components/ModalAddTech";
import { Container, BoxAddTech, TechList } from "./styles";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const { modalAdd, setModalAdd } = useContext(ModalContext);

  function logout() {
    window.localStorage.clear();
  }

  return user ? (
    <Container>
      {modalAdd && <ModalAddTech />}
      <header className="header">
        <img className="logo" src={logo} alt="Logo Kenzie Hub" />
        <Link to="/login">
          <button onClick={logout} className="btnExit">
            Sair
          </button>
        </Link>
      </header>
      <span className="barra"></span>
      <div className="boxUserInfos">
        <h2 className="userSalutation">Olá, {user.name}!</h2>
        <p className="userModule">{user.course_module}</p>
      </div>
      <span className="barra"></span>
      <BoxAddTech className="boxAddTech">
        <h4>Tecnologias</h4>
        <button onClick={() => setModalAdd(true)}>+</button>
      </BoxAddTech>
      <TechList>
        <TechItem />
      </TechList>
    </Container>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dashboard;
