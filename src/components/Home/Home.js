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
            Hi, I'm Jerry.
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
                src="./newdp.jpeg"
            />
        </div>
      </div>
        <animated.div style={animation_about} className="animated-div mx-10 p-10" id="about">
        I'm Jerry, a Full Stack Developer with a focus on Ruby on Rails and React.js. I've spent two years worked on various projects, gaining experience in Ruby on Rails. I've worked with databases like MySQL, SQL, PostgreSQL, and have some understanding of MongoDB.
        <br></br>
        <br></br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae leo a dui rhoncus ultrices. Morbi dapibus porttitor mi, ac mattis odio egestas non. Quisque convallis, orci vitae vehicula pulvinar, nisl dui tempus nunc, nec sodales nisl ante sed augue. Integer mattis mattis velit, ac malesuada purus eleifend a. Vestibulum varius ex risus, non maximus erat viverra ut. Ut semper pulvinar purus. Maecenas mattis ante ac ante ullamcorper finibus. Duis a risus in leo ullamcorper commodo. Etiam eu tempus diam, id lacinia dolor. Nam a rutrum ipsum. Curabitur vestibulum lacus non risus bibendum dapibus. Sed lacus magna, commodo vitae laoreet vel, cursus vel elit. Mauris at consequat leo.Ut ullamcorper lacus ut orci condimentum condimentum. Maecenas ut faucibus velit. Vestibulum a quam quis dolor cursus tincidunt. Quisque ac nisi in sem gravida aliquam in imperdiet lectus. Vestibulum congue euismod aliquam. Vestibulum mollis finibus lacus in lacinia. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed scelerisque lorem id sapien tempus feugiat. Pellentesque eget tempor nulla. Aenean at iaculis libero. Donec dapibus tellus orci, et ullamcorper dui feugiat sit amet.
        </p>
        </animated.div>
    </section>
  )
}