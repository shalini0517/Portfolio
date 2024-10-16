import React from 'react'
import './Home.css'
import { useSpring, animated } from 'react-spring'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const animation = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.05)' },
    config: { duration: 500 },
    reset: true,
    reverse: true,
    loop: { reverse: true, times: Infinity }
  });
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleProjectClick = () => {
    navigate('/projects');
  };

  const animation_about = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <animated.h1 className="sm:text-4xl text-3xl mb-4 font-medium" style={animation_about}>
            Hi, I'm Shalini.
            <animated.br className="hidden lg:inline-block" style={animation_about}/>I love to build amazing
            apps.
          </animated.h1>
          <animated.p className="mb-8 leading-relaxed" style={animation_about}>
            Full Stack Developer
          </animated.p>
          <div className="flex justify-center">
          <animated.button
            style={animation}
            onClick={handleContactClick}
            className="inline-flex bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Me
          </animated.button>
          <animated.button
            style={animation}
            onClick={handleProjectClick}
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover rounded text-lg">
            See My Past Work
        </animated.button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
                className="object-cover object-center rounded h-50 w-48"
                alt="hero"
                src="./profile.jpg"
            />
        </div>
      </div>
        <animated.div style={animation_about} className="animated-div mx-10 p-10" id="about">
        I'm Shalini Patel, a Full Stack Developer with a focus on Ruby on Rails and React.js. I've spent two years worked on various projects, gaining experience in Ruby on Rails. I've worked with databases like MySQL, SQL, PostgreSQL, and have some understanding of MongoDB.
        <br></br>
        <br></br>
        <p>I'm passionate about building efficient and scalable web applications that address real-world challenges. With a constant drive to learn, I&rsquo;m always exploring new technologies and striving to improve my skill set.</p>
        <br></br>
        <p>What I Do</p>
        <ul className="list-disc list-inside">
            <li>Web Development: I specialize in creating responsive, user-friendly web applications using React.js for dynamic frontends and Ruby on Rails for robust backends.</li>
            <li>Full-Stack Expertise: With a strong command of React.js and Ruby on Rails, I create seamless, end-to-end web solutions that integrate both frontend and backend efficiently.</li>
            <li>API Development: Proficient in building RESTful APIs with Ruby on Rails, ensuring smooth communication between frontend and backend services.</li>
            <li>Scalability & Performance: My focus is on writing clean, maintainable code that ensures optimal performance, making sure that applications can scale effortlessly.</li>
            <li>Open-Source Contributions: I enjoy giving back to the developer community by contributing to open-source projects and sharing knowledge with fellow developers.</li>
        </ul>
        <br></br>
        <p>Let&rsquo;s Connect </p>
        <p>I&rsquo;m excited about the potential to collaborate and take on new challenges. If you&rsquo;re interested in working together or just want to chat about technology, feel free to reach out!</p>
        <br></br>
        </animated.div>
    </section>
  )
}
