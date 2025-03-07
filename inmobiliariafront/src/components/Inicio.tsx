import { Card, CardBody, CardTitle, CardText, Button, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Inicio = () => {
  return (
    <Container className="mt-5">
      {/* Título de bienvenida */}
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Bienvenido a Inmobiliaria</h1>
          <p className="text-center text-muted">
            Tu solución confiable para encontrar la propiedad de tus sueños.
          </p>
        </Col>
      </Row>

      {/* Tarjetas informativas */}
      <Row>
        <Col md="4" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Propiedades en Venta</CardTitle>
              <CardText>
                Explora nuestra amplia selección de propiedades en venta en las mejores ubicaciones.
              </CardText>
              <Button color="primary">Ver más</Button>
            </CardBody>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Propiedades en Alquiler</CardTitle>
              <CardText>
                Encuentra el lugar perfecto para vivir con nuestras opciones de alquiler.
              </CardText>
              <Button color="primary">Ver más</Button>
            </CardBody>
          </Card>
        </Col>

        <Col md="4" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Asesoría Personalizada</CardTitle>
              <CardText>
                Nuestros expertos están listos para ayudarte a encontrar la propiedad ideal.
              </CardText>
              <Button color="primary">Contactar</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Sección adicional */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">¿Por qué elegirnos?</h2>
          <p className="text-center text-muted">
            Ofrecemos un servicio personalizado, transparente y confiable para que tu experiencia sea
            inolvidable.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;