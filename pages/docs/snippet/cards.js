// import node module libraries
import { Col, Row } from 'react-bootstrap';
import { Fragment } from 'react';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { CategoryCardTabContent, CategoryCardTabContentCode } from 'data/docs/snippets/cards/CategoryCard';
import { WebinarImageStyledCard, WebinarImageStyledCardCode } from 'data/docs/snippets/cards/WebinarImageStyledCard';
import { CardTopImage, CardTopImageCode } from 'data/docs/snippets/cards/CardTopImage';
import { CardIconWithHover, CardIconWithHoverCode } from 'data/docs/snippets/cards/CardIconWithHover';
import { CardThumbnailV2, CardThumbnailV2Code } from 'data/docs/snippets/cards/CardThumbnailV2';
import { Card2Column, Card2ColumnCode } from 'data/docs/snippets/cards/Card2Column';
import { CardWithIcon, CardWithIconCode } from 'data/docs/snippets/cards/CardWithIcon';
import { ListGroupsCard, ListGroupsCardCode } from 'data/docs/snippets/cards/ListGroupsCard';
import { ProfileCardSnippet, ProfileCardCode } from 'data/docs/snippets/cards/ProfileCard';
import { CardCourse, CardCourseCode } from 'data/docs/snippets/cards/CardCourse';
import { CardCourseHorizontal, CardCourseHorizontalCode } from 'data/docs/snippets/cards/CardCourseHorizontal';
import { CardCourseThumbnail, CardCourseThumbnailCode } from 'data/docs/snippets/cards/CardCourseThumbnail';
import { CardThumbnail, CardThumbnailCode } from 'data/docs/snippets/cards/CardThumbnail';
import { HorizontalCardWithImage, HorizontalCardWithImageCode } from 'data/docs/snippets/cards/HorizontalCardWithImage';

const CardsSnippets = () => {

    const SnippetSection = ({ item }) => {
        return (
            <Fragment>
                <div id={item.hrefID}></div>
                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">{item.title}</h2>
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
            hrefID: 'category',
            title: 'Category',
            tabContent: <CategoryCardTabContent />,
            codeContent: CategoryCardTabContentCode
        },
        {
            hrefID: 'card-image-styled-webinar',
            title: 'Card Image Styled Webinar',
            tabContent: <WebinarImageStyledCard />,
            codeContent: WebinarImageStyledCardCode
        },
        {
            hrefID: 'card-top-image',
            title: 'Card Top Image',
            tabContent: <CardTopImage />,
            codeContent: CardTopImageCode
        },
        {
            hrefID: 'card-icon-with-hover',
            title: 'Card icon with hover',
            tabContent: <CardIconWithHover />,
            codeContent: CardIconWithHoverCode
        },
        {
            hrefID: 'card-thumbnail-v2',
            title: 'Card Thumbnail V2',
            tabContent: <CardThumbnailV2 />,
            codeContent: CardThumbnailV2Code
        },
        {
            hrefID: 'card-2-column',
            title: 'Card 2 Column',
            tabContent: <Card2Column />,
            codeContent: Card2ColumnCode
        },
        {
            hrefID: 'card-with-icon',
            title: 'Card with Icon',
            tabContent: <CardWithIcon />,
            codeContent: CardWithIconCode
        },
        {
            hrefID: 'list-groups-card',
            title: 'List Groups Card',
            tabContent: <ListGroupsCard />,
            codeContent: ListGroupsCardCode
        },
        {
            hrefID: 'profile-card',
            title: 'Profile Card',
            tabContent: <ProfileCardSnippet />,
            codeContent: ProfileCardCode
        },
        {
            hrefID: 'course-pth-card',
            title: 'Course Path Card',
            tabContent: <CardCourse />,
            codeContent: CardCourseCode
        },
        {
            hrefID: 'card-course-horizontal',
            title: 'Card Course Horizontal',
            tabContent: <CardCourseHorizontal />,
            codeContent: CardCourseHorizontalCode
        },
        {
            hrefID: 'card-course-thumbnail',
            title: 'Card Course Thumbnail',
            tabContent: <CardCourseThumbnail />,
            codeContent: CardCourseThumbnailCode
        },
        {
            hrefID: 'card-thumbnail',
            title: 'Card Thumbnail',
            tabContent: <CardThumbnail />,
            codeContent: CardThumbnailCode
        },
        {
            hrefID: 'horizontal-card-with-image',
            title: 'Horizontal Card with Image',
            tabContent: <HorizontalCardWithImage />,
            codeContent: HorizontalCardWithImageCode
        }

    ]
    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Cards"
                    description="Geek's cards provide a flexible and extensible content container with multiple variants and options."
                />

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default CardsSnippets