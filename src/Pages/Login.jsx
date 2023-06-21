import logo from "../assets/icons/horizontal.jpg";
import login from "../assets/ilustraciones/ilustracion2.svg";
import { useNavigate } from "react-router-dom";
import "../css/styleAdmin.css";
import { useState } from "react";
import { authUsuarios } from "../Data/Login";

function Login() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    correo: "",
    contrasena: "",
  });

  const handleInputChange = ({ target }) => {
    setdata({
      ...data,
      [target.name]: target.value,
    });
  };

  function handle(event) {
    event.preventDefault();
  }

  return (
    <div className="containerp  " style={{ height: "100vh" }}>
      <div className="container w-75 shadow-login">
        <div className="row movil ">
          <div className=" col-sm-12  col-lg-6 colorlogin ">
            <div className="card-body p-md-2 mx-md-4 movilP ">
              <div className="text-center">
                <a href="/">
                  <img
                    src={logo}
                    style={{ width: "75%", marginBottom: "6%" }}
                    className="logo-empresa"
                    alt="logo"
                  />
                </a>
              </div>
              <h4 className="mb-5 text-center fw-bold opacity-75">Sesión Administrador</h4>
              <form autoComplete="on" onSubmit={handle}>
                <div className="form mb-4">
                  <label className="form-label">Correo Electronico</label>
                  <input
                    type="email"
                    onChange={handleInputChange}
                    name="correo"
                    id="form-label"
                    className="form-control p-3 "
                    placeholder="Ingrese correo electrónico"
                  />
                </div>

                <div className="form- mb-5">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    onChange={handleInputChange}
                    name="contrasena"
                    id="contrasena"
                    className="form-control p-3"
                    placeholder="Ingrese la contraseña"
                  />
                </div>

                <div className="d-grid gap-2 col-12 mx-auto text-center pt-1 mb-5 pb-1 mt-4">
                  <button
                    type="submit"
                    className="btn text-white gradient-custom-button p-2 w-100 pb-2"
                    onClick={() => authUsuarios(data, navigate)}
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="  d-none d-sm-flex col-lg-6 contan1 d-flex align-items-end justify-content-center">
            <div className="d-flex mb-4 justify-content-end  ">
              <picture className="d-flex mb-4 justify-content-end ">
                <img src={login} className="d-none d-sm-block" style={{minWidth:"700px"}} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
