import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import AuthContextAPI from "./ContextAPI/AuthContextAPI";
import Routes from "./router/Routes";

function App() {
  return (
    <AuthContextAPI>
      <Routes />
    </AuthContextAPI>
  );
}

export default App;
