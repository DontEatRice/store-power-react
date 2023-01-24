import { Link } from "react-router-dom"

function StoreDetailsData(props) {
    const { store } = props

    return (
        <>
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
        </>
    )
}

export default StoreDetailsData