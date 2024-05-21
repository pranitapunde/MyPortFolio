import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
//function for form reset
function handleSubmit(e) {
    setTimeout(() => {
        e.target.reset();
    }, 3000);
}

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        // Your Emailjs Service Id, template Id, and Public key

        const serviceID = "service_cbgzt09";
        const templateID = "template_sc9rxm7";
        const publicKey = "dSCmeMT0KrWC-49Ko";

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Pranita Punde",
            message: message,
        }


        // Send the email using emailjs

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log(`Email Sent Successfully!`, response);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error)=>{
                console.log(`Error Sending Email:`, error);
            });
    };

return (
    <div
    id='contact'
        name="contact"
        className="contact w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Contact
                </p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>

            <div className=" flex justify-center items-center">
                <form
                    onSubmit={sendEmail}
                    name="contact"
                    method="POST"
                    action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
                    className=" flex flex-col w-full md:w-1/2"
                >
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    />
                    <textarea
                        
                        placeholder="Enter your message"
                        rows="10"
                        required
                        // type="text"
                        name="message"
                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}
                        className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                    ></textarea>

                    <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Contact
