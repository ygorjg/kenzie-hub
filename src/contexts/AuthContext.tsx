import { createContext, ReactNode, useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { IData } from "../pages/Login";
import { IUserRegister } from "../pages/Register";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  user: null | IUser;
  signIn: (formSchema: IData) => void;
  techList: [] | ITech[];
  setTechList: any;
  onSubmitRegister: (formSchema: IUserRegister) => void;
  loading: boolean;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [] | ITech[];
  works: [] | IWork[];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}

interface ITech {
  id: string;
  title: string;
  status: string;
}

interface IWork {
  title: string;
  description: string;
  deploy_url: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [techList, setTechList] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .get("/profile")
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => window.localStorage.clear());
    }
    setLoading(false);
  }, []);

  const signIn = (userData: IData) => {
    api
      .post("/sessions", userData)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("@token", response.data.token);
        window.localStorage.setItem("@userid", response.data.user.id);
        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        setTechList(response.data.user.techs);
        toast.success("Login efetuado com sucesso!");
        navigate("/dashboard");
      })
      .catch(() => toast.error("E-mail ou senha inválidos!"));
  };

  const onSubmitRegister = (userData: IUserRegister) => {
    api
      .post("/users", userData)
      .then(() => {
        toast.success("Usuário criado com sucesso!");
        navigate("/login");
      })
      .catch(() => toast.error("Houve algum problema!"));
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, techList, setTechList, onSubmitRegister, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
