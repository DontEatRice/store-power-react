import { Link } from "react-router-dom"
import { getAllProducts } from "../apiCalls/productApiCalls"
import ListActions from "./fragments/ListActions"

function ProductList() {
    const products = getAllProducts()
    return (
        <main>
            <Link to="/units" className="list-actions-button-edit">Lista jednostek</Link>
            <h2>Lista produktów</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Jednostka Miary</th>
                        <th>Opis</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.unitOfMeasure?.label}</td>
                                <td>{product.description}</td>
                                <td>
                                    <ListActions id={product.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p>
                <Link to="./add" className="button-add">Dodaj nowy produkt</Link>
            </p>
        </main>
    )
}

export default ProductList