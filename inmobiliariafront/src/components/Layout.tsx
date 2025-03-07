import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Home, FileText, Users, Settings } from "lucide-react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNode } from "react";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ height: "100vh", width: "250px" }}>
      <h4 className="mb-4">Mi Aplicación</h4>
      <Nav vertical>
        <NavItem>
          <NavLink tag={Link} to="/" className="text-light d-flex align-items-center">
            <Home size={20} className="me-2" /> Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/documentos" className="text-light d-flex align-items-center">
            <FileText size={20} className="me-2" /> Documentos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/equipo" className="text-light d-flex align-items-center">
            <Users size={20} className="me-2" /> Equipo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/configuracion" className="text-light d-flex align-items-center">
            <Settings size={20} className="me-2" /> Configuración
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container fluid>
      <Row>
        <Col xs="auto" className="p-0">
          <Sidebar />
        </Col>
        <Col className="p-4">
          <Outlet /> {/* Aquí se renderizan las rutas hijas */}
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
