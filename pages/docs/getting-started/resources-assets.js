// import node module libraries
import Link from "next/link";
import { Row, Col, Card, Table } from "react-bootstrap";

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";;

// import widget/custom components
import { PageHeadingDescription } from "widgets";

// import required data file
import { resourcesLinks } from "data/docs/SidebarContentLinks";
import {
    pluginResources,
    iconResources,
    imageResources,
} from "data/docs/ResourcesData";

const ResourcesAssets = () => {

    const ResourcesTable = ({ data }) => {
        return (
            <Card className="border shadow-none ">
                <div className="table-responsive">
                    <Table className="mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{ width: "30%" }}>Name of installed package</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="text-dark fw-semibold">{item.name}</td>
                                    <td>
                                        <Link href={item.link} target="_blank">
                                            {item.link} <i className="fe fe-external-link"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        );
    };

    return (
        <DocsInnerLayout links={resourcesLinks} id="intro">
            <div className="docs-content mx-xxl-9">

                <PageHeadingDescription
                    title="Resources & assets"
                    description="First, let us take this opportunity to thank all the creative
                                minds for their great products and plugins."
                />

                <div id="plugins"></div>
                <hr className="mb-5 mt-7" />


                <Row>
                    <Col md={12} xs={12}>
                        <div  >
                            <h2 className="fw-semibold">Plugins (libraries / packages)</h2>
                            <p className="mb-3">
                                The following dependencies are used with GeeksUI Next.js theme, which are required to run the template.
                            </p>
                            <Card>
                                <Card.Body>
                                    <ResourcesTable data={pluginResources} />
                                </Card.Body>
                            </Card>

                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <div id="icons"></div>
                        <hr className="mb-5 mt-7" />
                    </Col>
                    <Col md={12} xs={12}>
                        <div  >
                            <h2 className="fw-semibold">Icons</h2>
                            <p className="mb-3">All of the icons we use in GeeksUI Next.js</p>
                            <Card>
                                <Card.Body>
                                    <ResourcesTable data={iconResources} />
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <div id="images"></div>
                        <hr className="mb-5 mt-7" />
                    </Col>
                    <Col md={12} xs={12}>
                        <div  >
                            <h2 className="fw-semibold">Images</h2>
                            <p className="mb-3">
                                Images in GeeksUI Next.js come almost exclusively from below website
                                links.
                            </p>
                            <Card>
                                <Card.Body>
                                    <ResourcesTable data={imageResources} />
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={12} xs={12}>
                        <div id="figma-files"></div>
                        <hr className="mb-5 mt-7" />
                    </Col>
                    <Col md={12} xs={12}>
                        <div className="mb-8" >
                            <h2 className="fw-semibold">Figma Files</h2>
                            <p className="mb-3">We will provide Figma files upon request.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </DocsInnerLayout>
    );
};

export default ResourcesAssets;
