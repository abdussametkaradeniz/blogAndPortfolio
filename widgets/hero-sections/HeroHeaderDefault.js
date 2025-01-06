import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";

const HeroHeaderDefault = ({ title, subTitle, description }) => {
  return (
    <section className="bg-secondary">
      <Container>
        {/*  Hero Section  */}
        <Row className="align-items-center g-0">
          <Col xl={5} lg={6} md={12}>
            <div className="py-5 py-lg-0">
              <h1 className="text-white display-4 fw-bold">{title}</h1>
              <h2 className="text-white-25 display-10">{subTitle}</h2>
              <p className="text-white-50 mb-4 lead">{description}</p>
              {/* GitHub */}
              <Link href="#!" className="text-white me-5">
                <i className="fab fa-github fs-2"></i>
              </Link>
              {/* LinkedIn */}
              <Link href="#!" className="text-white me-5">
                <i className="fab fa-linkedin fs-2"></i>
              </Link>
              {/* instagram */}
              <Link href="#!" className="text-white me-5">
                <i className="fab fa-instagram fs-2"></i>
              </Link>
            </div>
          </Col>
          <Col xl={7} lg={6} md={12} className="text-lg-end text-center">
            <Image
              src="/images/hero/hero-img.png"
              alt="hero-img"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroHeaderDefault;
