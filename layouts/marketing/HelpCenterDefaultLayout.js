// import node module libraries
import { Fragment, useEffect } from 'react';
import FooterWithLinks from './footers/FooterWithLinks';
import NavbarHelpCenter from './navbars/help-center/NavbarHelpCenter';

const HelpCenterDefaultLayout = (props) => {
	useEffect(() => {
		document.body.className = 'bg-white';
	});
	return (
		<Fragment>
			<NavbarHelpCenter bg="white" />
			<main>
				{props.children}
			</main>
			<FooterWithLinks goToTop />
		</Fragment>
	);
};

export default HelpCenterDefaultLayout;
