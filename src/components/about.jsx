import Lottie from 'react-lottie'
import Man from '../json/computerMan.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = ()=>{
    const options = {
        loop: true,
        autoplay: true,
        animationData: Man,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
      };

      useEffect(() => {

        AOS.init();

      }, [])

    return(
        <section id="about" className="h-screen flex flex-col md:flex-row items-center justify-center bg-blue-950">
            <figure className="w-2/3 h-3/4" data-aos="flip-left">
                <Lottie options={options} height="90%" width="90%" />
            </figure>
            <article className='md:w-2/4 h-auto w-3/4 my-14 mx-20' data-aos="flip-right">
                <p className='md:text-5xl text-3xl font-poppins text-right text-white my-3 transition-all duration-300'>Want to know more?</p>
                <p className='md:text-2xl text-xl font-poppins text-justify text-white indent-20 transition-all duration-300'>I am currently a 3rd-year student pursuing a Bachelor of Science in Computer Science at Laguna University. I am actively honing my skills to become a proficient front-end developer. I am passionate about crafting engaging and user-friendly interfaces, leveraging both my academic knowledge and practical experiences to excel in this dynamic field.</p>
            </article>
        </section>
    )
}
export default About