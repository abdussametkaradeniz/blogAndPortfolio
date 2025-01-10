// Section : Features
// Style : Three Columns Features Section

// import node module libraries
import { Col, Row, Container } from "react-bootstrap";
import { GraphUpArrow, Mortarboard, PeopleFill } from "react-bootstrap-icons";

// import widget/custom components
import { FeatureTopIconCard } from "widgets";

// import sub components
import SectionHeading from "./SectionHeading";

const Features3Columns = () => {
  const title = "Something Different";
  const description = `Keeping up with the continuously changing trends in the technology world and updating myself and my projects accordingly is of great importance to me. Therefore, in my spare time, I research the latest developments and share my findings on my YouTube channel. By producing educational content on technology and software development, I strive to continually improve myself and contribute to the community.`;

  return (
    <section className="py-lg-16 py-10 bg-white">
      <Container>
        <SectionHeading title={title} description={description} />
      </Container>
    </section>
  );
};

export default Features3Columns;
