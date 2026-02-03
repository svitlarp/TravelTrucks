import css from './App.module.css';
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import CamperCatalog from "./components/camper-catalog/CamperCatalog";
import CamperItem from "./components/camper-item/CamperItem";
import NotFound from "./components/not-found/NotFound";
import logo from "./assets/nav/Logo.png";


function App(){
  return(
    <div className={css.appContainer}>

      <nav className={css.nav}>
        <NavLink to='/'>
          <img src={logo} alt="TravelTrucks Logo" className={css.logoImg}/>
        </NavLink>
        <div className={css.navMenu}>
          <NavLink to='/' className={css.navLink}>Home</NavLink>
          <NavLink to='/campers' className={css.navLink}>Catalog</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={<CamperCatalog />} />
        <Route path="/capmers/:id" element={<CamperItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
