// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version_02_03_00 = () => {

	const NewSass = [
		'/styles/theme/components/_transition.scss',
		'/styles/theme/vendor/range-slider-input/_range-slider-input.scss',
		'/styles/theme/vendor/react-select/_react-select.scss',
	];

	const NewMediaFiles = [
		'/public/images/mentor/*.*'
	];

	const NewReactFiles = [
		'/pages/marketing/landings/mentor.js',
		'/pages/marketing/mentor/list.js',
		'/pages/marketing/mentor/single.js',
		'/sub-components/landings/mentor/*.*',
		'/sub-components/mentor/*.*',
		'/widgets/clientlogos/LogosTopBrands.js',
		'/widgets/cards/MenteeTestimonialCard.js',
		'/widgets/cards/MentorCard.js',
		'/widgets/call-to-action/CTAMentor.js',
		'/widgets/cards/MentorSummaryCard.js',
		'/layouts/marketing/footers/FooterDark.js',
		'/layouts/marketing/navbars/NavbarMentorPages.js',
		'/routes/marketing/MentorFooterRoutes.js',
	]
	const UpdatedReactFiles = [
		'/layouts/DarkLightMode.js',
		'/sub-components/dashboard/ecommerce/checkout/steps/PaymentSelection.js',
		'/layouts/marketing/navbars/DocumentMenu.js',
		'/routes/dashboard/DashboardRoutes.js',
		'/routes/marketing/NavbarDefault.js',
	]
	const UpdatedReactFilesDefaultProps = [
		'/widgets/tags/*.*',
		'/widgets/clientlogos/*.*',
		'/widgets/form-select/FormSelect.js',
		'/widgets/tooltips/GKTippy.js',
		'/widgets/flat-pickr/FlatPickr.js',
		'/widgets/charts/ApexCharts.js',
		'/widgets/courses/CourseSlider.js',
		'/widgets/courses/CourseCard.js',
		'/widgets/testimonials/TestimonialsSlider.js',
		'/widgets/testimonials/TestimonialsSlider2.js',
		'/widgets/testimonials/TestimonialsSlider3.js',
		'/widgets/section-headings/SectionHeadingDarkCenter.js',
		'/widgets/section-headings/SectionHeadingLeft3.js',
		'/widgets/features/FeatureTopIconWithLink.js',
		'/widgets/stats/StatRightBadge.js',
		'/widgets/range-slider/RangeSlider.js',
		'/components/bootstrap/Avatar.js',
		'/layouts/marketing/navbars/NavbarDefault.js',
		'/layouts/marketing/navbars/NavbarLanding.js',
		'/layouts/marketing/navbars/mega-menu/NavbarMegaMenu.js',
		'/layouts/marketing/navbars/help-center/NavbarHelpCenter.js'
	]
	const UpdatedSass = [
		'/styles/theme/components/_card.scss',
		'/styles/theme/components/_button.scss',
		'/styles/theme/components/_footer.scss',
		'/styles/theme/components/_nav.scss',
		'/styles/theme/components/_navbar.scss',
		'/styles/theme/root/_darkmode.scss',
		'/styles/theme/_theme.scss',
		'/styles/theme/_utilities.scss',
		'/styles/theme/_variables.scss'
	]

	const NewDataFiles = [
		'/data/marketing/mentor/*.*',
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
										<code>v2.3.0</code> - July 25, 2024
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks NextJS Update</h4>
									<ul>
										<li>Added <code>react-select</code> package</li>
										<li>Added <code>react-hook-form</code> package</li>
										<li>Added <code>@hookform/resolvers</code> package</li>
										<li>Added <code>react-range-slider-input</code> package</li>
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
									<h4>New SCSS Files:</h4>
									<ul>
										{NewSass.map((item, index) => {
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


							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version_02_03_00;
