import { Link, useParams } from "react-router-dom";
import { getStoreById } from "../../apiCalls/storeApiCalls";

function StoreDetails() {
    let { storeId } = useParams()
    storeId = parseInt(storeId)
    const store = getStoreById(storeId)

    return (
        <main>
            <h2>Szczegóły sklepu</h2>
            <p>Nazwa: {store.name}</p>
            <p>Miejscowość: {store.city}</p>
            <p>Ulica i numer: {store.street}</p>
            <p>E-mail: {store.email}</p>
            <h2>Produkty w sklepie</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Produkt</th>
                        <th>Cena</th>
                        <th>Ilość</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.pricebooks?.map(
                            pricebook =>
                                <tr key={pricebook.id}>
                                    <td><Link to={"/pricebooks/details/" + pricebook.id}>{pricebook.product.name}</Link></td>
                                    <td>{pricebook.price}</td>
                                    <td>{pricebook.quantity}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="form-buttons">
                <Link to="/stores" className="form-button-cancel back-link">Powrót</Link>
            </div>
        </main>
    )
}

export default StoreDetails