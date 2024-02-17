import { useState, useEffect } from 'react';
import { Link} from 'react-scroll';
import { FaTimes } from  'react-icons/fa';
import { CiMenuBurger } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = ()=>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        AOS.init();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const nav = <>
        <nav className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-950 transition'>
            <ul className='text-center text-xl px-10 py-5 text-white'>
                <Link spy={true} smooth={true} to='home'>
                    <li className="font-poppins py-4 border-b border-blue-800 hover:border-blue-800 hover:rounded-2xl hover:bg-blue-900 hover:text-2xl cursor-pointer transition-all duration-300">Home</li>
                 </Link>
                <Link spy={true} smooth={true} to='about'>
                    <li className="font-poppins py-4 border-b border-blue-800 hover:border-blue-800 hover:rounded-2xl hover:bg-blue-900 hover:text-2xl cursor-pointer transition-all duration-300">About</li>
                </Link>
                <Link spy={true} smooth={true} to='skills'>
                    <li className="font-poppins py-4 border-b border-blue-800 hover:border-blue-800 hover:rounded-2xl hover:bg-blue-900 hover:text-2xl cursor-pointer transition-all duration-300">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to='projects'>
                    <li className="font-poppins py-4 border-b border-blue-800 hover:border-blue-800 hover:rounded-2xl hover:bg-blue-900 hover:text-2xl cursor-pointer transition-all duration-300">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to='contact'>
                    <li className="font-poppins py-4 border-b border-blue-800 hover:border-blue-800 hover:rounded-2xl hover:bg-blue-900 hover:text-2xl cursor-pointer transition-all duration-300">Contact</li>
                </Link>
            </ul>
        </nav>
    </>
    return(
        <header className={`fixed top-0 left-0 w-full h-auto flex justify-between z-50 lg:py-5 px-20 py-4 ${scrolling ? 'bg-blue-950' : ''}`}>
            <div className="flex items-center flex-1" data-aos="fade-right">
                <p className={`text-2xl font-semibold text-blue-950 font-poppins ${scrolling ? 'text-white' : ''}`}>Allen Kirby</p>
            </div>
            <nav className="lg:flex md:flex flex-1 lg: items-center justify-end hidden" data-aos="fade-left">
                <div className='flex-10'>
                    <ul className="flex gap-6 text-xl font-sans text-blue-950">
                        <Link spy={true} smooth={true} to='home'>
                            <li className={`font-poppins border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 cursor-pointer ${scrolling ? 'text-white' : ''}`}>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to='about'>
                            <li className={`font-poppins border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 cursor-pointer ${scrolling ? 'text-white' : ''}`}>About</li>
                        </Link>
                        <Link spy={true} smooth={true} to='skills'>
                            <li className={`font-poppins border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 cursor-pointer ${scrolling ? 'text-white' : ''}`}>Skills</li>
                        </Link>
                        <Link spy={true} smooth={true} to='projects'>
                            <li className={`font-poppins border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 cursor-pointer ${scrolling ? 'text-white' : ''}`}>Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to='contact'>
                            <li className={`font-poppins border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 cursor-pointer ${scrolling ? 'text-white' : ''}`}>Contact</li>
                        </Link>
                    </ul>
                </div>
            </nav>
            <div>
                {click && nav}
            </div>
            <button className='block md:hidden transition' onClick={handleClick}>
                {click ? < FaTimes/> : <CiMenuBurger/>}
            </button>
        </header>
    )
}
export default Navbar