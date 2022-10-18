import api from "../services/api";
import { createContext, ReactNode, useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { ModalContext } from "./ModalContext";
import { ITechData } from "../components/ModalAddTech";

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechContext {
  onSubmitTech: (formSchema: ITechData) => void;
  deleteTech: (remTech: any) => void;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: ITechProviderProps) => {
  const { techList, setTechList } = useContext(AuthContext);
  const { setModalAdd } = useContext(ModalContext);

  function onSubmitTech(techData: ITechData) {
    api
      .post("/users/techs", techData)
      .then(
        () =>
          toast.success(
            `${techData.title} adicionado a sua lista de tecnologias!`
          ),
        setModalAdd(false)
      )
      .then(setTechList([...techList, techData]))
      .catch((err) => console.log(err));
  }

  function deleteTech(remTech: ITechData) {
    const newTechList = techList.filter((tech) => tech !== remTech);
    setTechList(newTechList);
    toast.success(`${remTech.title} foi removido da sua lista de tecnologias!`);
    api.delete(`/users/techs/${remTech.id}`);
  }

  return (
    <TechContext.Provider value={{ onSubmitTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
