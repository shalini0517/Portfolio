// src/components/Contact.js

import React from "react";
import { useSpring, animated } from 'react-spring'

export default function Contact() {
    const animation_contact = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }
      })

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
    return Object.keys(data)
        .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
    })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
  return (
    <>
    <animated.h1  style={animation_contact} className="sm:text-4xl text-3xl mb-4 mt-16 ml-5 font-medium text-white">
       Let's connect and build something new! 
    </animated.h1>
    <animated.section id="contact" className="relative">
        <animated.div style={animation_contact} className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <br/>
            <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="./map.png"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs text-white">
                    ADDRESS
                </h2>
                <p className="mt-1 text-white">
                    Indore<br />
                    Madhya Pradesh
                </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs text-white">
                    EMAIL
                </h2>
                <a 
                    href="mailto:shalinipatel1702@gmail.com"
                    className="text-indigo-400 leading-relaxed hover:underline"
                    >
                    shalinipatel1702@gmail.com
                </a>
                </div>
            </div>
            </div>
            <form 
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 education-section mx-2 md:mx-10 bg-gray-800">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
            </h2>
            <p className="leading-relaxed mb-5 text-white">
            I'm available for work, and I'd love to hear about your project. Get in touch with me.
            </p>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div className="relative mb-4">
                <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
                required/>
            </div>
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
            </button>
            </form>
        </animated.div>
    </animated.section>
    </>
  );
}