import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { GeeksSEO } from "widgets";
import { FeaturesList, AboutMe } from "sub-components";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import Footer from "layouts/marketing/footers/Footer";
import BlankLayout from "layouts/marketing/BlankLayout";
import SectionHeading from "sub-components/about/SectionHeading";
const About = () => {
  const sections = [
    {
      title: "Something New",
      description: `In the software development process, 
	  I possess in-depth knowledge in database design and 
	  system integrations. I specialize in developing efficient 
	  and scalable APIs using technologies like MongoDB and Node.js. 
	  Furthermore, I conduct detailed testing processes using NUnit to enhance 
	  software quality, always adhering to best practice standards.`,
      image: "/images/career/employee-pic.jpg",
      imagePosition: "left",
    },
    {
      title: "Something Different",
      description: `Keeping up with the continuously changing trends in the technology world and updating myself and my projects accordingly is of great importance to me. Therefore, in my spare time, I research the latest developments and share my findings on my YouTube channel. By producing educational content on technology and software development, I strive to continually improve myself and contribute to the community.`,
      image: "/images/career/employee-pic.jpg",
      imagePosition: "right",
    },
    {
      title: "Something Special",
      description:
        "Personal care and health are top priorities for me. I regularly engage in physical activities such as going to the gym, running, and swimming to keep my energy levels high. These activities help maintain both my physical and mental health, allowing me to escape the stresses of daily life. Additionally, music is an indispensable passion of mine; I relax, draw inspiration, and enhance my creativity by listening to various genres of music. Each new day is an opportunity to rejuvenate myself by maintaining these habits.",
      image: "/images/career/employee-pic.jpg",
      imagePosition: "left",
    },
    {
      title: "Something More",
      description:
        "Every new project is an opportunity for learning and a chance to make a positive impact in the world of technology. I will continue to innovate, prioritize user experience, develop creative solutions, and push the boundaries of technology.",
      image: "/images/career/employee-pic.jpg",
      imagePosition: "right",
    },
  ];

  return (
    <Fragment>
      <GeeksSEO title="About me | Abdussamet Karadeniz" />
      <NavbarDefault />
      <main>
        <section className="py-10 bg-white">
          <Container>
            <AboutMe />
            {sections.map((section, index) => (
              <SectionHeading
                key={index}
                title={section.title}
                description={section.description}
                image={section.image}
                imagePosition={section.imagePosition}
              />
            ))}
          </Container>
        </section>
      </main>
      <Footer goToTop={true} />
    </Fragment>
  );
};

About.Layout = BlankLayout;

export default About;
