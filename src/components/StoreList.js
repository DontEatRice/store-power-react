import { Link } from "react-router-dom"

function StoreList() {
    return (
        <main>
            <h2>Lista sklepów</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Miejscowość</th>
                        <th>Ulica i numer</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Żabka</td>
                        <td>Warszaw</td>
                        <td>al. Jana Pawła 2 21</td>
                        <td>
                            <ul className="list-actions">
                                <li>
                                    <Link to="/stores/details/1" className="list-actions-button-details">Szczegóły</Link>
                                </li>
                                <li>
                                    <Link to="/stores/edit/1" className="list-actions-button-edit">Edytuj</Link>
                                </li>
                                <li>
                                    <Link to="/stores/delete/1" className="list-actions-button-delete">Usuń</Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Biedronka</td>
                        <td>Halinów</td>
                        <td>Bema 3</td>
                        <td>
                            <ul className="list-actions">
                                <li>
                                    <Link to="/stores/details/1" className="list-actions-button-details">Szczegóły</Link>
                                </li>
                                <li>
                                    <Link to="/stores/edit/1" className="list-actions-button-edit">Edytuj</Link>
                                </li>
                                <li>
                                    <Link to="/stores/delete/1" className="list-actions-button-delete">Usuń</Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default StoreList