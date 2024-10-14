import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Projects() {
    const animation_projects = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }
    });
  return (
    <animated.section id="skills" className="container mx-auto flex px-5 md:px-10 py-5 md:py-20 flex-col md:flex-row items-center" style={animation_projects}>
            <div className="lg:flex-grow md:w-full lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Projects
                </h1>
                <br></br>
                <animated.div style={animation_projects} className="education-section mx-2 md:mx-10 bg-gray-800 text-white">
                    <h2>Prodigy Finance</h2>
                    <ul className="list-disc list-inside">
                        <li>A comprehensive solution offering financial aid to students in the form of loans.</li>
                        <li>Developed using Ruby on Rails and React JS.</li>
                        <li>Implemented features such as loan application, repayment, and loan management.</li>
                        <li>Contributed to the development of an effective pricing strategy.</li>
                        <li>Acquired skills in cross-functional communication and collaboration, fostering team synergy.</li>
                        <li>Leveraged Growthbook, a leading tool for A/B testing, to conduct strategic experiments that propelled project development and fostered innovation.</li>
                    </ul>
                </animated.div>
                <br/>
                <animated.div style={animation_projects} className="education-section mx-2 md:mx-10 bg-gray-800 text-white">
                    <h2>Hi Doggy</h2>
                    <ul className="list-disc list-inside">
                        <li>Developed an innovative solution dedicated to providing a comprehensive range of services for pet care and wellness.</li>
                        <li>Effectively integrated and managed various third-party services, including Stripe, to streamline payment processing and handle webhook interactions efficiently.</li>
                        <li>Served as a key backend Ruby on Rails developer, responsible for building RESTful APIs and the administrative interface from scratch.</li>
                        <li>Made significant contributions to this project over a period of 1.5 years.</li>
                        <li>Implemented KYC (Know Your Customer) integration using Persona, enhancing user verification processes.</li>
                        <li>worked on Real-Time Applications for Chat and live notifications using Action Cable</li>
                    </ul>
                </animated.div>
                <br/>
                <animated.div style={animation_projects} className="education-section mx-2 md:mx-10 bg-gray-800 text-white">
                    <h2>BuyerProperty</h2>
                    <ul className="list-disc list-inside">
                        <li>This project primarily focuses on facilitating property sales through the assistance of brokers.</li>
                        <li>Primarily contributed to the frontend development, utilizing HTML, CSS, and JavaScript to create dynamic and user-friendly interfaces.</li>
                        <li>Developed and maintained the admin user interfaces, enhancing the management and oversight of the platform.</li>
                    </ul>
                </animated.div>
            </div>
    </animated.section>
  );
}
