/** 

import { default as React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css"; // Importa CSS
import "../styles/navbar.css"; // Importa CSS

function CrearArticulo() {
  const navigate = useNavigate();

  // Estados para manejar los valores del formulario
  const [nombreProducto, setNombreProducto] = useState("");
  const [tipoProducto, setTipoProducto] = useState("");
  const [cantidad, setCantidad] = useState("");

  const redirectToInventory = () => {
    navigate('/inventario');
  };

  const handleNombreChange = (e) => {
    setNombreProducto(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipoProducto(e.target.value);
  };

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };

  const handleAgregarClick = () => {
    // Envia los datos al API
    // Simula una solicitud al API 
    console.log("Datos a enviar:", { nombreProducto, tipoProducto, cantidad });

    // Después de enviar los datos, se redirije al usuario
    redirectToInventory();
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box">
          <h4>Crear Artículo</h4>
          <div className="crearArticulo-form">
            <form>
              <input
                type="text"
                id="nombreProducto"
                name="nombreProducto"
                placeholder="Nombre del Producto"
                value={nombreProducto}
                onChange={handleNombreChange}
              />
              <p>Tipo de Producto</p>
              <select
                id="tipoProducto"
                name="tipoProducto"
                placeholder="Tipo de Producto"
                value={tipoProducto}
                onChange={handleTipoChange}
              >
                <option value=""></option>
                <option value="Tipo 1">Tipo 1</option>
                <option value="Tipo 2">Tipo 2</option>
                <option value="Tipo 3">Tipo 3</option>
              </select>
              <input
                type="text"
                id="cantidad"
                name="cantidad"
                placeholder="Cantidad..."
                value={cantidad}
                onChange={handleCantidadChange}
              />
            </form>
            <div className="buttons">
              <button
                className="buttons-create"
                onClick={redirectToInventory}
              >
                Cancelar
              </button>
              <button className="buttons-create" onClick={handleAgregarClick}>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearArticulo;

*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

function CrearArticulo() {
  const navigate = useNavigate();

  // Estados para manejar los valores del formulario
  const [nombreProducto, setNombreProducto] = useState("");
  const [tipoProducto, setTipoProducto] = useState("");
  const [cantidad, setCantidad] = useState("");

  const redirectToInventory = () => {
    navigate('/inventario');
  };

  const handleNombreChange = (e) => {
    setNombreProducto(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipoProducto(e.target.value);
  };

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };

  const handleAgregarClick = () => {
    // Obtener los datos almacenados actualmente en localStorage
    const existingData = JSON.parse(localStorage.getItem("articulos")) || [];

    // Crear un nuevo artículo con los datos del formulario
    const nuevoArticulo = {
      id: existingData.length + 1, // Puedes ajustar la lógica para asignar IDs
      nombre: nombreProducto,
      tipo: tipoProducto,
      cantidad: cantidad,
    };

    // Agregar el nuevo artículo a los datos existentes
    const newData = [...existingData, nuevoArticulo];

    // Actualizar los datos en localStorage
    localStorage.setItem("articulos", JSON.stringify(newData));

    // Después de enviar los datos, se redirige al usuario
    redirectToInventory();
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box">
          <h4>Crear Artículo</h4>
          <div className="crearArticulo-form">
            <form>
              <input
                type="text"
                id="nombreProducto"
                name="nombreProducto"
                placeholder="Nombre del Producto"
                value={nombreProducto}
                onChange={handleNombreChange}
              />
              <p>Tipo de Producto</p>
              <select
                id="tipoProducto"
                name="tipoProducto"
                placeholder="Tipo de Producto"
                value={tipoProducto}
                onChange={handleTipoChange}
              >
                <option value=""></option>
                <option value="Tipo 1">Calzado</option>
                <option value="Tipo 2">Ropa</option>
                <option value="Tipo 3">Accesorios</option>
              </select>
              <input
                type="text"
                id="cantidad"
                name="cantidad"
                placeholder="Cantidad..."
                value={cantidad}
                onChange={handleCantidadChange}
              />
            </form>
            <div className="buttons">
              <button
                className="buttons-create"
                onClick={redirectToInventory}
              >
                Cancelar
              </button>
              <button className="buttons-create" onClick={handleAgregarClick}>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearArticulo;
