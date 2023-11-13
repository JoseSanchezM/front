import './style.css';
export default function Header(){
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="img/logooo.png"
                        alt="Logo" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Iniciar Sesión</a>
                        </li>
                    </ul>
                </div>
                <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input type="text" className="form-control border-0" placeholder="Buscar"/>
                </div>                          
            </div>
        </nav>
    </header>
    );
}