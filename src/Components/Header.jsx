import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { Login } from "./Login";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);

  const logInUser = () => {
    return <Login />;
  };

  return (
    <>
      <div className="Navbar">
        <div>About</div>
        <div>Home</div>
        <div>Career</div>
        <div>Our Mission</div>
        <div>
          {isAuth ? (
            <button style={{ border: "none" }} onClick={() => setIsAuth(false)}>
              SIGN OUT
            </button>
          ) : (
            <button style={{ border: "none" }} onClick={logInUser}>
              SIGN IN
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
