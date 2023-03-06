const Contact = () => {
    return ( 
        <div class="Contact-cont" id="contact">
            <span><h1>Contact Us</h1></span>
            <input type="text" placeholder="Name:"/>
            <input type="text" placeholder="Contact:"/>
            <input type="text" placeholder="Email:"/>
            {/* <input type="textarea"  placeholder="Send us a message"/> */}
            <textarea name="" id="" placeholder="Send us a message"></textarea>
            <button>Submit</button>

            {/* social icons */}
           <div class="icons-cont">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
           </div>
        </div>
     );
}
 
export default Contact;