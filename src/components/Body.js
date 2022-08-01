import Card from "../reusable/Card"
import "../style/body.css"
import Api from "../travelJournal.json"

const Body = ()=>{

    const display = Api.journal.map(elem=>{
        return(
            <Card
                items = {elem}
             />
        );
    })

    return(
        <main>
            {display}
        </main>
    );
}
export default Body;