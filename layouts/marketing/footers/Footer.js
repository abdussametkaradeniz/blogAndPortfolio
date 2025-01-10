import GoToTop from "layouts/GoToTop";
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";

const Footer = ({ bgColor = "bg-light", goToTop = false }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`footer ${bgColor}`}>
      <Container>
        <Row className="align-items-center g-0 border-top py-2">
          <Col md={6} sm={12} className="text-center text-md-start">
            <span>© {currentYear} Geeks. All Rights Reserved.</span>
          </Col>
          <Col md={6} sm={12}>
            <nav className="nav nav-footer justify-content-center justify-content-md-end">
              <Link href="#" className="text-secondary me-3">
                <Linkedin size={30} />
              </Link>
              <Link href="#" className="text-secondary me-3">
                <Github size={30} />
              </Link>
              <Link href="#" className="text-secondary me-3">
                <Instagram size={30} />
              </Link>
            </nav>
          </Col>
        </Row>
      </Container>
      {goToTop && <GoToTop />}
    </footer>
  );
};

// Typechecking With PropTypes
Footer.propTypes = {
  bgColor: PropTypes.string,
};

export default Footer;
