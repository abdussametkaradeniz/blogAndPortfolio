// import node module libraries
import { Row, Col, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { APIIntegrationLinks } from "data/docs/SidebarContentLinks";

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from "widgets";

export async function getServerSideProps() {
    // Fetch data from external API
    const response = await fetch('https://dummyjson.com/products/1');
    const data = await response.json();
    // Pass data to the page via props
    return { props: { data } }
}


const APIIntegration = ({ data }) => {

    const mockAPICode = `export async function getServerSideProps() {
    // Fetch data from external API
    const response = await fetch('https://dummyjson.com/products/1');
    const data = await response.json();
    // Pass data to the page via props
    return { props: { data } }
}

const APIIntegrationDemo = ({ data }) => {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default APIIntegrationDemo;
`;

    return (
        <DocsInnerLayout links={APIIntegrationLinks} id="intro">
            <div className="docs-content mx-xxl-9">

                <PageHeadingDescription
                    title="API Integration"
                    description="An API integration is the connection between two or more applications, via their APIs, that lets those systems exchange data. API integrations power processes throughout many high-performing businesses that keep data in sync and enhance productivity."
                />

                <hr className="mb-5 mt-7" />

                <Row className="docs-example mt-7">
                    <Col md={12} xs={12}>
                        <div id="api-code">
                            <h4 className="mb-3">
                                api-demo.js
                            </h4>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <HighlightCode className="py-3 ps-3" code={mockAPICode} />
                    </Col>
                </Row>

                <Row className="docs-example mt-7" id="colors">
                    <Col md={12} xs={12}>
                        <div id="result">
                            <h4 className="mb-3">
                                Final result @ <code>http://localhost:3000/api-demo</code> url.
                            </h4>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <Card className="p-5 my-3">
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </Card>
                    </Col>
                </Row>
            </div>
        </DocsInnerLayout>
    );
};

export default APIIntegration;
