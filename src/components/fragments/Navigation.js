import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/stores">Sklepy</Link></li>
                <li><Link to="/pricebooks">Książka cenowa</Link></li>
                <li><Link to="/products">Produkty</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation