// import node module libraries
import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutMe } from "sub-components";
import Contact from "./contact";
import { CourseSlider, HeroHeaderDefault } from "widgets";
import ContactWithText from "sub-components/contact/ContactWithText";
const Home = () => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    document.body.className = "bg-light";
    // API'den veri çekme işlemi
    fetch("/api/posts/get-popular-posts")
      .then((response) => response.json())
      .then((data) => setPopularPosts(data))
      .catch((error) => console.error("Error fetching popular posts:", error));
  }, []);

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
            <CourseSlider popular={true} items={popularPosts} />
          </div>
        </Container>
      </section>

      <ContactWithText />
    </Fragment>
  );
};

export default Home;
