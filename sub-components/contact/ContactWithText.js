import React from "react";
import { Col, Row } from "react-bootstrap";
import { EnvelopeOpen } from "react-bootstrap-icons";
import ContactForm from "./ContactForm";

const ContactWithText = () => {
  return (
    <main>
      <section className="bg-white container-fluid mt-lg-10 mb-lg-10">
        <Row className="align-items-center">
          <Col lg={6} md={12} sm={12}>
            <div className="px-xl-20 px-md-8 px-4 py-8 py-lg-0">
              <div className="text-dark">
                <h1 className="display-4 fw-bold">Get In Touch.</h1>
                <p className="lead text-dark">
                  Fill in the form to the right to get in touch with me, and I
                  will reach out shortly.
                </p>
                <div className="mt-8">
                  <p className="fs-4">
                    <EnvelopeOpen size={16} className="text-primary me-2" />{" "}
                    comp.eng.abdussamet.karadeniz@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* right side form section with background color */}
          <Col
            lg={6}
            className="d-lg-flex align-items-center w-lg-50 position-fixed-lg bg-cover bg-light top-0 right-0"
          >
            <ContactForm />
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default ContactWithText;
