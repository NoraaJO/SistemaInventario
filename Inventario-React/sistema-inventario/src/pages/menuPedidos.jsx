import React from "react";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS
import { useNavigate } from "react-router-dom";

function MenuPedidos() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/home');
  };
  const redirectToCrear = () => {
    navigate('/crearArticulo');
  };


  return (
    <div className="App">
      <div className="App-header-login" > 
        <div className = "main-box" >
                <h4>Sección de Inventario</h4>
                <div className= "display-button"> 
                <button className= "button-main"> Mostrar Pedidos </button>
                <button className= "button-main" onClick={redirectToCrear}> Agregar Pedidos </button>
                <button className= "button-main" onClick={redirectToHome}> Volver </button>
                </div>
        </div>
      </div>
      
    </div>
  );
}

export default MenuPedidos;
