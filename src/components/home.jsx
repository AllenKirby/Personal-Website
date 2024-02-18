import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () =>{
    useEffect(() => {

        AOS.init()

    }, []);
    return(
        <section id="home" className="h-screen flex items-center justify-center">
            <article className="w-auto h-auto flex items-center justify-start p-10" data-aos="fade-up">
                <div>
                    <figure className="w-full h-auto flex justify-center items-center p-10">
                        <div className="md:w-52 md:h-52 w-40 h-40 bg-gray-950 bg-myself bg-cover rounded-full transition-all duration-300"></div>  
                    </figure>
                    <div className="text-center">
                        <p className="md:text-4xl text-3xl font-normal text-blue-950 font-poppins transition-all duration-300">I am Allen Kirby V. Santileces</p>
                        <p className="md:text-2xl text-xl font-poppins mt-2 text-blue-600 transition-all duration-300">Front-End Developer</p>
                        <button className="text-lg bg-blue-950 font-poppins p-2 px-5 rounded-xl border-2 border-blue-950 text-white ease-in duration-300 hover:text-blue-950 hover:bg-white mt-5">Download CV</button>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Home