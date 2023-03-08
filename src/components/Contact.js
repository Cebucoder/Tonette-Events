import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Shopaddress from "./Shoploc";

const Contact = () => {

    const form = useRef();
    let success = document.getElementById("success");
    // let error = document.getElementById("error");

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2cednt4', 'template_dlhcclr', form.current, 'anloU0pCTeppqV9lu')
        .then((result) => {
            console.log(result.text);
           
                alert("Message successfully sent");
                document.location.reload();

             
        }, (error) => {
            console.log(error.text);
            alert("Message fail to sent");
            document.location.reload();

        });
    };



    return ( 
        <div class="Contact-cont" id="contact">
            <form ref={form} onSubmit={sendEmail}>
            <span><h1>Contact Us</h1></span>
            <input type="text" name="user_name" placeholder="Name:" required/>
            <input type="text"  name ="user_number" placeholder="Contact:"  required/>
            <input type="email" name="user_email" placeholder="Email:" required/>
            {/* <input type="textarea"  placeholder="Send us a message"/> */}
            <textarea name="message" id="" placeholder="Send us a message required"></textarea>
            <button type="submit" value="Send">Submit</button>
            </form>
            {/* ------------------- */}

            {/* social icons */}
           <div class="icons-cont">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
           </div>

           {/* Success message */}
           <div class="success" id='success'>
            Message successfully sent
           </div>

           {/* error message */}
           <div class="error" id='error'>
            Message fail to sent
           </div>

           {/* Map */}
           <Shopaddress></Shopaddress>
        </div>
     );
}
 
export default Contact;