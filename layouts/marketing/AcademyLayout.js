// import node module libraries
import { Fragment } from 'react';

// import layouts files
import NavbarMegaMenu from 'layouts/marketing/navbars/mega-menu/NavbarMegaMenu';
import FooterWithLanguageSelection from './footers/FooterWithLanguageSelection';

const AcademyLayout = (props) => {
    return (
        <Fragment>
            {/* Default Navbar */}
            <NavbarMegaMenu />
            <main>
                {props.children}
            </main>
            {/* Footer section */}
            <FooterWithLanguageSelection goToTop />
        </Fragment >
    )
}

export default AcademyLayout