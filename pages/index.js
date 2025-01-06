// import node module libraries
import { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutMe } from "sub-components";
import Contact from "./contact";
// import widget/custom components
import { CourseSlider, HeroHeaderDefault } from "widgets";

const Home = () => {
  useEffect(() => {
    document.body.className = "bg-light";
  });
  return (
    <Fragment>
      {/*  Page Content  */}
      <HeroHeaderDefault
        title="Hi, I'm Abdussamet Karadeniz"
        subTitle="Full Stack Developer"
        description="I'm a software engineer and I'm passionate about building things with code."
      />

      <AboutMe />

      <section className="pb-lg-3 pt-lg-3">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Most Popular</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <CourseSlider popular={true} />
          </div>
        </Container>
      </section>

      <Contact />
    </Fragment>
  );
};

export default Home;
