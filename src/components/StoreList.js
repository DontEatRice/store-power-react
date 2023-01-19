import { Link } from "react-router-dom"
import { getAllStores } from "../apiCalls/storeApiCalls"
import ListActions from "./fragments/ListActions"

function StoreList() {
    const stores = getAllStores()
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
                    {
                        stores.map(store => (
                            <tr key={store.id}>
                                <td>{store.name}</td>
                                <td>{store.city}</td>
                                <td>{store.street}</td>
                                <td>
                                    <ListActions id={store.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p>
                <Link to="./add" className="button-add">Dodaj nowy sklep</Link>
            </p>
        </main>
    )
}

export default StoreList