import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./views/NavBar";
import Home from "./views/Home.jsx";
import CardsPokemon from "./views/CardsPokemon.jsx"
import CreatePokemon from "./views/CreatePokemon";
import NotFound from "./views/NotFound"
import { useLocation } from "react-router-dom";
import Detail from "./views/Detail";
import axios from "axios"
axios.defaults.baseURL = "https://pokemon-pi1-production.up.railway.app/";
function App() {
  const location = useLocation();

  const renderNavBar = () => {
    if (location.pathname === '/create') {
      return null; // No se renderiza el NavBar en la ruta /create
    }
    return <NavBar />;
  };
  return (
    <div>
      {renderNavBar()}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Cards" element={<CardsPokemon/>}/>
        <Route path="/create" element={<CreatePokemon/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
