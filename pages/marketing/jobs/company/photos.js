// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKLightbox } from 'widgets';

// import sub components 
import { CompanyCommonHeaderTabs } from 'sub-components';

// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

// import your layout to override default layout 
import JobListingLayout from 'layouts/marketing/JobListingLayout';

const Photos = () => {
  const data = ComapniesListData[0]
  const images = [
    { image : '/images/job/jpg/job-gallery-img-1.jpg' },
    { image : '/images/job/jpg/job-gallery-img-2.jpg' },
    { image : '/images/job/jpg/job-gallery-img-3.jpg' },
    { image : '/images/job/jpg/job-gallery-img-4.jpg' },
    { image : '/images/job/jpg/job-gallery-img-5.jpg' },
    { image : '/images/job/jpg/job-gallery-img-6.jpg' },
    { image : '/images/job/jpg/job-gallery-img-7.jpg' },
    { image : '/images/job/jpg/job-gallery-img-8.jpg' }
  ]
  return (
    <CompanyCommonHeaderTabs data={data}>
      <Row className="mt-6">
        <Col md={12}>
          <h2 className="mb-4">Office Photos</h2>
        </Col>
        {images.map((item, index) => {
          return (
            <Col lg={3} md={4} xs={12} key={index}>
              <div className="mb-4">
                <GKLightbox image={item.image} />
              </div>
            </Col>
          )
        })}
      </Row>
    </CompanyCommonHeaderTabs>
  )
}

Photos.Layout = JobListingLayout;

export default Photos