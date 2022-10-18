import AuthProvider from "./contexts/AuthContext";
import ModalProvider from "./contexts/ModalContext";
import TechProvider from "./contexts/TechContext";
import Routes from "./routes";
import Global from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <TechProvider>
            <Global />
            <Routes />
          </TechProvider>
        </ModalProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;
