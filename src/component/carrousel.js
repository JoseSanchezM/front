import Carousel from 'react-bootstrap/Carousel';
export default function Carrousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="img/imgk1.jpg"
                    className="d-block w-100" alt="Slide 1" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/imgk2.png"
                    className="d-block w-100" alt="Slide 1" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/imgk4.png"
                    className="d-block w-100" alt="Slide 1" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}