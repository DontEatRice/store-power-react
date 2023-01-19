import { Link, useParams } from "react-router-dom"
import { getPricebookById } from "../apiCalls/pricebookApiCalls"
import { getFormattedDate } from "../helpers/utils"

function StoreSection(props) {
    const store = props.store
    let body = <></>
    if (store) {
        body = (
            <>
                <td><Link to={"/stores/details/" + store.id}>{store.name}</Link></td>
                <td>{store.city}</td>
                <td>{store.street}</td>
            </>
        )
    }
    return (
        <>
            <h2>Sklep(y)</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Miejscowość</th>
                        <th>Ulica</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {body}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function ProductSection(props) {
    const product = props.product
    let body = <></>

    if (product) {
        body = (
            <>
                <td>
                    <Link to={"/product/details/" + product.id}>{product.name}</Link>
                </td>
                <td>
                    {product.description}
                </td>
                <td>{product.unitOfMeasure?.label || "Brak jednostki"}</td>
            </>
        )
    }

    return (
        <>
            <h2>Produkt</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Jednostka</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {body}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function PricebookDetails() {
    let { pricebookId } = useParams()
    pricebookId = parseInt(pricebookId)
    const pricebook = getPricebookById(pricebookId)

    return (
        <main>
            <h2>Sczegóły książki cenowej</h2>
            <p>Nazwa produktu: {pricebook.product?.name}</p>
            <p>Nazwa sklepu: {pricebook.store?.name}</p>
            <p>Cena: {pricebook.price}</p>
            <p>Obowiązuje od: {getFormattedDate(pricebook.validFrom)}</p>
            <p>Obowiązuje do: {getFormattedDate(pricebook.validTo)}</p>
            <p>Ilość: {pricebook.quantity}</p>
            <br />
            <StoreSection store={pricebook.store} />
            <ProductSection product={pricebook.product} />
            <div className="form-buttons">
                <Link to=".." className="form-button-cancel back-link">Powrót</Link>
            </div>
        </main>
    )
}

export default PricebookDetails