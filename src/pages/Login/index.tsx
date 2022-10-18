import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export interface IData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido!"),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container className="container">
      <header>
        <img className="logo" src={logo} alt="Logo Kenzie Hub" />
      </header>
      <main>
        <Form onSubmit={handleSubmit(signIn)}>
          <div className="boxTitleLogin">
            <h2>Login</h2>
          </div>
          <div className="boxInputLabel">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              placeholder="    Insira aqui seu e-mail"
              id="email"
              {...register("email")}
            />
            <p className="msgLoginError">{errors.email?.message}</p>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="    Insira aqui sua senha"
              {...register("password")}
            />
            <p className="msgLoginError">{errors.password?.message}</p>
          </div>
          <button className="btnLogin" type="submit">
            Entrar
          </button>
          <h4>Ainda não possui uma conta?</h4>
          <Link to="/register">
            <button className="btnRegister">Cadastre-se</button>
          </Link>
        </Form>
      </main>
    </Container>
  );
};

export default Login;
