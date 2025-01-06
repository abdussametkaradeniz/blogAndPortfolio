// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { Testimonial1, Testimonial1Code } from 'data/docs/snippets/testimonials/Testimonial1';
import { Testimonial2, Testimonial2Code } from 'data/docs/snippets/testimonials/Testimonial2';
import { Testimonial3, Testimonial3Code } from 'data/docs/snippets/testimonials/Testimonial3';
import { Testimonial4, Testimonial4Code } from 'data/docs/snippets/testimonials/Testimonial4';
import { Testimonial5, Testimonial5Code } from 'data/docs/snippets/testimonials/Testimonial5';
import { Testimonial6, Testimonial6Code } from 'data/docs/snippets/testimonials/Testimonial6';
import { Testimonial7, Testimonial7Code } from 'data/docs/snippets/testimonials/Testimonial7';
import { Testimonial8, Testimonial8Code } from 'data/docs/snippets/testimonials/Testimonial8';
import { Testimonial9, Testimonial9Code } from 'data/docs/snippets/testimonials/Testimonial9';

const TestimonialsSnippets = () => {
    const SnippetSection = ({ item }) => {
        return (
            <Fragment>
                <div id={item.hrefID}></div>
                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">{item.title}</h2>
                            <p className='mb-0'>{item.description}</p>
                        </div>
                        <GKTabs
                            tabs={[
                                { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: item.tabContent },
                                { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={item.codeContent} /> }
                            ]}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    const SnippetSectionData = [
        {
            hrefID: 'testimonial-1',
            title: 'Testimonial #1',
            tabContent: <Testimonial1 />,
            codeContent: Testimonial1Code
        },
        {
            hrefID: 'testimonial-2',
            title: 'Testimonial #2',
            tabContent: <Testimonial2 />,
            codeContent: Testimonial2Code
        },
        {
            hrefID: 'testimonial-3',
            title: 'Testimonial #3',
            tabContent: <Testimonial3 />,
            codeContent: Testimonial3Code
        },
        {
            hrefID: 'testimonial-4',
            title: 'Testimonial #4',
            tabContent: <Testimonial4 />,
            codeContent: Testimonial4Code
        },
        {
            hrefID: 'testimonial-5',
            title: 'Testimonial #5',
            tabContent: <Testimonial5 />,
            codeContent: Testimonial5Code
        },
        {
            hrefID: 'testimonial-6',
            title: 'Testimonial #6',
            tabContent: <Testimonial6 />,
            codeContent: Testimonial6Code
        },
        {
            hrefID: 'testimonial-7',
            title: 'Testimonial #7',
            tabContent: <Testimonial7 />,
            codeContent: Testimonial7Code
        },
        {
            hrefID: 'testimonial-8',
            title: 'Testimonial #8',
            tabContent: <Testimonial8 />,
            codeContent: Testimonial8Code
        },
        {
            hrefID: 'testimonial-9',
            title: 'Testimonial #9',
            tabContent: <Testimonial9 />,
            codeContent: Testimonial9Code
        }
    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Testimonial"
                    description="Meet the Testimonial behind Geeks UI"
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default TestimonialsSnippets