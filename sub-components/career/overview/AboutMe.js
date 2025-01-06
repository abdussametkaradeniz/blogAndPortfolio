import { Col, Container, Image, Row } from "react-bootstrap";
import { SectionHeadingLeft3 } from "widgets";

const AboutMe = () => {
  const title = "About Me";
  const subtitle = "Who am I?";
  const description = `There is no easy way. There is only hard work practice and discipline!`;

  return (
    <section className="pt-lg-14 pb-lg-18 pb-8 bg-white">
      <Container>
        <Row>
          <Col xl={{ offset: 1, span: 10 }} xs={12}>
            <SectionHeadingLeft3
              title={title}
              description={description}
              subtitle={subtitle}
              className="display-4"
            />

            <div className="mt-8">
              <Row className="align-items-center">
                <Col lg={6} md={12} sm={12}>
                  <div>
                    <h4 className="fw-bold mb-5 lh-lg">
                      Hello, my name is Abdussamet Karadeniz. I have always
                      enjoyed solving intelligence questions. The day I realized
                      that this situation was similar to writing algorithms, my
                      adventure in software began. I have basic knowledge of
                      robotics (ROS) and mobile (dart, flutter). Besides these,
                      I can use python, java, C#. I actively use Nextjs,
                      Reactjs, mssql and .NET. I usually work on backend
                      developments. I am interested in bodybuilding. I like to
                      walk often, improve myself, watch TV series, anime and
                      travel. I believe in hard and disciplined work, not
                      intelligence. I live my day within a certain plan and
                      program because I think that success will come with
                      continuity and time.
                    </h4>
                    <h2 className="mb-1">Abdussamet Karadeniz</h2>
                    <p className="mb-0 fw-bold">Software Engineer</p>
                  </div>
                </Col>
                <Col
                  lg={{ offset: 1, span: 5 }}
                  md={12}
                  sm={12}
                  className="image-col"
                >
                  <div className="mt-6 mt-lg-0">
                    <Image
                      src="/images/career/employee-pic.jpg"
                      alt=""
                      className="img-fluid w-80 rounded-5"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
