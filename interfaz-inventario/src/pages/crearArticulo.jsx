import React from "react";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS

import { useNavigate } from "react-router-dom";

function CrearArticulo() {
  const navigate = useNavigate();

  const redirectToInventory = () => {
    navigate('/inventario');
  };


  return (
    <div className="App">
      <div className="App-header-login" > 
        <div className = "main-box" >
                <h4>Crear Artículo</h4>
                <div className="crearArticulo-form">
                    <form >
                        <input type="text" id="fname" name="firstname" placeholder="Nombre del Producto" />
                        <p>Tipo de Producto</p>
                        <select id="tipo" name="Tipo de Producto" placeholder="Tipo de Producto">
                        <option value="0"></option>   
                        <option value="1">Tipo 1</option>
                        <option value="2">Tipo 2</option>
                        <option value="3">Tipo 3</option>
                        </select>
                        <input type="text" id="fname" name="firstname" placeholder="Cantidad..." />
                    </form>
                
                <div className="buttons">
                    <button className="buttons-create" onClick={redirectToInventory} >Cancelar</button>
                    <button className="buttons-create" >Agregar</button>
                </div>
                </div>
        </div>
      </div>
      
    </div>
  );
}

export default CrearArticulo;
