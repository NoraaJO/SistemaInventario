/** 
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditarArticulo() {
  const navigate = useNavigate();

  // Estados para manejar los valores del formulario
  const [nombreProducto, setNombreProducto] = useState("");
  const [tipoProducto, setTipoProducto] = useState("");
  const [cantidad, setCantidad] = useState("");

  const redirectToMostrarInventario = () => {
    navigate('/mostrarInventario');
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
    // Simular una solicitud al API 
    console.log("Datos a enviar:", { nombreProducto, tipoProducto, cantidad });

    // Después de enviar los datos, puedes redirigir al usuario
    redirectToMostrarInventario();
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box">
          <h4>Crear Artículo</h4>
          <div className="editarArticulo-form">
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
                onClick={redirectToMostrarInventario}
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

export default EditarArticulo;

*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

function EditarArticulo() {
  const navigate = useNavigate();

  // Estados para manejar los valores del formulario
  const [nombreProducto, setNombreProducto] = useState("");
  const [tipoProducto, setTipoProducto] = useState("");
  const [cantidad, setCantidad] = useState("");

  const redirectToMostrarInventario = () => {
    navigate('/mostrarInventario');
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
    // Guardar datos en localStorage
    const nuevoArticulo = {
      nombre: nombreProducto,
      tipo: tipoProducto,
      cantidad: cantidad,
    };

    // Obtener datos existentes de localStorage o inicializar un array vacío
    const articulosGuardados = JSON.parse(localStorage.getItem("articulos")) || [];
    
    // Agregar el nuevo artículo al array
    articulosGuardados.push(nuevoArticulo);
    
    // Guardar el array actualizado en localStorage
    localStorage.setItem("articulos", JSON.stringify(articulosGuardados));

    // Después de guardar los datos, puedes redirigir al usuario
    redirectToMostrarInventario();
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box">
          <h4>Editar Artículo</h4>
          <div className="editarArticulo-form">
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
                onClick={redirectToMostrarInventario}
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

export default EditarArticulo;
