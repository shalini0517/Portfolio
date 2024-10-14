import React from 'react'
import { useSpring, animated } from 'react-spring'
import './About.css'

export default function About() {
    const animation_about = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
    });

    return (
        <section id="about" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <animated.h1 className="sm:text-4xl text-3xl mb-4 font-medium" style={animation_about}>
                    About Me
                </animated.h1>
                <animated.p className="mb-8 leading-relaxed" style={animation_about}>
                    I am a passionate software developer with experience in various programming languages and frameworks.
                    I love problem-solving and enjoy working on projects that challenge me and help me grow my skills.
                </animated.p>
                <animated.p className="mb-8 leading-relaxed" style={animation_about}>
                    In my free time, I enjoy contributing to open-source projects and learning about new technologies.I am fluent in English and Hindi, which allows me to communicate effectively in diverse teams and work environments.
                </animated.p>

                <animated.div style={animation_about} className="education-section mx-10 bg-gray-800">
                    <h1 className="education-title">Education</h1>
                    <p className="education-text">
                        I have completed my Bachelors in Computer Science and Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya.
                    </p>
                    <p className="education-text">
                        During my studies, I have gained a solid foundation in computer science topics such as data structures, algorithms, and software engineering. I have also developed strong problem-solving skills and the ability to work in team environments.
                    </p>
                    <p className="education-text">
                        In addition to my formal education, I have taken several online courses to further my skills, including courses on Ruby, Ruby on Rails, and MYSQL.
                    </p>
                    <p className="education-text">I am currently pursuing my Master's in Computer Science and Engineering from Rajiv Gandhi Proudyogiki Vishwavidyalaya.</p>
                </animated.div>
            </div>
        </section>
    );
}