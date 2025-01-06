// import node module libraries
import { Fragment } from 'react'

// import sub components
import ExploreMentors from 'sub-components/landings/mentor/ExploreMentors'
import FREETrialSession from 'sub-components/landings/mentor/FREETrialSession'
import EasySteps from 'sub-components/landings/mentor/EasySteps'
import TestimonialsByMentees from 'sub-components/landings/mentor/TestimonialsByMentees'

// import widget/custom components
import { CTAMentor, HeroTypedMentors, LogosTopBrands } from 'widgets'

// import required data files
import BrandLogoList from 'data/clientlogos/BrandLogoList'
import MentorListData from 'data/marketing/mentor/MentorListData'

// import layouts
import NavbarMentorPages from 'layouts/marketing/navbars/NavbarMentorPages';
import FooterDark from 'layouts/marketing/footers/FooterDark'

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';

const Mentor = () => {
    return (
        <Fragment>

            {/*   Landing Page Navbar */}
            <NavbarMentorPages center />

            {/*   section  */}
            <main>

                {/* Hero section */}
                <HeroTypedMentors
                    title='Learn a new skill, launch a project, land your dream career.'
                    typedBefore='1-on-1'
                    typedArray={['Javascript', 'Startup', 'React', 'Marketing', 'Branding']}
                    typedAfter='Mentorship'
                    tags={['Frontend', 'Devops', 'UI/UX designer', 'Data Science', 'Full Stack', 'Backend', 'Data Analyst']}
                    marqueeData={MentorListData}
                />

                {/* Logo section */}
                <LogosTopBrands
                    title="Learn from founders/operators of top brands."
                    logos={BrandLogoList} />

                {/* Explore Mentors by Category */}
                <ExploreMentors />

                {/* FREE trial session */}
                <FREETrialSession />

                {/* Easy Steps */}
                <EasySteps />

                {/* Testimonials By Mentees */}
                <TestimonialsByMentees />

                {/* Call to action  */}
                <CTAMentor />

            </main>

            {/*   Footer with center alignment */}
            <FooterDark goToTop />

        </Fragment>
    )
}

Mentor.Layout = BlankLayout;

export default Mentor