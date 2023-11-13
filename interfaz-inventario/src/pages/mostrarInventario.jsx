import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css";
import "../styles/navbar.css";

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

const initialRows = [
  { id: 1, name: 'Sublimación de Camisas', type: 'Ropa', quantity: 10 },
  { id: 2, name: 'Zapatillas deportivas', type: 'Calzado', quantity: 5 },
  // ...otros datos
];

function MostrarInventario() {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredRows, setFilteredRows] = useState(initialRows);

  const redirectToHome = () => {
    navigate('/home');
  };

  const handleEdit = (id) => {
    // Puedes redirigir a una página de edición pasando el ID como parámetro
    navigate(`/editarArticulo/${id}`);
  };

  const handleSearch = () => {
    // Filtrar los datos según la búsqueda
    const filteredData = initialRows.filter(
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
              rows={filteredRows}
              columns={columns}
              pageSize={10}
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
