/** 

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
*/

import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

function MostrarInventario() {
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState("");
  const [searchClientName, setSearchClientName] = useState("");
  const [searchEmployeeName, setSearchEmployeeName] = useState("");
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    // Ejemplo de datos en el localStorage
    const storedRows = [
      { id: 1, clientName: 'Julian Leiva', employeeName: 'Jesús Cortes', estado: 'Pendiente', creationDate: '22-10-2023', description: 'Medias personalizadas CostaRica' },
      { id: 2, clientName: 'Raquel Ortega', employeeName: 'Aaron Ortiz', estado: 'Completado', creationDate: '10-11-2023', description: 'Camisa Vans' },
      { id: 3, clientName: 'Naomi Ilama', employeeName: 'Jesús Cortes', estado: 'Entregado', creationDate: '05-09-2023', description: 'Llavero Costa Rica' },
      { id: 4, clientName: 'Silvia Gamboa', employeeName: 'Jesús Cortes', estado: 'Cancelado', creationDate: '20-11-2023', description: 'Taza Navideña' },
      { id: 5, clientName: 'Emili Jimenez', employeeName: 'Aaron Ortiz', estado: 'Entregado', creationDate: '15-08-2023', description: 'Porta Retrato familiar' },
      // Agrega más ejemplos si es necesario
    ];

    setRows(storedRows);
  }, []);

  const redirectToHome = () => {
    navigate('/home');
  };

  const handleEdit = (id) => {
    // Redirige a la edición pasando el ID como parámetro
    navigate(`/actualizarPedido/${id}`);
  };

  const columns = [
    { field: 'clientName', headerName: 'Nombre del Cliente', width: 200 },
    { field: 'employeeName', headerName: 'Nombre del Empleado', width: 200 },
    { field: 'estado', headerName: 'Estado', width: 150 },
    { field: 'creationDate', headerName: 'Fecha de Creación', width: 200 },
    { field: 'description', headerName: 'Descripción', width: 300 },
    {
      field: 'edit',
      headerName: 'Editar',
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleEdit(params.row.id)}>Editar</button>
      ),
    },
  ];

  const handleSearch = () => {
    // Filtra los datos según la búsqueda
    const filteredData = rows.filter(
      (row) =>
        row.estado.toLowerCase().includes(searchState.toLowerCase()) &&
        row.clientName.toLowerCase().includes(searchClientName.toLowerCase()) &&
        row.employeeName.toLowerCase().includes(searchEmployeeName.toLowerCase())
    );

    setFilteredRows(filteredData);
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h4>Pedidos</h4>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Buscar por estado"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
            <input
              type="text"
              placeholder="Buscar por nombre del cliente"
              value={searchClientName}
              onChange={(e) => setSearchClientName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Buscar por nombre del empleado"
              value={searchEmployeeName}
              onChange={(e) => setSearchEmployeeName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={filteredRows.length > 0 ? filteredRows : rows}
              columns={columns}
              pageSizeOptions={[10]}
              checkboxSelection
            />
          </div>
          <div className="buttons">
            <button className="buttons-create" onClick={redirectToHome}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostrarInventario;





