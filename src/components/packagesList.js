import Satclient from "./EventList";
import Img1 from '../images/debut1.jpg';
import Img2 from '../images/debut2.jpg';
import Img3 from '../images/debut.jpg';
import Img4 from '../images/wed1.jpg';
import Img5 from '../images/wed2.jpg';
import Img6 from '../images/wed3.jpg';

const ImageList = () => {
    return ( 
        <div class="prev-event">
            <span><h1>Satisified Client's</h1></span>
            <div class="imageList">
                <Satclient image={Img1}></Satclient>
                <Satclient image={Img2}></Satclient>
                <Satclient image={Img3}></Satclient>
                <Satclient image={Img4}></Satclient>
                <Satclient image={Img5}></Satclient>
                <Satclient image={Img6}></Satclient>
                <Satclient image={Img1}></Satclient>
                <Satclient image={Img2}></Satclient>
                <Satclient image={Img3}></Satclient>
                <Satclient image={Img4}></Satclient>
                <Satclient image={Img5}></Satclient>
                <Satclient image={Img6}></Satclient>
            </div>
        </div>  
     );
}
 
export default ImageList;