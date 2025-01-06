// import node module libraries
import { Fragment } from 'react'

// import sub components
import FilterMentorHero from 'sub-components/mentor/list/FilterMentorHero'
import ListOfMentors from 'sub-components/mentor/list/ListOfMentors'

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark'

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';

const MentorList = () => {
    return (
        <Fragment>

            {/*   Landing Page Navbar */}
            <NavbarMentorPages center />

            {/*   section  */}
            <main>

                {/* Mentor list hero section */}
                <FilterMentorHero />

                {/* List all mentors with summary */}
                <ListOfMentors />

            </main>

            {/*   Footer with center alignment */}
            <FooterDark goToTop />

        </Fragment>
    )
}

MentorList.Layout = BlankLayout;

export default MentorList