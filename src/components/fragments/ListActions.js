import { Link } from "react-router-dom"

function ListActions(params) {
    const id = params.id
    return (
        <ul className="list-actions">
            <li><Link to={`./details/${id}`} className="list-actions-button-details">Szczegóły</Link></li>
            <li><Link to={`./edit/${id}`} className="list-actions-button-edit">Edytuj</Link></li>
            <li><Link to={`./delete/${id}`} className="list-actions-button-delete">Usuń</Link></li>
        </ul>
    )
}

export default ListActions