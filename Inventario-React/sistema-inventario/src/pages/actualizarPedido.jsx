import React from "react";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS

import { useNavigate } from "react-router-dom";

function ActualizarPedido() {
  const navigate = useNavigate();

  const redirectToInventory = () => {
    navigate('/inventario');
  };


  return (
    <div className="App">
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
                    <button className="buttons-create" >Actualizar</button>
                </div>
        </div>
      </div>
      
    </div>
  );
}

export default ActualizarPedido;
