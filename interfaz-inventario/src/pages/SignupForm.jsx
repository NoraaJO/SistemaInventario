// src/components/SignupForm.js


import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import "../App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const labelStyle = {
  color: "black",
};

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usuario: "",
    contrasenna: "",
    confContrasenna: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to your server or perform any desired actions here
    console.log(formData);

    // You can perform form validation here
    if (
      formData.usuario === "" ||
      formData.contrasenna === "" ||
      formData.confContrasenna === "" 
    ) {
      // fill up
      return;
    }

    try {
      // CAMBIAR
      const response = await fetch("http://localhost:9012/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data was successfully submitted
        // Render the profile page and send the data to it
        // Get the data from the server
        const data = await response.json();
        console.log(data);
        console.log(formData);
        // root.render(<ProfilePage formData={data} />);
        navigate("/home");
      } else {
        console.error("Acción Fallida:", response.statusText);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleCancel = () => {
    // Navegar de vuelta a la página de inicio de sesión
    navigate("/");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-box">
          <h3>
            Crea tu cuenta nueva
          </h3>
          <form className="font1" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="input"
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                type="password"
                id="contrasenna"
                name="contrasenna"
                placeholder="Contraseña"
                value={formData.contrasenna}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                type="password"
                id="confContrasenna"
                name="confContrasenna"
                placeholder="Confirme su Contraseña"
                value={formData.contrasenna}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button className="button2" type="button" onClick={handleCancel}>
                Cancelar
              </button>
              <button className="button2" type="button" onClick={handleSubmit}>
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default SignupForm;

