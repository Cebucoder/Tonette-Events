
const Navigation = () => {
    return ( 
        <div class="navbars">
            <div class="nav-logo">
                <img src="./logo.png" alt="" />
            </div>
            <div class="menu-icon" onClick="Opennav()">
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
const menu  = document.getElementById("open-navbar");
function Opennav ()  {

        
        menu.classList.toggle("show-menu");
 }


 
export default Navigation;
