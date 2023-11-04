import './App.css';
import { LoginForm } from "./pages/login"
import  Navbar from "./pages/navbar"
import  MainPage  from "./pages/mainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from './pages/SignupForm';
import { LogOut } from "./pages/logout"
import InventarioForm from "./pages/inventario"
import CrearArticulo from './pages/crearArticulo';
import MenuPedidos from './pages/menuPedidos';
import ActualizarPedido from './pages/actualizarPedido';
import NuevoPedido from './pages/nuevoPedido';
import MostrarPrecios from './pages/mostrarPrecios';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/" element={<Navbar />}>
            <Route path="home" element={<MainPage />} />
            <Route path="inventario" element={<InventarioForm />} />
            <Route path="crearArticulo" element={<CrearArticulo />} />
            <Route path="actualizarPedido" element={<ActualizarPedido />} />
            <Route path="mostrarPrecios" element={<MostrarPrecios />} />
            <Route path="menuPedidos" element={<MenuPedidos />} />
            <Route path="nuevoPedido" element={<NuevoPedido />} />
            <Route path="logout" element={<LogOut />} />
          </Route>
          <Route path="signupForm" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;