import { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () =>{
   const form = useRef()

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_984kthw', 'template_0ck3dtx', form.current, 'ZZ7Jo8PurJ9zKVWKn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()   
    };

   return(
        <section id="contact" className="h-screen flex flex-row items-center justify-center">
            <div className="m-10 p-5 w-2/5 h-auto bg-blue-950 rounded-2xl">
               <p className="text-3xl font-poppins font-medium text-center text-white">Contact Me</p>
               <form ref={form} onSubmit={sendEmail} className="p-5 w-full flex flex-col items-center justify-center">
                  <input type="text" placeholder="Fullname" name='user_name' required className="text-xl h-auto w-full p-2 my-3 rounded-lg font-poppins"/>
                  <input type="email" name="user_email" placeholder="Email" required className="text-xl h-auto w-full p-2 my-3 rounded-lg font-poppins"/>
                  <input type="text" name="subject" placeholder="Subject" required className="text-xl h-auto w-full p-2 my-3 rounded-lg font-poppins"/>
                  <textarea name="message" cols="30" rows="5" className="p-3 my-3 font-poppins w-full rounded-lg"></textarea>
                  <button type="submit" className="font-poppins text-xl text-white px-16 py-2 border-2 my-2 rounded-lg">Send</button>
               </form>
            </div>
        </section>
   )
}
export default Contact