import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import "../App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export const LoginForm = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contrasenna: "",
  });

  const navigate = useNavigate(); // Obtiene la función navigate

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const validateForm = () => {
    if (!loginData.email || !loginData.password) {
      setError("Por favor, complete todos los campos.");
      return false;
    }
    return true;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const showErrorForSeconds = (message, seconds) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, seconds * 1000);
  };

  const handleSubmit = async (event) => {
    console.log("check");
    event.preventDefault();

    if (!validateForm()) {
      showErrorForSeconds("Porfavor complete todos los espacios", 3);
      return;
    }

    try {
        navigate("/home");
        console.log("Usuario autenticado");
    } catch (error) {
      // Manejar errores de inicio de sesión
      console.error("Error al iniciar sesión:", error);
      setError(error.message);
    }
  };

  const handleSignUp = async (event) => {
    console.log("test handleSignUp");
    navigate("/SignupForm");
  };



  return (
    <div className="App">
      <header className="App-header-login">
        <div className="login-box">
            <h4>Sistema de Inventario</h4>
          <h3 >
            Inicio Sesión 
          </h3>
          <form className="font1" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="input"
                placeholder="Usuario"
                type="text"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                placeholder="Contraseña"
                type="password"
                id="password"
                color="black"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
              />
            </div>
            <button className="button2" type="submit">Iniciar Sesión</button>
            <hr></hr>
          </form>
          <form className="font1" onSubmit={handleSignUp}>
            <button className="button3">Crear cuenta nueva</button>
          </form>
          <div
            className="error-banner"
            style={{ display: error ? "block" : "none" }}
          >
            {error}
          </div>
        </div>
      </header>
    </div>
  );
};

export default LoginForm;


