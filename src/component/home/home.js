import './style.css';
import Carrousel from '../carrousel';

export default function Home() {
    return (
        <>
            {/* <section id="carrusel">
                <div id="carouselExample" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExample" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExample" data-slide-to="1"></li>
                        <li data-target="#carouselExample" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="img/imgk1.jpg"
                                className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="img/imgk2.png"
                                className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="img/imgk3.png"
                                className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Siguiente</span>
                    </a>
                </div>
            </section> */}
            <Carrousel/>

            <section id="inicio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 section-text">
                            <h1>Emprendimiento</h1>
                            <p>En Tec & Trade, hemos estado innovando desde nuestro inicio en enero de 2023.
                                Nuestra misión es impulsar el comercio tecnológico y facilitar el acceso a productos de alta calidad.
                                Únete a nosotros y sé parte de nuestra visión. ¡Conócenos y sé parte de la revolución tecnológica!</p>
                            <a href="#" className="btn btn-primary">Conocer más</a>
                        </div>
                        <div className="col-md-6">
                            <img src="img/imgk2.png"
                                alt="Imagen de inicio" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="nosotros">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="img/imgus.png"
                                alt="Imagen de inicio" className="img-fluid" />
                        </div>
                        <div className="col-md-6 section-text">
                            <h1>Nosotros</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.</p>
                            <a href="#" className="btn btn-primary">Conocer más</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
