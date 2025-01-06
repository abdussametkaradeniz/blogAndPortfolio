// import node module libraries
import { Fragment } from 'react';

// import sub components
import { Features2Columns, RequestAccessTestimonialSection } from 'sub-components';

// import layouts
import NavbarLanding from 'layouts/marketing/navbars/NavbarLanding';
import FooterCenter from 'layouts/marketing/footers/FooterCenter';

// import widget/custom components
import { HeroFormCenter, LogosTopHeadingOffset, GeeksSEO, CTAEarlyAccess } from 'widgets';

// import required data files
import LogoList2 from 'data/clientlogos/LogoList2';

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';

const RequestAccess = () => {
	return (
		<Fragment>

			{/* Geeks SEO settings  */}
			<GeeksSEO title="Request Access | Geeks Nextjs Template" />

			{/* Landing Page Navbar */}
			<NavbarLanding />
			<main>
				{/* Hero section with center form */}
				<HeroFormCenter
					badgeText='<span class="fw-bold">Beta-v2.0.0 </span> - Just shipped version'
					title='Request Access for Product'
					description='Geeks is a customizable, Bootstrap based UI Kits and Templates for Developers.'
					promotionalText='Rated 5 Stars <span class="text-muted">by over</span> <span class="text-primary"> 100+ Users</span>'
				/>

				{/* Brand logo section */}
				<LogosTopHeadingOffset limit={4} offset={2} logos={LogoList2} />

				{/* Features : Out of the box */}
				<Features2Columns />

				{/* Testimonial slider section */}
				<RequestAccessTestimonialSection />

				{/* Hero section with left form */}
				<CTAEarlyAccess />
			</main>
			{/* Footer with center alignment */}
			<FooterCenter goToTop />
		</Fragment>
	);
};

RequestAccess.Layout = BlankLayout;

export default RequestAccess;
