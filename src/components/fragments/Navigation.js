import { Link, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../helpers/authHelper";

function Navigation(props) {
    const location = useLocation()
    const rootLocation = '/' + location.pathname.split('/')[1]

    function NavElement({ children, to }) {
        return <Link to={to} className={rootLocation === to ? 'active' : ''}>
            {children}
        </Link>
    }

    const loginLink = isAuthenticated() ?
        <Link onClick={props.handleLogout} to="/">Wyloguj się</Link> :
        <NavElement to="/login">Zaloguj się</NavElement>

    return (
        <nav>
            <ul>
                <li><NavElement to="/">Strona główna</NavElement></li>
                <li><NavElement to="/stores">Sklepy</NavElement></li>
                <li><NavElement to="/pricebooks">Książka cenowa</NavElement></li>
                <li><NavElement to="/products">Produkty</NavElement></li>
                <li>{loginLink}</li>
            </ul>
        </nav>
    );
}

export default Navigation