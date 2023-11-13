import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";



function MostrarInventario() {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("");
  const [searchName, setSearchName] = useState("");
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtiene los datos de la API
        const response = await axios.get('URL');
        setRows(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchData();
  }, []);

  const redirectToHome = () => {
    navigate('/home');
  };

  const handleEdit = (id) => {
    // Redirige a la de edición pasando el ID como parámetro
    navigate(`/editarArticulo/${id}`);
  };

  const columns = [
    { field: 'name', headerName: 'Nombre', width: 200 },
    { field: 'type', headerName: 'Tipo', width: 150 },
    { field: 'quantity', headerName: 'Cantidad', width: 150 },
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
        row.type.toLowerCase().includes(searchType.toLowerCase()) &&
        row.name.toLowerCase().includes(searchName.toLowerCase())
    );

    setFilteredRows(filteredData);
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h4>Inventario</h4>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Buscar por tipo"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            />
            <input
              type="text"
              placeholder="Buscar por nombre"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
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
