// src/components/SignupForm.js

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import "../App.css";

// Getting the route to the backend
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const labelStyle = {
  color: "black",
};

const SignupForm = () => {

  const navigate = useNavigate(); // Obtiene la función navigate

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    contrasenna: "",
    fechaNacimiento: "",
    locacion: "",
    numero: "",
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
      formData.nombre === "" ||
      formData.apellidos === "" ||
      formData.correo === "" ||
      formData.contrasenna === "" ||
      formData.fechaNacimiento === "" ||
      formData.locacion === "" ||
      formData.numero === ""
    ) {
      // fill up
      return;
    }

    try {
      // Replace this with your actual API endpoint to send the data to the server
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
        navigate("/home")
      } else {
        // Handle errors here
        console.error("Signup failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="login-box">
          <h3>
            Join Us! 
          </h3>
          <form className="font1" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="input"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Name"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Lastname"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                type="email"
                id="correo"
                name="correo"
                placeholder="Email"
                value={formData.correo}
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
                placeholder="Password"
                value={formData.contrasenna}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                type="text"
                id="locacion"
                name="locacion"
                placeholder="Location"
                value={formData.locacion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                type="tel"
                id="numero"
                name="numero"
                placeholder="Phone Number"
                value={formData.numero}
                onChange={handleChange}
                required
              />
            </div>
            <button className="button2" type="submit">Sign Up</button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default SignupForm;
