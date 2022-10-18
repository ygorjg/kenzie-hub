import { createContext, ReactNode, useState } from "react";

interface IModalProviderProps {
  children: ReactNode;
}

interface IModalContext {
  modalAdd: boolean;
  setModalAdd: any;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  return (
    <ModalContext.Provider
      value={{ modalAdd, setModalAdd, modalEdit, setModalEdit }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
