// import node module libraries
import { Fragment } from 'react';

// import widget/custom components
import { HeroFormRight, LogosTopHeading, GeeksSEO, CTA2Buttons } from 'widgets';

// import sub components
import { LeadTestimonialSection, FeaturesWithBullets, CourseDescriptionSection, FAQsection, YourInstructor, } from 'sub-components';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

// import required data files
import LogoList2 from 'data/clientlogos/LogoList2';

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';

const CourseLead = () => {
	return (
		<Fragment>

			{/* Geeks SEO settings  */}
			<GeeksSEO title="Course Lead | Geeks Nextjs Template" />

			{/* Default Navbar */}
			<NavbarDefault />

			<main>
				{/* Hero section with right form */}
				<HeroFormRight
					title='Become a Vanilla JavaScript Developer'
					description='In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.'
					hours={4}
					videos={12}
					enrolled={10234}
					buttonText='Watch Preview'
					buttonLink='#'
				/>

				{/* Feature section with bullet  */}
				<FeaturesWithBullets />

				{/* Course description section  */}
				<CourseDescriptionSection />

				{/* Your instructor section */}
				<YourInstructor />

				{/*  Logo section */}
				<LogosTopHeading
					title="Trusted by top-tier product companies"
					logos={LogoList2}
				/>

				{/* Testimonial slider section */}
				<LeadTestimonialSection />

				{/*  FAQs section */}
				<FAQsection />

				{/*  CTA section */}
				<CTA2Buttons
					title="Join more than 1 million learners worldwide"
					description="Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier."
					btntext1="Start Learning for Free"
					btnlink1="/authentication/sign-up"
					btntext2="Geeks for Business"
					btnlink2="/authentication/sign-up"
				/>
			</main>

			{/* Footer section */}
			<FooterWithLinks goToTop />
		</Fragment>
	);
};

CourseLead.Layout = BlankLayout;

export default CourseLead;
