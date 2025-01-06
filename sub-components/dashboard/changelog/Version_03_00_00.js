// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_03_00_00 = () => {

	const NewMediaFiles = [
		'/public/images/docs/*.*',
		'/public/images/snippets/*.*'
	];
	const NewReactFiles = [
		'/layouts/docs/*.*',
		'/layouts/GoToTop.js',
		'/layouts/marketing/footers/FooterCenterLinks.js, FooterWithLanguageSelection.js',
		'/layouts/marketing/navbars/NavbarBoxCenterMenu.js',
		'/pages/docs/*.*',
		'/pages/api-demo.js',
		'/routes/docs/NavSidebar.js',
		'/sub-components/about/AboutGallery.js',
		'/sub-components/dashboard/ecommerce/cart/OrderSummary.js',
		'/widgets/call-to-action/CTABecomeAnInstructor.js, CTAFreeTrial.js, CTAStartLearning.js',
		`/widgets/cards/BlogCard.js, BlogCardFullWidth.js, CategoryCard.js, CourseDescriptionCard.js, CoursePathCard.js,
		InstructorCard.js, InstructorProfileSummaryCard.js, PricingCard.js, ProfileCard.js, ReviewCard.js,
		SimplePricingCard.js, StudentEnrolledCard.js, StudentInstructorInfoCard.js`,
		'/widgets/gallery/*.*',
		'/widgets/hero-sections/*.*',
		'/widgets/modal-popup/TestimonialModalPopup.js',
		'/widgets/ratings/RatingProgressBar.js',
		'/widgets/search/JobSearchBox.js',
		'/widgets/tables/GKPositionListTable.js',
		'/widgets/tabs/GKTabs.js',
		'/widgets/testimonials/TestimonialCard4.js, TestimonialCardWithLogo.js',
	]

	const NewDataFiles = [
		'/data/docs/*.*',
	]

	const UpdatedReactFiles = [
		'app.config.js',
		'/layouts/DarkLightMode.js',
		'/layouts/dashboard/navbars/DocumentMenu.js, NavbarVertical.js, NavbarCompact.js',
		'/layouts/dashboard/DashboardIndexTop.js, DashboardIndex.js',
		'/layouts/marketing/footers/*.*',
		'/layouts/marketing/AcademyLayout.js, DefaultLayout.js, LayoutFooterLinks.js, JobListingLayout.js, HelpCenterDefaultLayout.js, HelpCenterTransparentLayout.js',
		'/layouts/marketing/navbars/help-center/NavbarHelpCenter.js',
		'/layouts/marketing/navbars/mega-menu/NavbarMegaMenu.js',
		'/layouts/marketing/navbars/DocumentMenu.js, NavbarBrandOnly.js, NavbarDefault.js, NavbarJobPages.js, NavbarLanding.js, NavbarMentorPages.js',
		'/pages/_app.js',
		'/pages/blog/*.*',
		'/pages/index.js, about.js, contact.js',
		'/pages/dashboard/calendar.js, pricing.js, task-kanban.js',
		'/pages/dashboard/ecommerce/checkout.js, shopping-cart.js',
		'/pages/marketing/courses/course-checkout.js, course-path.js, course-single.js, course-single2.js',
		'/pages/marketing/instructor/StudentsGridCard.js',
		'/pages/marketing/jobs/company-list.js, job-listing.js',
		'/pages/marketing/landings/*.*',
		'/pages/marketing/mentor/*.*',
		'/pages/marketing/portfolio/single.js',
		'/pages/marketing/specialty/terms-and-conditions.js',
		'/pages/marketing/student/invoice-details.js, payment.js',
		'/routes/dashboard/DashboardRoutes.js',
		'/routes/marketing/NavbarDefault.js',
		'/store/appSlice.js',
		'/sub-components/index.js',
		'/sub-components/about/FeaturesList.js, TeamGridRoundImages.js',
		'/sub-components/career/career-list/*.*',
		'/sub-components/career/overview/Collage.js',
		'/sub-components/compare-plan/DeveloperGeeks.js',
		'/sub-components/courses/course-path-single/AuthorTab.js',
		'/sub-components/courses/course-single/ReviewsTab.js',
		'/sub-components/dashboard/calendar/AddEditEvent.js',
		'/sub-components/dashboard/ecommerce/checkout/OrderSummary.js',
		'/sub-components/dashboard/ecommerce/checkout/steps/PaymentSelection.js',
		'/sub-components/dashboard/ecommerce/ProductDetailsAccordion.js',
		'/sub-components/dashboard/projects/grid/ProjectCard.js',
		'/sub-components/dashboard/projects/single/files/FilesTable.js',
		'/sub-components/dashboard/projects/single/summary/ProjectProgress.js',
		'/sub-components/dashboard/task-kanban/KanbanColumn.js, KanbanTask.js',
		'/sub-components/dashboard/user/InstructorsGridCard.js, StudentsGridCard.js',
		'/sub-components/jobs/job-listing/JobFilters.js',
		'/sub-components/landings/course-lead/CourseDescriptionSection.js',
		'/sub-components/landings/eduction/LearnLatestSkills.js',
		'/sub-components/landings/landing-sass/CustomersTestimonials.js, SimplePricingPlans.js, HeroRightImage.js',
		'/sub-components/landings/mentor/ExploreMentors.js, TestimonialsByMentees.js',
		'/sub-components/landings/landing-courses/WorldClassInstructors.js',
		'/widgets/index.js',
		'/widgets/accordions/GKAccordionProgress.js',
		'/widgets/fatures/FeatureTopIconCard.js',
		'/widgets/form-select/FormSelect.js',
		'/widgets/highlight-code/HighlightCode.js',
		'/widgets/miscellaneous/LevelIcon.js',
		'/widgets/odometer/GKOdometer.js',
		'/widgets/page-headings/PageHeadingDescription.js',
		'/widgets/cards/GetEnrolledCourseCard.js,  MentorCard.js,  MentorSummaryCard.js',
	]

	const UpdatedReactFilesDefaultProps = [
		'/components/bootstrap/DotBadge.js',
		'/sub-components/courses/CourseSlider.js',
		'/layouts/marketing/footers/Footer.js',
		'/layouts/marketing/navbars/NavbarMentorPages.js',
	]
	const UpdatedSass = [
		'/styles/theme.scss',
		'/styles/theme/components/_docs.scss, _breadcrumb.scss',
		'/styles/theme/utilities/_icon-shape.scss',
	]

	const UpdatedDataFiles = [
		'/data/code/BadgesCode.js, BreadcrumbCode.js, CollapsesCode.js, ListgroupsCode.js, OffcanvasCode.js',
		'/data/code/forms/ChecksRadiosCode.js',
		'/data/courses/CoursePathData.js',
		'/data/marketing/compare-plans/DeveloperGeeksData.js',
		'/data/marketing/mentor/MentorsCategoriesData.js',
		'/data/marketing/landing-education/UpcomingWebinarsData.js',
		'/data/slider/AllCoursesData.js',
	]

	const MovedReactFiles = [
		'/pages/dashboard/forms/*.*  ->  /pages/docs/forms/*.*',
		'/pages/dashboard/components/*.*  ->  /pages/docs/components/*.*',
		'/pages/dashboard/changelog.js  ->  /pages/docs/getting-started/changelog.js',
		'/pages/dashboard/tables/*.* -> /pages/docs/tables',
		'/sub-components/about/JustifiedGallery.js -> /widgets/gallery/JustifiedGallery.js',
		'/sub-components/jobs/JobSearchBox.js  ->  /widgets/search/JobSearchBox.js',
		'/sub-components/pricing/PricingCard.js  ->  /widgets/cards/PricingCard.js',
		'/sub-components/courses/ProfileCard.js  ->  /widgets/cards/ProfileCard.js',
		'/sub-components/courses/course-path/CoursePathCard.js  ->  /widgets/cards/CoursePathCard.js',
		'/sub-components/blog/BlogCard.js  ->  /widgets/cards/BlogCard.js',
		'/sub-components/blog/BlogCardFullWidth.js  ->  /widgets/cards/BlogCardFullWidth.js',
		'/sub-components/landings/landing-sass/SimplePricingCard.js  ->  /widgets/cards/SimplePricingCard.js',
		'/sub-components/landings/landing-courses/InstructorCard.js  ->  /widgets/cards/InstructorCard.js',
		'/sub-components/landings/course-lead/CourseDescriptionCard.js  ->  /widgets/cards/CourseDescriptionCard.js',
		'/sub-components/landings/mentor/HeroTypedMentors.js  ->  /widgets/hero-sections/HeroTypedMentors.js',
		'/sub-components/landings/home-academy/HeroAcademy.js  ->  /widgets/hero-sections/HeroAcademy.js',
		'/sub-components/landings/course-lead/HeroFormRight.js  ->  /widgets/hero-sections/HeroFormRight.js',
		'/sub-components/landings/landing-sass/HeroGradient.js  ->  /widgets/hero-sections/HeroGradient.js',
		'/sub-components/landings/request-access/HeroFormCenter.js  ->  /widgets/hero-sections/HeroFormCenter.js',
		'/sub-components/landings/request-access/HeroFormLeft.js  ->  /widgets/call-to-action/CTAEarlyAccess.js (renamed)',
		'/sub-components/landings/landing-courses/HeroTyped.js  ->  /widgets/hero-sections/HeroTypedCourses.js (renamed)',
		'/sub-components/landings/education/EducationHeroRightImage.js ->  /widgets/hero-sections/HeroEducationRightImage.js (renamed)',
		'/widgets/home/HeroHeader.js  ->  /widgets/hero-sections/HeroHeaderDefault.js (renamed)',
		'/widgets/cards/MenteeTestimonialCard.js  ->  /widgets/testimonials/MenteeTestimonialCard.js',
	]
	const DeletedReactFiles = [
		'/layouts/marketing/BlogLayout.js',
		'/widgets/range-slider/RangeSlider.js',
		'/widgets/call-to-action/CTALightBG.js',
		'/widgets/call-to-action/CTADarkBG.js',
		'/sub-components/jobs/landing-job/FindYourDreamJob.js',
		'/sub-components/landings/education/FindRightCourse.js',
	]
	return (
		<Row>
			<Col xl={12} lg={12} md={12} sm={12} xs={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v3.0.0</code> - Nov 11, 2024
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks NextJS Update  [ <span className="text-danger">Breaking Update</span> ]</h4>
									<ul>
										<li>Added <code>@react-input/mask, @hello-pangea/dnd</code> packages</li>
										<li>Removed <code>nouislider-react, react-input-mask, react-beautiful-dnd</code> packages</li>
										<li>Added <code>auto</code> mode as an option with light and dark mode.</li>
										<li>Required packages are updated.</li>
										<li>Fixed a few bugs</li>
									</ul>
								</div>

								<div className="mb-3">
									<h4>New Components / Layout / Hook / React Files:</h4>
									<ul>
										{NewReactFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>


								<div className="mb-3">
									<h4>New Media Files:</h4>
									<ul>
										{NewMediaFiles.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>New Data Files:</h4>
									<ul>
										{NewDataFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated Components / Layout / Hook / React Files:</h4>
									<ul>
										{UpdatedReactFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
										<li style={{ listStyle: 'none' }}>
											Removed defaultProps from below components, because support for defaultProps will be removed from function components in a future major release.
										</li>
										{UpdatedReactFilesDefaultProps.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated SCSS Files:</h4>
									<ul>
										{UpdatedSass.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>


								<div className="mb-3">
									<h4>Updated Data Files:</h4>
									<ul>
										{UpdatedDataFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Moved Components / Layout / Hook / React Files:</h4>
									<ul>
										{MovedReactFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Deleted Components / Layout / Hook / React Files :</h4>
									<ul>
										{DeletedReactFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version_03_00_00;
