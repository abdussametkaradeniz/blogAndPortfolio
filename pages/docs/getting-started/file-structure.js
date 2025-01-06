// import node module libraries
import Link from "next/link";
import { Row, Col, ListGroup } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { fileStructureLinks } from "data/docs/SidebarContentLinks";
import { fileStructureData } from "data/docs/FileStructureData";
import { HighlightCode, PageHeadingDescription } from "widgets";

const FileStructure = () => {
    const JSConfig = `{"compilerOptions": 
    {
      "baseUrl": "."
    }
}`;

    const File = ({ file, index }) => (
        <ListGroup as="ul" variant="flush">
            <ListGroup.Item className={`px-0 ${index != 0 ? "border-top" : ""}`}>
                <Row>
                    <Col xs="auto">
                        <div>{file.icon}</div>
                    </Col>
                    <Col className="d-flex ms-n3">
                        <span className="me-4 text-dark fw-bold">{file.name}</span>
                        <p className="mb-0">{file.desc}</p>
                    </Col>
                </Row>
                {file.children && (
                    <ListGroup variant="flush" className="ps-3 mt-3">
                        {file.children.map((child) =>
                            child.name === "gulpfile.js" ? (
                                <ListGroup.Item className="px-0" key={child.id}>
                                    <Row>
                                        <Col xs="auto">
                                            <div>{child.icon}</div>
                                        </Col>
                                        <Col className="d-flex ms-n3">
                                            <span className="me-4 text-dark fw-bold">{child.name}</span>
                                            <p className="mb-0">
                                                Configuration file for Gulp library. It contains all tasks
                                                you want to perform with Gulp. Learn more about it from
                                                section or{" "}
                                                <Link href="/docs/working-with-gulp">
                                                    Working with Gulp
                                                </Link>
                                                <Link href="https://gulpjs.com/">
                                                    official Gulp documentation
                                                </Link>
                                            </p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ) : (
                                <File key={child.id} file={child} />
                            )
                        )}
                    </ListGroup>
                )}
            </ListGroup.Item>
        </ListGroup>
    );

    return (
        <DocsInnerLayout isOpen={false}>
            <div className="docs-content mx-xxl-9">

                <PageHeadingDescription
                    title="File Structure"
                    description="This section will show you how to keep your files organized. Our
                                theme file structure that looks like this."
                />

                <hr className="mb-5 mt-7" />


                <Row>
                    <Col md={12} xs={12}>
                        <div className="mb-8">
                            <h2 className="fw-semibold">Theme folder and file structure</h2>
                            <p>
                                Inside the zip-file you&apos;ll find the following directories and
                                files. The application is created using <code>npx create-next-app@latest</code> by seleting following options at the time of setup.

                            </p>
                            <pre>
                                What is your project named? <b>geeksnextjs</b><br />
                                Would you like to use TypeScript? <b>No</b><br />
                                Would you like to use ESLint? <b>Yes</b><br />
                                Would you like to use Tailwind CSS? <b>No</b><br />
                                Would you like to use `src/` directory? <b>No</b><br />
                                Would you like to use App Router? (recommended) <b>No</b><br />
                                Would you like to customize the default import alias (@/*)? <b>Yes</b><br />
                                What import alias would you like configured? ./*
                            </pre>
                            <p>Once installed, we have updated <code> jsconfig.json </code> file as shown below. For more options visit <Link href="https://code.visualstudio.com/docs/languages/jsconfig" target="_blank">VS Code Studio <i className="fe fe-external-link"></i></Link></p>
                            <HighlightCode code={JSConfig} />
                            <p>For more detailed Next.js application directories and files structure, visit <Link href="https://nextjs.org/docs/getting-started/project-structure" target="_blank">Next.js <i className="fe fe-external-link"></i></Link> site.</p>
                        </div>
                        <div>
                            <h4 className="mb-3">
                                Here is how the Geeks Next.js ( page router ) theme organizes its file
                                structure:
                            </h4>
                            {fileStructureData.map((file, index) => (
                                <File key={file.id} file={file} index={index} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </DocsInnerLayout>
    );
};

export default FileStructure;
