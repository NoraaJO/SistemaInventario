import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS

function ImageUploader() {
  const navigate = useNavigate();

  const redirectToInventory = () => {
    navigate('/inventario');
  };
  const redirectToPedidos = () => {
    navigate('/menuPedidos');
  };

  const redirectToReporteInventario = () => {
    navigate('/reporteInventario');
  };

  const redirectToPrecios = () => {
    navigate('/mostrarPrecios');
  };

  const home = () => {
    navigate('/');
  };



  return (
    <div className="App">
      <div className="App-header-login" > 
        <div className = "main-box" >
                <h4>Menú Principal</h4>
                <div className= "display-button"> 
                <button className= "button-main" onClick={redirectToInventory}> Control de Inventario </button>
                <button className= "button-main" onClick={redirectToReporteInventario}> Reporte de Inventario </button>
                <button className= "button-main" onClick={redirectToPrecios} > Precios </button>
                <button className= "button-main" onClick={redirectToPedidos} > Pedidos </button>
                <button className= "button-main" onClick={home}> Cerrar Sesión </button>
                </div>
        </div>
      </div>
      
    </div>
  );
}

export default ImageUploader;
