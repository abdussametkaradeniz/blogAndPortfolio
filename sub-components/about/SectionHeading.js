import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const SectionHeading = ({ title, description, image, imagePosition }) => {
  return (
    <div className="mt-20">
      <Row className="align-items-center">
        <Col lg={6} md={12} sm={12}>
          <div>
            <h2 className="display-4 mb-3 fw-bold">{title}</h2>
            <p className="lead">{description}</p>
          </div>
        </Col>
        <Col lg={{ offset: 1, span: 5 }} md={12} sm={12} className="image-col">
          <div className="mt-6 mt-lg-0">
            <Image
              src={image}
              alt={""}
              className="img-fluid w-80 rounded-5"
              width={250}
              height={250}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SectionHeading;
