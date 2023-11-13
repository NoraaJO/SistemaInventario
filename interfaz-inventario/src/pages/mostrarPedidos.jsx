import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS

const columns = [
  { field: 'name', headerName: 'Nombre', width: 430 },
  { field: 'price', headerName: 'Precio', width: 330 },
];

function MostrarPedidos() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await axios.get('URL');//CAMBIAR
        // Asigna los datos de la respuesta al estado
        setRows(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    // Llama a la función para obtener los datos al montar el componente
    fetchData();
  }, []); // El segundo argumento [] garantiza que useEffect se ejecute solo una vez al montar el componente

  const redirectToHome = () => {
    navigate('/home');
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h4>Pedidos</h4>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
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

export default MostrarPedidos;
