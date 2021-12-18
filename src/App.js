import "./styles.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Login } from "./Components/Login";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Login />
    </div>
  );
}
