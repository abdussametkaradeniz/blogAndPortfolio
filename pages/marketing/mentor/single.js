// import node module libraries
import { Fragment } from 'react'
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap'

// import sub components
import { AboutMentor, TabMembershipPlan, TabSessions, MentorSingleHero, MentorSkills, WhatMenteesSay, SimilarMentors } from 'sub-components'

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark'

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';

const MentorSingle = () => {
    return (
        <Fragment>
            {/*   Landing Page Navbar */}
            <NavbarMentorPages />

            {/*   section  */}
            <main>

                <section className="py-xl-8 py-6">
                    <Container>
                        <Row className="gy-4">
                            <Col xl={8} xs={12}>
                                <div className="d-flex flex-column gap-4">

                                    {/* Mentor single hero section */}
                                    <MentorSingleHero />

                                    {/* About mentor section */}
                                    <AboutMentor />

                                    {/* Mentor skills section */}
                                    <MentorSkills />

                                    {/* Mentees Testimonials */}
                                    <WhatMenteesSay />

                                </div>
                            </Col>
                            <Col xl={4} xs={12} >
                                <Card>
                                    <Card.Body className="px-md-5 pt-2">
                                        <Tab.Container id="tab" defaultActiveKey="membership">
                                            <Nav as="ul" className="nav-lb-tab mb-4" >
                                                <Nav.Item as="li" className='ms-0'>
                                                    <Nav.Link eventKey="membership">Membership Plan</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="sessions">Sessions</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="membership">
                                                    <TabMembershipPlan />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sessions">
                                                    <TabSessions />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <SimilarMentors />

            </main>

            {/*   Footer with center alignment */}
            <FooterDark goToTop />

        </Fragment>
    )
}

MentorSingle.Layout = BlankLayout;

export default MentorSingle