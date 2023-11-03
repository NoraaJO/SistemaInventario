import React from "react";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS
import { useNavigate } from "react-router-dom";

function ImageUploader() {
  const navigate = useNavigate();

  const redirectToInventory = () => {
    navigate('/inventario');
  };
  const redirectToPedidos = () => {
    navigate('/menuPedidos');
  };

  const redirectToPrecios = () => {
    navigate('/mostrarPrecios');
  };



  return (
    <div className="App">
      <div className="App-header-login" > 
        <div className = "main-box" >
                <h4>Sección de Inventario</h4>
                <div className= "display-button"> 
                <button className= "button-main" onClick={redirectToInventory}> Control de Inventario </button>
                <button className= "button-main" > Reporte de Inventario </button>
                <button className= "button-main" onClick={redirectToPrecios} > Precios </button>
                <button className= "button-main" onClick={redirectToPedidos} > Pedidos </button>
                </div>
        </div>
      </div>
      
    </div>
  );
}

export default ImageUploader;
