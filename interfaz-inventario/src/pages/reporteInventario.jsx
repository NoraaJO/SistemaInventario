import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

const columns = [
  { field: 'name', headerName: 'Nombre', width: 430 },
  { field: 'quantity', headerName: 'Cantidad', width: 150 },
];

function ReporteInventario() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula la obtención de datos desde localStorage
    const storedRows = JSON.parse(localStorage.getItem("inventario")) || [];
    setRows(storedRows.length > 0 ? storedRows : [
      { id: 1, name: 'Camisa Vans', quantity: 20 },
      { id: 2, name: 'Sandalias Adidas', quantity: 5 },
      { id: 3, name: 'Gorra Azul', quantity: 7 },
      { id: 4, name: 'Camisa logo', quantity: 10 },
      { id: 5, name: 'Tenis', quantity: 8 },
      { id: 6, name: 'Jarra con foto', quantity: 15 },
      { id: 7, name: 'Camisa Personalizada', quantity: 30 },
      { id: 8, name: 'Medias logo', quantity: 11 },
      { id: 9, name: 'Sandalias negras', quantity: 2 },
      { id: 10, name: 'Sourvenir llavero', quantity: 1 },
      { id: 11, name: 'Gorra Costa Rica', quantity: 10 },
      // Agrega más ejemplos si es necesario
    ]);
  }, []);

  const redirectToHome = () => {
    navigate('/home');
  };

  // Filtrar artículos con cantidad menor o igual a 10
  const lowInventoryItems = rows.filter(item => item.quantity <= 10);

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h4>Reporte de Inventario</h4>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={lowInventoryItems}
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

export default ReporteInventario;
