import { useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () =>{
   const form = useRef()

   useEffect(() => {

    AOS.init()

   }, [])

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_984kthw', 'template_b5wgiww', form.current, 'ZZ7Jo8PurJ9zKVWKn')
        .then((result) => {
            console.log(result.text);
            alert("Email Sent!")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

   return(
        <section id="contact" className="h-screen flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center justify-center md:w-1/2 md:h-full w-full h-auto p-10" data-aos="zoom-in-right">
                <figure className="h-auto w-auto text-center">
                    <div className="w-full flex justify-center items-center">
                        <div className="md:w-56 md:h-56 w-48 h-48 mx-3 bg-follow bg-cover transition-all duration-300"></div>
                    </div>
                    <p className="font-medium font-poppins text-blue-950 text-2xl m-5">Stay connected and get in touch with me on social media</p>
                    <div className="flex flex-wrap p-2 justify-center items-center">
                        <a href="https://www.facebook.com/allenkirby.santileces"><div className="md:w-14 md:h-14 w-12 h-12 mx-3 bg-fb bg-cover cursor-pointer transition-all duration-300"></div></a>
                        <a href="https://www.instagram.com/skypleyx/"><div className="md:w-14 md:h-14 w-12 h-12 mx-3 bg-ig bg-cover cursor-pointer transition-all duration-300"></div></a>
                        <a href="https://github.com/AllenKirby"><div className="md:w-14 md:h-14 w-12 h-12 mx-3 bg-github bg-cover cursor-pointer transition-all duration-300"></div></a>
                    </div>
                </figure>
            </div>
            <div className="flex items-center justify-center md:w-1/2 md:h-full w-full h-auto p-10" data-aos="zoom-in-left">
                <div className="p-5 w-4/5 h-auto bg-blue-950 rounded-2xl">
                    <p className="text-3xl font-poppins font-medium text-center text-white">Contact Me</p>
                    <form ref={form} onSubmit={sendEmail} className="p-5 w-full flex flex-col items-center justify-center">
                        <input type="text" placeholder="Fullname" name='user_name' required className="text-xl h-auto w-full p-2 my-3 rounded-lg font-poppins"/>
                        <input type="email" name="user_email" placeholder="Email" required className="text-xl h-auto w-full p-2 my-3 rounded-lg font-poppins"/>
                        <input type="text" name="subject" placeholder="Subject" required className="text-xl h-auto w-full p-2 my-3 rounded-lg font-poppins"/>
                        <textarea name="message" cols="30" rows="5" className="p-3 my-3 font-poppins w-full rounded-lg"></textarea>
                        <button type="submit" className="font-medium font-poppins text-xl text-white px-16 py-2 border-2 my-2 rounded-lg hover:text-blue-950 hover:bg-white transition-all duration-300">Send</button>
                    </form>
                </div>
            </div>
        </section>
   )
}
export default Contact