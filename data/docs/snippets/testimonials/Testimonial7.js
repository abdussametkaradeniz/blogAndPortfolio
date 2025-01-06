// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';

// import widget/custom components
import { SectionHeadingCenter, TestimonialColorCard } from 'widgets';

// import data files
import { TestimonialsList } from 'data/testimonials/TestimonialsList';

export const Testimonial7 = () => {
    const title = 'What our learners are saying';
    const subtitle = 'Testimonials';
    const description = `12+ million people are already learning on Geeks`;

    return (
        <section className="py-8 py-lg-18 bg-light">
            <Container>
                <SectionHeadingCenter
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
                <Row>
                    {TestimonialsList.slice(0, 2).map((item, index) => (
                        <Col md={6} sm={12} key={index}>
                            <TestimonialColorCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};


export const Testimonial7Code = `
// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';

// import widget/custom components
import { SectionHeadingCenter, TestimonialColorCard } from 'widgets';

// import data files
import { TestimonialsList } from 'data/testimonials/TestimonialsList';

export const Testimonial7Example = () => {
    const title = 'What our learners are saying';
    const subtitle = 'Testimonials';
    const description = '12+ million people are already learning on Geeks';

    return (
        <section className="py-8 py-lg-18 bg-light">
            <Container>
                <SectionHeadingCenter
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
                <Row>
                    {TestimonialsList.slice(0, 2).map((item, index) => (
                        <Col md={6} sm={12} key={index}>
                            <TestimonialColorCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}`.trim();

