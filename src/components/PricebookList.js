import { Link } from "react-router-dom"
import { getAllPricebooks } from "../apiCalls/pricebookApiCalls"
import ListActions from "./fragments/ListActions"

function PricebookList() {
    const pricebooksList = getAllPricebooks()

    return (
        <main>
            <h2>Lista książek cenowych</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Nazwa produktu</th>
                        <th>Sklep</th>
                        <th>Cena</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {pricebooksList.map(pricebook => (
                        <tr key={pricebook.id}>
                            <td>{pricebook.product?.name}</td>
                            <td>{pricebook.store?.name}</td>
                            <td>{pricebook.price} zł</td>
                            <td>
                                <ListActions id={pricebook.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>
                <Link to="./add" className="button-add">Dodaj nową książkę cenową</Link>
            </p>
        </main>
    )

}

export default PricebookList