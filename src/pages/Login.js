import "../Assets/Styles/styles.css";
import "../Assets/Styles/Login.css";
import LogoDevs from "../Assets/img/logo big.svg";
import Copyright from "../Components/Copyright";

function Login() {
  return (
    <section>
      <div className="containerLogin">
        <div className="containerLogo">
          <div>
            <img
              className="imgSearch"
              src={LogoDevs}
              alt="Logo Devs United"
              type="text"
            />
          </div>
        </div>
        <div className="containerAcceso">
          <div>
            <h1>LOREM</h1>
            <h1> IPSUM DOLOR </h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="btnGoogle">
            <button>Sign in with Google</button>
          </div>
          <div>
            {" "}
            <Copyright />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
