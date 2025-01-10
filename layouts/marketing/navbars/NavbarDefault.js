import useMounted from "hooks/useMounted";
import NavDropdownMain from "layouts/marketing/navbars/NavDropdownMain";
import Link from "next/link";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import NavbarDefaultRoutes from "routes/marketing/NavbarDefault";
import DarkLightMode from "layouts/DarkLightMode";

const NavbarDefault = ({ login = false }) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const hasMounted = useMounted();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <Fragment>
      <Navbar
        onToggle={(collapsed) => setExpandedMenu(collapsed)}
        expanded={expandedMenu}
        expand="lg"
        className="navbar p-2 navbar-default py-2"
      >
        <Container fluid className="px-0 ps-2">
          {hasMounted ? (
            <div
              className={`navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap ${
                login ? (isDesktop || isLaptop ? "d-none" : "d-flex") : "d-none"
              }`}
            ></div>
          ) : null}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-bar top-bar mt-0"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              {NavbarDefaultRoutes.map((item, index) => {
                if (item.children === undefined) {
                  return (
                    <Nav.Link
                      key={index}
                      as={Link}
                      href={item.link}
                      style={{ marginRight: "10px" }}
                    >
                      {item.menuitem}
                    </Nav.Link>
                  );
                } else if (hasMounted) {
                  return (
                    <NavDropdownMain
                      item={item}
                      key={index}
                      onClick={(value) => setExpandedMenu(value)}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </Nav>
            <DarkLightMode />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

// Typechecking With PropTypes
NavbarDefault.propTypes = {
  login: PropTypes.bool,
};

export default NavbarDefault;
