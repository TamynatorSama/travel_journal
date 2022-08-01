import Locpin from "../images/Fill219.png"

const Card = (props)=>{
    return(
        <div className="card--cont">
            <img className="big--img" src={props.items.image}/>
            <div className="content">
                <div className="country">
                    <img src={Locpin}/>
                    <span>{props.items.country}</span>
                    <span className="google--map">View on Google Maps</span>
                </div>
                <h1>{props.items.place}</h1>
                <p>{props.items.date}</p>
                <p className="description">{props.items.description}</p>
            </div>
        </div>
    );
}
export default Card