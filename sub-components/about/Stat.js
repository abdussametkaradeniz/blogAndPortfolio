// import node module libraries
import { Fragment } from "react";
import SectionHeading from "./SectionHeading";

const AboutMeSecondSection = () => {
  const title = "Something New";
  const description = `In the software development process, I possess in-depth knowledge in database design and system integrations. I specialize in developing efficient and scalable APIs using technologies like MongoDB and Node.js. Furthermore, I conduct detailed testing processes using NUnit to enhance software quality, always adhering to best practice standards.`;

  return (
    <Fragment>
      <SectionHeading title={title} description={description} />
    </Fragment>
  );
};

export default AboutMeSecondSection;
