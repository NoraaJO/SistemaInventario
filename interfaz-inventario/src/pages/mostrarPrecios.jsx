
/** 
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

const columns = [
  { field: 'name', headerName: 'Nombre', width: 430 },
  { field: 'price', headerName: 'Precio', width: 330 },
];

function MostrarPrecios() {
  const [rows, setRows] = useState([
    { id: 1, name: 'Producto A', price: 25.99 },
    { id: 2, name: 'Producto B', price: 19.99 },
    { id: 3, name: 'Producto C', price: 32.50 },
    // Agrega más ejemplos si es necesario
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula la obtención de datos de la API
    setRows([
      { id: 1, name: 'Camisa Vans', price: 20.000 },
      { id: 2, name: 'Sandalias Adidas', price: 25.000 },
      { id: 3, name: 'Gorra', price: 4.000 },
      // Agrega más ejemplos si es necesario
    ]);
  }, []);

  const redirectToHome = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h4>Precios</h4>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
          <div className="buttons">
            <button className="buttons-create" onClick={redirectToHome}>Volver</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostrarPrecios;
*/

import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

const columns = [
  { field: 'name', headerName: 'Nombre', width: 430 },
  { field: 'price', headerName: 'Precio', width: 330 },
];

function MostrarPrecios() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula la obtención de datos desde localStorage
    const storedRows = JSON.parse(localStorage.getItem("precios")) || [];
    setRows(storedRows.length > 0 ? storedRows : [
      { id: 1, name: 'Camisa Vans', price: 20.000 },
      { id: 2, name: 'Sandalias Adidas', price: 25.000 },
      { id: 3, name: 'Gorra', price: 4.000 },
      // Agrega más ejemplos si es necesario
    ]);
  }, []);

  const redirectToHome = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h4>Precios</h4>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSizeOptions={[10]}
              checkboxSelection
            />
          </div>
          <div className="buttons">
            <button className="buttons-create" onClick={redirectToHome}>Volver</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostrarPrecios;
