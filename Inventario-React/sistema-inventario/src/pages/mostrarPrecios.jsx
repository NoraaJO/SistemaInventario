import React from "react";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS
import { DataGrid } from '@mui/x-data-grid';

import { useNavigate } from "react-router-dom";



const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 430 },
    { field: 'price', headerName: 'Precio', width: 330 },
  
  ];
  
  const rows = [
    { id: 1, name: 'Sublimación de Camisas', price: 500 },
    { id: 2, name: 'Zapatillas deportivas', price: 750 },
    { id: 3, name: 'Pantalones vaqueros', price: 300 },
    { id: 4, name: 'Auriculares inalámbricos', price: 400 },
    { id: 5, name: 'Bolso de cuero', price: 600 },
    { id: 6, name: 'Gafas de sol', price: 200 },
    { id: 7, name: 'Teléfono inteligente', price: 550 },
    { id: 8, name: 'Computadora Apple', price: 1480 },
    { id: 9, name: 'Apple Watch', price: 320 },
  ];

function MostrarPrecios() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/home');
  };


  return (    <div className="App">
  <div className="App-header-login" > 
    
    <div className = "main-box-pedidos" >
    <h4>Precios</h4>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    <div className="buttons">
        <button className="buttons-create" onClick={redirectToHome} >Volver</button>
    </div>
    </div>
  </div>
  
</div>
  );
}

export default MostrarPrecios;
