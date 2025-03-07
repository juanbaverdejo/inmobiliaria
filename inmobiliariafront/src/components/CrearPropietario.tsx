import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Definimos la interfaz para el estado del propietario
interface Propietario {
  nombre: string;
  dni: string;
  telefono: string;
}

const CrearPropietario: React.FC = () => {
  // Estado para almacenar los datos del formulario
  const [propietario, setPropietario] = useState<Propietario>({
    nombre: "",
    dni: "",
    telefono: "",
  });

  // Estado para manejar mensajes de éxito o error
  const [mensaje, setMensaje] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPropietario({
      ...propietario,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Limpiar mensajes anteriores
    setMensaje("");
    setError("");

    try {
      // Enviar los datos a la API
      const response = await fetch("propietarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propietario),
      });

      if (response.ok) {
        // Si la respuesta es exitosa, mostrar mensaje de éxito
        setMensaje("Propietario creado exitosamente");
        // Limpiar el formulario
        setPropietario({
          nombre: "",
          dni: "",
          telefono: "",
        });
      } else {
        // Si hay un error en la respuesta, mostrar mensaje de error
        const data = await response.json();
        setError(data.message || "Error al crear el propietario");
      }
    } catch (error) {
      // Si hay un error en la conexión, mostrar mensaje de error
      setError("Error de conexión. Inténtelo de nuevo más tarde.");
      console.error("Error:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h2 className="text-center">Crear Propietario</h2>

          {/* Mostrar mensaje de éxito */}
          {mensaje && <Alert color="success">{mensaje}</Alert>}

          {/* Mostrar mensaje de error */}
          {error && <Alert color="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Campo para el nombre */}
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                value={propietario.nombre}
                onChange={handleChange}
                placeholder="Ingrese el nombre del propietario"
                required
              />
            </FormGroup>

            {/* Campo para el DNI */}
            <FormGroup>
              <Label for="dni">DNI</Label>
              <Input
                type="text"
                name="dni"
                id="dni"
                value={propietario.dni}
                onChange={handleChange}
                placeholder="Ingrese el DNI del propietario"
                required
              />
            </FormGroup>

            {/* Campo para el teléfono */}
            <FormGroup>
              <Label for="telefono">Teléfono</Label>
              <Input
                type="text"
                name="telefono"
                id="telefono"
                value={propietario.telefono}
                onChange={handleChange}
                placeholder="Ingrese el teléfono del propietario"
                required
              />
            </FormGroup>

            {/* Botón para enviar el formulario */}
            <Button color="primary" type="submit" block>
              Crear Propietario
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CrearPropietario;