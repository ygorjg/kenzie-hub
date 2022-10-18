import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { Container, Form } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const Register = () => {
  const { onSubmitRegister } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .matches(/(\d)/, "Deve conter ao menos 1 número!")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial!")
      .matches(/.{8,}/, "Deve conter ao menos 8 dígitos!"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória!")
      .oneOf([yup.ref("password")], "As senhas inseridas não combinam!"),
    bio: yup.string().required("Bio obrigatória!"),
    contact: yup.string().required("Opção de contato obrigatório!"),
    course_module: yup.string().required("Módulo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <header className="header">
        <img className="logo" src={logo} alt="Logo Kenzie Hub" />
        <Link to="/login">
          <button className="btnReturn">Voltar</button>
        </Link>
      </header>
      <Form onSubmit={handleSubmit(onSubmitRegister)}>
        <h2>Crie sua conta</h2>
        <p className="textCreateAcc">Rápido e grátis, vamos nessa!</p>

        <div className="boxInputLabel">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="    Digite aqui seu nome"
            id="name"
            {...register("name")}
          />
          <p className="msgRegisterError">{errors.name?.message}</p>
        </div>

        <div className="boxInputLabel">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            placeholder="    Digite aqui seu email"
            id="email"
            {...register("email")}
          />
          <p className="msgRegisterError">{errors.email?.message}</p>
        </div>

        <div className="boxInputLabel">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="    Digite aqui sua senha"
            id="password"
            {...register("password")}
          />
          <p className="msgRegisterError">{errors.password?.message}</p>
        </div>

        <div className="boxInputLabel">
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            placeholder="    Digite sua senha novamente"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <p className="msgRegisterError">{errors.confirmPassword?.message}</p>
        </div>

        <div className="boxInputLabel">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            placeholder="    Fale sobre você"
            id="bio"
            {...register("bio")}
          />
          <p className="msgRegisterError">{errors.bio?.message}</p>
        </div>

        <div className="boxInputLabel">
          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            placeholder="    Opção de contato"
            id="contact"
            {...register("contact")}
          />
          <p className="msgRegisterError">{errors.contact?.message}</p>
        </div>

        <div className="boxInputLabel">
          <label htmlFor="course_module">Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo (Backend Avançado)
            </option>
          </select>
          <p className="msgRegisterError">{errors.course_module?.message}</p>
        </div>

        <button className="btnRegister" type="submit">
          Cadastrar
        </button>
      </Form>
    </Container>
  );
};

export default Register;
