
import '../css/min-style.css';

const Navigation = () => {

    function Opennav() {
        let menu = document.getElementById("navbars");
        // alert('Sorry Daniel cant get the function for now medyo nakakalito pag sa react hehehe!,I need to explore pa');
        // menu = document.getElementById("open-navbar");
        // console.log(menu);
        menu.classList.toggle('show-menu');
        // menu.classList.toggle("nav-logo-show");
        // menu.classList.add("show-menu");
      }

    return ( 
        <div class="navbars" id='navbars'>
            <div class="nav-logo">
                <img src="./logo.png" alt="" />
            </div>
            <div class="menu-icon" onClick={Opennav}>
            <ion-icon name="menu-outline"></ion-icon>
            </div>
            <ul id="open-navbar">
                <li class="active"><a href="#top">Home</a></li>
                <li><a href="#packages">Packages</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
    
        </div>
     );
}

 
export default Navigation;
