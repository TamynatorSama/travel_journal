import "../style/nav.css"
import pngWorld from "../images/Fill213.png"

const Nav = ()=>{
    return(
        <nav>
            <img src={pngWorld} />
            <span>My Travel journal</span>
        </nav>
    );
} 

export default Nav