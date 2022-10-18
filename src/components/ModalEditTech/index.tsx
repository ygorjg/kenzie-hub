import { Container } from "./styles";

const ModalEditTech = () => {
  return (
    <Container>
      <div className="modalBox">
        <div className="modalHeader">
          <h4>Editar tecnologia</h4>
          <button className="btnCloseModal">X</button>
        </div>
        <form className="modalContent">
          <label htmlFor="name">Nome</label>
          <input type="text" placeholder="   Insira aqui o novo nome" />
          <label htmlFor="selectStatus">Selecionar status</label>
          <select className="selectStatus" id="SelectStatus">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="modalFooter">
            <button className="btnSaveEditTech" type="submit">
              Salvar alterações
            </button>
            <button className="btnDeleteTech">Excluir</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ModalEditTech;
