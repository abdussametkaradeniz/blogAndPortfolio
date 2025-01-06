// import node module libraries
import { Fragment } from 'react';

// import sub components 
import { AcademyStats, MostPopularCourses, WhatCustomersSay } from 'sub-components';

// import widget/custom components
import { CTABecomeAnInstructor, HeroAcademy } from 'widgets';

// import your layout to override default layout 
import AcademyLayout from 'layouts/marketing/AcademyLayout';

const HomeAcademy = () => {
    return (
        <Fragment>

            {/* Hero Academy banner section */}
            <HeroAcademy
                bulletArray={['Most trusted education platform']}
                title='Grow your skills and advance career'
                description='Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.'
                buttonText='Join Free Now'
                buttonLink='#'
                youTubeVideoID='JRzWRZahOVU' />

            {/* Various acedamy statistics  */}
            <AcademyStats />

            {/* Most Popular Courses */}
            <MostPopularCourses />

            {/* Call to Action Become an instructor */}
            <CTABecomeAnInstructor
                title='Become an instructor today'
                description='Instructors from around the world teach millions of students on Geeks. We provide the tools and skills to teach what you love.'
                btntext='Start Teaching Today'
                btnlink='#'
            />

            {/* What our customers say */}
            <WhatCustomersSay />

        </Fragment>
    )
}


HomeAcademy.Layout = AcademyLayout;

export default HomeAcademy