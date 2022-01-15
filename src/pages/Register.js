import "../Styles/styles.css";
import "../Styles/Register.css";
import Copyright from "../Components/Copyright";
import LogoDevs from "../Assets/img/logo big.svg";

function Register() {
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
            <h1>WELCOME</h1>
            <h1>NAME! </h1>
          </div>
          <input
            className="inputUserName"
            stype="text"
            placeholder="Type your username"
          ></input>
          <p>Select your favorite color</p>
          <div className="ContainerBtnColor">
            <input className="btnPink"></input>
            <input className="btnOrange"></input>
            <input className="btnYellow"></input>
            <input className="btnGreen"></input>
            <input className="btnblue"></input>
            <input className="btnPurple"></input>
          </div>
          <button className="btnContinue">Continue</button>
          <div>
            {" "}
            <Copyright />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;