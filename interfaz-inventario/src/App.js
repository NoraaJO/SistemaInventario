import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SignupForm from './pages/SignupForm';
import ActualizarPedido from './pages/actualizarPedido';
import CrearArticulo from './pages/crearArticulo';
import EditarArticulo from "./pages/editarArticulo";
import InventarioForm from "./pages/inventario";
import { LoginForm } from "./pages/login";
import { LogOut } from "./pages/logout";
import MainPage from "./pages/mainPage";
import MenuPedidos from './pages/menuPedidos';
import MostrarInventario from "./pages/mostrarInventario";
import MostrarPrecios from './pages/mostrarPrecios';
import NuevoPedido from './pages/nuevoPedido';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
            <Route path="home" element={<MainPage />} />
            <Route path="inventario" element={<InventarioForm />} />
            <Route path="crearArticulo" element={<CrearArticulo />} />
            <Route path="actualizarPedido" element={<ActualizarPedido />} />
            <Route path="mostrarPrecios" element={<MostrarPrecios />} />
            <Route path="mostrarInventario" element={<MostrarInventario />} />
            <Route path="menuPedidos" element={<MenuPedidos />} />
            <Route path="nuevoPedido" element={<NuevoPedido />} />
            <Route path="editarArticulo" element={<EditarArticulo/>} />
            <Route path="logout" element={<LogOut />} />
          <Route path="signupForm" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;