import CartWidget from "./CartWidget";
// import logo from "./logo.svg";
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* <img src={logo} alt="logo" className="logo"/> */}
        <h1 className="titulo"> Inmobiliaria Montevideo</h1>
      </div>
      <div className="link-container"> 
        <ul className="uls">
          <a href="#" className="link">Hogares Nuevos</a>
          <a href="#" className="link">Imagenes</a>
          <a href="#" className="link">Apartamentos</a>

          <CartWidget />
        </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
