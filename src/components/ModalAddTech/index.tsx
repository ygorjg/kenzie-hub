import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { TechContext } from "../../contexts/TechContext";

export interface ITechData {
  title: string;
  status: string;
  id?: string;
}

const ModalAddTech = () => {
  const { setModalAdd } = useContext(ModalContext);
  const { onSubmitTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Você deve inserir um nome!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <div className="modalBox">
        <div className="modalHeader">
          <h4>Cadastrar Tecnologia</h4>
          <button className="btnCloseModal" onClick={() => setModalAdd(false)}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmitTech)} className="modalContent">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="   Insira aqui a tecnologia"
            id="title"
            {...register("title")}
          />
          <p className="msgAddTechError">{errors.title?.message}</p>
          <label htmlFor="status">Selecionar status</label>
          <select className="selectStatus" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button className="btnAddTech" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ModalAddTech;
