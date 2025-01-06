// import node module libraries
import { Fragment } from 'react';
import Link from 'next/link';
import { Image, Form } from 'react-bootstrap';

// import widget/custom components
import { RatingProgressBar, Ratings } from 'widgets';

// import data files
import { Reviews } from 'data/courses/CourseIndexData';

const ReviewsTab = () => {
	return (
		<Fragment>
			<div className="mb-3">
				<h3 className="mb-4">How students rated this courses</h3>
				<RatingProgressBar
					totalFiveStart={24}
					totalFourStart={16}
					totalThreeStart={5}
					totalTwoStart={2}
					totalOneStart={3}
				/>
			</div>
			{/* hr */}
			<hr className="my-5" />
			<div className="mb-3">
				<div className="d-lg-flex align-items-center justify-content-between mb-5">
					{/* Reviews */}
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Reviews</h3>
					</div>
					<div>
						{/* Form */}
						<Form className="form-inline">
							<Form.Group
								className="d-flex align-items-center me-2"
								controlId="formBasicEmail"
							>
								<span className="position-absolute ps-3">
									<i className="fe fe-search"></i>
								</span>
								<Form.Control
									type="search"
									placeholder="Search Review"
									className=" ps-6"
								/>
							</Form.Group>
						</Form>
					</div>
				</div>
				{/* Rating */}
				{Reviews.map((item, index) => (
					<div className="d-flex border-bottom pb-4 mb-4" key={index}>
						<Image
							src={item.image}
							alt=""
							className="rounded-circle avatar-lg"
						/>
						<div className=" ms-3">
							<h4 className="mb-1">
								{item.student}
								<span className="ms-1 fs-6 text-muted">{item.postedon}</span>
							</h4>
							<div className="fs-6 mb-2 text-warning">
								<Ratings rating={item.rating} />
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: item.review
								}}
							/>
							<div className="d-lg-flex">
								<p className="mb-0">Was this review helpful?</p>
								<Link href="#" className="btn btn-xs btn-primary ms-lg-3">
									Yes
								</Link>
								<Link href="#" className="btn btn-xs btn-outline-secondary ms-1">
									No
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</Fragment>
	);
};
export default ReviewsTab;
