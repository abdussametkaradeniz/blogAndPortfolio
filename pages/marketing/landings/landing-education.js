// import node module libraries
import React, { Fragment, useEffect } from 'react'

// import sub components
import {
    ExploreSkillCourses,
    BuildingSkills,
    LearnLatestSkills,
    EducationFeaturesWithBullets,
    UpcomingWebinars
} from 'sub-components';

// import layouts
import NavbarBoxCenterMenu from 'layouts/marketing/navbars/NavbarBoxCenterMenu';
import FooterCenter from 'layouts/marketing/footers/FooterWithLinks';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

// import widget/custom components
import { CTAStartLearning, HeroEducationRightImage, LogosTopHeading3 } from 'widgets';

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';

const LandingEducation = () => {
    useEffect(() => {
        document.body.className = 'bg-white';
    });

    return (
        <Fragment>
            {/*   Landing Page Navbar */}
            <NavbarBoxCenterMenu />

            {/*   section  */}
            <main>

                {/*  learn today hero section */}
                <HeroEducationRightImage
                    headingPart1='Learn today’s most in-'
                    headingPart2='demand-skills'
                    description='Classes & Courses website template to start creating your stunning website. All templates are fully customizable.'
                    bulletArray={['No credit card required', 'Customer service 24/7', 'No setup fee', 'Cancel any time']}
                    buttonText='Explore Online Courses'
                    buttonLink='#'
                />

                {/*  trusted */}
                <LogosTopHeading3
                    title="TRUSTED BY OVER 12,500 GREAT TEAMS"
                    logos={LogoList2}
                    limit={5}
                />

                {/*  Explore skill courses */}
                <ExploreSkillCourses />

                {/*  Building strong foundational skills */}
                <BuildingSkills />

                {/*  Learn latest Skills */}
                <LearnLatestSkills />

                {/*  Features With Bullets */}
                <hr className="my-0 bg-transparent text-white" />
                <EducationFeaturesWithBullets />

                {/*  upcoming webinars */}
                <UpcomingWebinars />

                {/*  call to action  */}
                <CTAStartLearning
                    title='Let’s find the right course for you!'
                    subtitle='…and achieve their learning goals. With our expert tutors, your goals are closer than ever!'
                    btntext='Start learning'
                    btnlink='#'
                />

            </main>

            {/*   Footer with center alignment */}
            <FooterCenter goToTop />

        </Fragment>
    )
}

LandingEducation.Layout = BlankLayout;

export default LandingEducation