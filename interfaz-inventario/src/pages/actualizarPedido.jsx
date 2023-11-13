import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/mainPage.css"; // Importa tu archivo CSS
import "../styles/navbar.css"; // Importa tu archivo CSS

function ActualizarPedido() {
  // Estados para almacenar datos de la API
  const [clientes, setClientes] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [estadoOptions, setEstadoOptions] = useState([]);

  // Estado para el pedido actual
  const [pedido, setPedido] = useState({
    clientName: "",
    employeeName: "",
    estado: "",
    price: "",
    descripcion: "",
  });

  // Hook de navegación de React Router
  const navigate = useNavigate();

  // Efecto para obtener datos de la API al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos de la API
        const response = await axios.get('URL_DE_TU_API');
        
        // Actualizar estados con los datos de la API
        setClientes(response.data.clientes);
        setEmpleados(response.data.empleados);
        setEstadoOptions(response.data.estadoOptions);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    // Llama a la función para obtener datos al montar el componente
    fetchData();
  }, []); // El segundo argumento [] garantiza que useEffect se ejecute solo una vez al montar el componente

  // Función para redirigir a la página de inventario
  const redirectToInventory = () => {
    navigate('/inventario');
  };

  // Manejador de cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPedido({
      ...pedido,
      [name]: value,
    });
  };

  // Manejador de cambios en los selects
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setPedido({
      ...pedido,
      [name]: value,
    });
  };

  // Función para manejar la actualización del pedido
  const handleUpdatePedido = () => {
    // Lógica para enviar la actualización a la API
    // axios.post('URL', pedido)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error al actualizar el pedido', error);
    //   });
  };

  return (
    <div className="App">
      <div className="App-header-login">
        <div className="main-box-pedidos">
          <h6>Actualizar Pedido</h6>
          <div className="input-column">
            <form className="input-column">
              <h7>Nombre del Cliente</h7>
              <select
                name="clientName"
                onChange={handleSelectChange}
                value={pedido.clientName}
              >
                <option value="">Selecciona un cliente</option>
                {clientes.map((cliente) => (
                  <option key={cliente.id} value={cliente.name}>
                    {cliente.name}
                  </option>
                ))}
              </select>

              <h7>Nombre del Empleado</h7>
              <select
                name="employeeName"
                onChange={handleSelectChange}
                value={pedido.employeeName}
              >
                <option value="">Selecciona un empleado</option>
                {empleados.map((empleado) => (
                  <option key={empleado.id} value={empleado.name}>
                    {empleado.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="input-row">
            <h7>Estado</h7>
            <select
              name="estado"
              onChange={handleSelectChange}
              value={pedido.estado}
            >
              <option value="">Selecciona un estado</option>
              {estadoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <h7>Precio</h7>
            <form className="input-row">
              <input
                type="text"
                name="price"
                placeholder="Precio"
                value={pedido.price}
                onChange={handleInputChange}
              />
            </form>
          </div>
          <div className="input-column">
            <h7>Descripción</h7>
            <textarea
              name="descripcion"
              placeholder="Agrega una descripción..."
              value={pedido.descripcion}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="buttons">
            <button className="buttons-create" onClick={redirectToInventory}>
              Volver
            </button>
            <button className="buttons-create" onClick={handleUpdatePedido}>
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActualizarPedido;

