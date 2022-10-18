import lixeira from "../../assets/Lixeira.svg";
import { Item, MsgZeroTechs } from "./styles";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TechContext } from "../../contexts/TechContext";
import { ModalContext } from "../../contexts/ModalContext";

const TechItem = () => {
  const { techList } = useContext(AuthContext);
  const { setModalEdit } = useContext(ModalContext);
  const { deleteTech } = useContext(TechContext);

  if (techList.length === 0) {
    return (
      <>
        {" "}
        (
        <MsgZeroTechs>
          Você não possui tecnologias cadastradas, adicione alguma.
        </MsgZeroTechs>
        )
      </>
    );
  } else {
    return (
      <>
        {" "}
        {techList.map((tech) => (
          <Item
            key={tech.id}
            className="techItem"
            onClick={() => setModalEdit(true)}
          >
            <h5>{tech.title}</h5>
            <div>
              <p>{tech.status}</p>
              <button onClick={() => deleteTech(tech)} className="btnRemTech">
                <img src={lixeira} alt="" />
              </button>
            </div>
          </Item>
        ))}
      </>
    );
  }
};

export default TechItem;
