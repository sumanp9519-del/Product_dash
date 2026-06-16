import { Link } from "react-router";

function Navbar(){

    return(
        <div>
            <ul className="navbar-container">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">products</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar