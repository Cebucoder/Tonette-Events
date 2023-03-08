import Tonette from '../images/tonette1.jpg';

const Profile = () => {
    return ( 
        <div class="About-us-cont" id="aboutus">
           <span><h1>About Us</h1></span>

           <div className="About-us-content">
            <div class="tonette-image">
                <img src={Tonette} alt="" />
            </div>
            <div class="tonette-sum">
                <h5>Tonette Solatorio</h5>
                <p>Antonio Solatorio or must known as Tonette Solatorio at the event industry,
                tonette was the owner of <a href="">Tonette Flower Shop</a> and <a href="">Tonette Floral Concept & Event's facebook page.</a>Tonette was a very affordable wedding planner and event stylist and also on the day coordinator. </p>
            </div>
           </div>

           <div className="tonette-details">
            <p>Tonette Floral Conecpt & Events, included in the Top  Wedding Coordinator Teams in the Cebu City, is comprised of a small team of passionate and driven individuals who, at the heart and core of their talent, had been giving their very best in everything they do.</p>

            <p> What started as a simple wedding coordination and planning blossomed into a full blown sustainable business. With the success of our very first wedding coordination, we then continually strive to give the best of what we can to our valued clients. </p>
            
            <p>We have been tested time and again with the changing demands of the brides but we still believe in being honest and practical by providing our clients with the service they deserve. With sheer determination, we have been coordinating weddings internationally and had captivated the attention of celebrities who say I Do and cherished their celebrations in private. Countless times, we have invited to take part of big productions and celebrations since we don’t limit our selves and our creativity to weddings. We also cater to other events like debuts, engagement sessions, proposals and birthdays, anniversaries as well corporate events.</p>

            
           </div>
        </div>
     );
}
 
export default Profile;