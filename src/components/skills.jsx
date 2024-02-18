import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

//images
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import javascript from '../assets/images/js.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import python from '../assets/images/python.png'
import firebase from '../assets/images/firebase.png'
import sql from '../assets/images/sql.png'
import csharp from '../assets/images/csharp.png'
import git from '../assets/images/git.png'

const Skills = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return(
        <section id="skills" className="h-auto flex flex-col items-center justify-center py-32">
            <article className="w-full h-auto text-center" data-aos="fade-down">
                <p className="md:text-5xl text-4xl font-poppins font-medium text-blue-950 transition-all duration-300 my-5" >Skills</p>
                <p className="md:text-2xl text-xl font-poppins mx-8 font-light text-blue-950 transition-all duration-300 my-5">Continually enhancing and expanding expertise in these languages to achieve mastery.</p>
            </article>
            <figure className="w-auto h-auto flex flex-wrap items-center justify-center" data-aos="zoom-in">
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${html})` }}></div>
                    <p className=" md:xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">HTML</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${css})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">CSS</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${javascript})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Javascript</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${react})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">React</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${tailwind})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Tailwind</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${git})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Git</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${python})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Python</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${firebase})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Firebase</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${sql})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">SQL</p>
                </div>
                <div className="w-auto h-auto text-center m-3">
                    <div className="md:w-20 md:h-20 w-14 h-14 m-3 bg-cover cursor-pointer transition-all duration-300" style={{ backgroundImage: `url(${csharp})` }}></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">C#</p>
                </div>
            </figure>
        </section>
    )
}
export default Skills