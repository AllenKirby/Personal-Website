const home = () =>{
    return(
        <section id="home" className="h-screen flex items-center justify-center">
            <article className="w-auto h-auto flex items-center justify-start p-10">
                <div>
                    <figure className="w-full h-auto flex justify-center items-center p-10">
                        <div className="md:w-60 md:h-60 w-40 h-40 bg-gray-950 rounded-full bg-myself bg-cover transition-all duration-300"></div>  
                    </figure>
                    <div className="text-center">
                        <p className="md:text-5xl text-3xl font-normal text-blue-950 font-poppins transition-all duration-300">I am Allen Kirby V. Santileces</p>
                        <p className="md:text-3xl text-xl font-poppins mt-2 text-blue-600 transition-all duration-300">Front-End Developer</p>
                        <button className="text-xl bg-blue-950 font-poppins p-2 px-5 rounded-xl border-2 border-blue-950 text-white ease-in duration-300 hover:text-blue-950 hover:bg-white mt-5">Download CV</button>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default home