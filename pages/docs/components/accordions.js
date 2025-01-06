// import node module libraries
import { Col, Row, Card, Accordion, Nav, Tab } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import react code data file
import { accordionLinks } from 'data/docs/SidebarContentLinks';
import {
	AccordionBasicCode,
	AccordionFlushCode
} from 'data/code/AccordionCode';

const Accordions = () => {
	return (
		<DocsInnerLayout links={accordionLinks} id="intro">
			<div className="docs-content mx-xxl-9" >

				<PageHeadingDescription
					title="Accordions"
					description="Build vertically collapsing accordions in combination with the Collapse component."
				/>

				<div id="accordion-example" ></div>
				<hr className="mb-5 mt-7" />

				{/*  basic  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Example</h3>
							<p>
								Click the accordions below to expand/collapse the accordion
								content.
							</p>
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
											{/* accordion started */}
											<Accordion defaultActiveKey="0">
												<Accordion.Item eventKey="0">
													<Accordion.Header>Accordion Item #1</Accordion.Header>
													<Accordion.Body>
														<strong>This is the accordion body of item 1.</strong>{' '}
														It is hidden by default, until the collapse plugin
														adds the appropriate classes that we use to style each
														element. These classes control the overall appearance,
														as well as the showing and hiding via CSS transitions.
														You can modify any of this with custom CSS or
														overriding our default variables. It&apos;s also worth
														noting that just about any HTML can go within the{' '}
														<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
														<code>&lt;Accordion.Body&gt;</code> though the
														transition does limit overflow.
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item eventKey="1">
													<Accordion.Header>Accordion Item #2</Accordion.Header>
													<Accordion.Body>
														<strong>This is the accordion body of item 2.</strong>{' '}
														It is hidden by default, until the collapse plugin
														adds the appropriate classes that we use to style each
														element. These classes control the overall appearance,
														as well as the showing and hiding via CSS transitions.
														You can modify any of this with custom CSS or
														overriding our default variables. It&apos;s also worth
														noting that just about any HTML can go within the{' '}
														<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
														<code>&lt;Accordion.Body&gt;</code> though the
														transition does limit overflow.
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item eventKey="2">
													<Accordion.Header>Accordion Item #3</Accordion.Header>
													<Accordion.Body>
														<strong>This is the accordion body of item 3.</strong>{' '}
														It is hidden by default, until the collapse plugin
														adds the appropriate classes that we use to style each
														element. These classes control the overall appearance,
														as well as the showing and hiding via CSS transitions.
														You can modify any of this with custom CSS or
														overriding our default variables. It&apos;s also worth
														noting that just about any HTML can go within the{' '}
														<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
														<code>&lt;Accordion.Body&gt;</code> though the
														transition does limit overflow.
													</Accordion.Body>
												</Accordion.Item>
											</Accordion>
											{/* end of accordion started */}
										</Tab.Pane>

										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={AccordionBasicCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of basic */}

				<div id="accordion-flush" ></div>
				<hr className="mb-5 mt-7" />

				{/*  basic  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Flush</h3>
							<p>
								Add <code>flush</code> to remove the default background-color,
								some borders, and some rounded corners to render accordions
								edge-to-edge with their parent container.
							</p>
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
											{/* accordion started */}
											<Accordion defaultActiveKey="0" flush>
												<Accordion.Item eventKey="0">
													<Accordion.Header>Accordion Item #1</Accordion.Header>
													<Accordion.Body>
														<strong>This is the accordion body of item 1.</strong>{' '}
														It is hidden by default, until the collapse plugin
														adds the appropriate classes that we use to style each
														element. These classes control the overall appearance,
														as well as the showing and hiding via CSS transitions.
														You can modify any of this with custom CSS or
														overriding our default variables. It&apos;s also worth
														noting that just about any HTML can go within the{' '}
														<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
														<code>&lt;Accordion.Body&gt;</code> though the
														transition does limit overflow.
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item eventKey="1">
													<Accordion.Header>Accordion Item #2</Accordion.Header>
													<Accordion.Body>
														<strong>This is the accordion body of item 2.</strong>{' '}
														It is hidden by default, until the collapse plugin
														adds the appropriate classes that we use to style each
														element. These classes control the overall appearance,
														as well as the showing and hiding via CSS transitions.
														You can modify any of this with custom CSS or
														overriding our default variables. It&apos;s also worth
														noting that just about any HTML can go within the{' '}
														<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
														<code>&lt;Accordion.Body&gt;</code> though the
														transition does limit overflow.
													</Accordion.Body>
												</Accordion.Item>
												<Accordion.Item eventKey="2">
													<Accordion.Header>Accordion Item #3</Accordion.Header>
													<Accordion.Body>
														<strong>This is the accordion body of item 3.</strong>{' '}
														It is hidden by default, until the collapse plugin
														adds the appropriate classes that we use to style each
														element. These classes control the overall appearance,
														as well as the showing and hiding via CSS transitions.
														You can modify any of this with custom CSS or
														overriding our default variables. It&apos;s also worth
														noting that just about any HTML can go within the{' '}
														<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
														<code>&lt;Accordion.Body&gt;</code> though the
														transition does limit overflow.
													</Accordion.Body>
												</Accordion.Item>
											</Accordion>
											{/* end of accordion started */}
										</Tab.Pane>

										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={AccordionFlushCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of basic */}
			</div>
		</DocsInnerLayout>
	);
};
export default Accordions;
