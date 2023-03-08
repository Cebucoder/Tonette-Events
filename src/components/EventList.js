import Img1 from '../images/debut1.jpg';

const Satclient = (details) => {
  return ( 
    // <div class="prev-event">
      // {/* <span><h1>Satisified Client's</h1></span> */}
      <div class="image-cont">
        <img src={details.image} alt="" />
        <div class="overlay-details">
          <a href={details.link}>{details.client}</a>
          <small>{details.date}</small>
        </div>
      </div>
    // </div>
   );
}
 
export default Satclient;