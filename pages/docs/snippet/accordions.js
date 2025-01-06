// import node module libraries
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { FlushTabContent, FlushTabContentCode } from 'data/docs/snippets/accordions/FlushTab';
import { ListGroupsCard, ListGroupsCardCode } from 'data/docs/snippets/cards/ListGroupsCard';

const AccordionsSnippets = () => {
    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Accordion"
                    description="Quickly get a project started with any of our examples of Bootstrap 5 Accordion Snippet."
                />

                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">FAQs</h2>
                        </div>

                        <Tab.Container defaultActiveKey="all">
                            <Card>
                                <Card.Header className="border-bottom-0 p-0 ">
                                    <Nav className="nav-lb-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                                                Design
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
                                                Code
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="all" className="pb-4 p-4">
                                            <FlushTabContent />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
                                            <HighlightCode code={FlushTabContentCode} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Tab.Container>
                    </Col>
                </Row>

                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">List Groups Card</h2>
                        </div>

                        <Tab.Container defaultActiveKey="all">
                            <Card>
                                <Card.Header className="border-bottom-0 p-0 ">
                                    <Nav className="nav-lb-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                                                Design
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
                                                Code
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="all" className="pb-4 p-4">
                                            <ListGroupsCard />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
                                            <HighlightCode code={ListGroupsCardCode} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Tab.Container>

                    </Col>
                </Row>
            </div>
        </DocsInnerLayout>
    )
}

export default AccordionsSnippets