import { FaUsers } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import './style.css';

export default function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="img/logooo.png" alt="Logo" className="logo" />
              <p>Renueva tu estilo, Compra Ahora!</p>
            </div>
            <div className="col-md-4">
              <h4>Ubicación</h4>
              <p><i className="fas fa-map-marker-alt"></i> Av. Cascanueces, Santa Anita</p>
              <p><i className="fas fa-phone-alt"></i> +51 961201284</p>
              <p><i className="fas fa-envelope"></i> tec&trade@gmail.com</p>
            </div>
            <div className="col-md-4">
              <h4>Conocer más</h4>
              <button><AiTwotoneHome /> Inicio</button>
              <button><FaUsers /> Nosotros</button>
              <button><FaShoppingCart /> Compra</button>
              <button><FaShoppingBag /> Venta</button>
            </div>
          </div>
          <hr />
          <p className="text-center">Todos los derechos reservados &copy; 2023</p>
        </div>
      </footer>
    );
  }