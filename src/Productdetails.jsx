
import { useParams } from "react-router"
function Productdetails (){
    const value = useParams()
    return(
        <div>
            <h1>productdetails - {value.name}</h1>
        </div>
    )
}

export default Productdetails