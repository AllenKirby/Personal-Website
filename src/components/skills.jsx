const Skills = () => {
    return(
        <section id="skills" className="h-screen flex flex-col items-center justify-center">
            <article className="w-full h-auto my-14 text-center">
                <p className="md:text-5xl text-4xl font-poppins font-medium text-blue-950 transition-all duration-300">Skills</p>
                <p className="md:text-2xl text-xl font-poppins mx-8 font-light text-blue-950 transition-all duration-300">Proficient in HTML, Java, and C#, continually enhancing and expanding expertise in these languages to achieve mastery.</p>
            </article>
            <figure className="w-auto h-auto flex flex-wrap items-center justify-center">
                <div className="w-auto h-auto text-center m-5 ">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-html bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className=" md:xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">HTML</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-css bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">CSS</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-js bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Javascript</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-react bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">React</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-tailwind bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Tailwind</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-git bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Git</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-java bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Java</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-python bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Python</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-firebase bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">Firebase</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-sql bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">SQL</p>
                </div>
                <div className="w-auto h-auto text-center m-5">
                    <div className="md:w-24 md:h-24 w-16 h-16 m-3 bg-csharp bg-cover cursor-pointer transition-all duration-300"></div>
                    <p className="md:text-xl text-lg font-poppins p-3 font-medium text-blue-950 transition-all duration-300">C#</p>
                </div>
            </figure>
        </section>
    )
}
export default Skills