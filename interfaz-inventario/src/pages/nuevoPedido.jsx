
/** 
import React from "react";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS

import { useNavigate } from "react-router-dom";

function NuevoPedido() {
  const navigate = useNavigate();

  const redirectToInventory = () => {
    navigate('/inventario');
  };


  return (    <div className="App">
  <div className="App-header-login" > 
    
    <div className = "main-box-pedidos" >
    <h6>Actualizar Pedido</h6>
          
                    <div className="input-column">
                    <form className="input-column">
                    <h7>Nombre del Cliente</h7>
                    <input type="text" id="fname" name="clientName" placeholder="Nombre del Cliente" />
                    <h7>Nombre del Empleado</h7>
                    <input type="text" id="fname" name="EmployeeName" placeholder="Nombre del Empleado" />
                    </form >
                    </div>
                   <div className="input-row">
                   <h7>Estado</h7>
                   <form className="input-row">
                    <select id="estado" name="Estado" >
                    <option value="0"></option>   
                    <option value="1">Tipo 1</option>
                    <option value="2">Tipo 2</option>
                    <option value="3">Tipo 3</option>
                    </select>
                    </form>
                    <h7>Precio</h7>
                    <form className="input-row"> 
                    <input type="text" id="fname" name="Price" placeholder="Precio" />
                    </form>
                    </div>
                    <div className="input-column"><h7>Descripción</h7></div>
                    <textarea name="styled-textarea" id="styled" onfocus="this.value=''; setbg('#e5fff3');" onblur="setbg('white')" placeholder="Agregue una descripción..."></textarea>
                
            
            <div className="buttons">
                
                <button className="buttons-create" onClick={redirectToInventory} >Volver</button>
                <button className="buttons-create" >Agregar</button>
            </div>
    </div>
  </div>
  
</div>
  );
}

export default NuevoPedido;

*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

function NuevoPedido() {
  const navigate = useNavigate();

  // Estados para manejar los valores del formulario
  const [clientName, setClientName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [estado, setEstado] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const redirectToInventory = () => {
    navigate('/inventario');
  };

  const handleAgregarClick = () => {
    // Obtener pedidos existentes del localStorage
    const existingPedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    // Crear un nuevo pedido
    const newPedido = {
      clientName,
      employeeName,
      estado,
      price,
      description,
    };

    // Guardar el nuevo pedido en el localStorage
    localStorage.setItem("pedidos", JSON.stringify([...existingPedidos, newPedido]));

    // Redirigir al usuario
    redirectToInventory();
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h6>Nuevo Pedido</h6>
          <div className="input-column">
            <form className="input-column">
              <h7>Nombre del Cliente</h7>
              <input
                type="text"
                name="clientName"
                placeholder="Nombre del Cliente"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <h7>Nombre del Empleado</h7>
              <input
                type="text"
                name="employeeName"
                placeholder="Nombre del Empleado"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </form>
          </div>
          <div className="input-row">
            <h7>Estado</h7>
            <form className="input-row">
              <select
                id="estado"
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value=""></option>
                <option value="Pendiente">Tipo 1</option>
                <option value="Cancelado">Tipo 2</option>
                <option value="Entregado">Tipo 3</option>
              </select>
            </form>
            <h7>Precio</h7>
            <form className="input-row">
              <input
                type="text"
                name="price"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </form>
          </div>
          <div className="input-column">
            <h7>Descripción</h7>
            <textarea
              name="description"
              placeholder="Agregue una descripción..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="buttons">
            <button className="buttons-create" onClick={redirectToInventory}>
              Volver
            </button>
            <button className="buttons-create" onClick={handleAgregarClick}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevoPedido;
