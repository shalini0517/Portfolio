import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Skill.css'

export default function Skills() {
    const animation_skills = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }
    });

    return (
        <animated.section id="skills" className="container mx-auto flex px-5 md:px-10 py-5 md:py-20 flex-col md:flex-row items-center" style={animation_skills}>
            <div className="lg:flex-grow md:w-full lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Skills
                </h1>
                <p className="mb-8 leading-relaxed">
                    I have developed a strong skill set over the years, including:
                </p>
                <animated.div style={animation_skills} className="education-section mx-2 md:mx-10 bg-gray-800 text-white">
                    <h3>Languages</h3>
                    <ul className="list-disc list-inside">
                        <li>Proficiency in HTML, CSS, Tailwind CSS, JavaScript, Python, and C++.</li>
                        <li>Experience with front-end frameworks like React JS.</li>
                        <li>Experience with back-end development using Ruby on Rails.</li>
                        <li>Strong understanding of databases, including MySQL, PostgresSQL and MongoDB.</li>
                        <li>Experience with version control systems like Git.</li>
                        <li>Worked on Growthbook, an open-source platform that helps companies make data-driven product decisions using feature flags and A/B tests.</li>
                        <li>Strong problem-solving skills and ability to learn new technologies quickly.</li>
                        <li>Proficient in Machine Learning and experienced in using Data Science libraries such as Pandas, Matplotlib, and NumPy for data analysis and visualization.</li>
                    </ul>
                </animated.div>
                <br/>
                <animated.div style={animation_skills} className="education-section mx-2 md:mx-10 bg-gray-800 text-white">
                    <h3>Certification</h3>
                    <ul className="list-disc list-inside">
                        <li>Received Python Certification from Kaggle, demonstrating proficiency in data analysis and machine learning.</li>
                        <li>Achieved AWS Certified Cloud Practitioner certification, demonstrating foundational knowledge in AWS cloud architecture, security, and deployment.</li>
                    </ul>
                </animated.div>
                <br/>
                <animated.div style={animation_skills} className="language-icons">
                    <i className="fab fa-html5" style={{color:"black"}}></i>
                    <i className="fab fa-css3-alt" style={{color:"black"}}></i>
                    <i className="fab fa-js-square" style={{color:"black"}}></i>
                    <i className="fab fa-python" style={{color:"black"}}></i>
                    <i className="fab fa-cuttlefish" style={{color:"black"}}></i>
                    <i className="fab fa-react" style={{color:"black"}}></i>
                    <i className="fas fa-gem" style={{color:"black"}}></i>
                    <i className="fab fa-git" style={{color:"black"}}></i>
                    <i className="fab fa-aws" style={{color:"black"}}></i>
                    <i className="fas fa-database"style={{color:"black"}} ></i>
                <i className="fas fa-leaf" style={{color:"black"}}></i>
                </animated.div>
            </div>
        </animated.section>
    )
}