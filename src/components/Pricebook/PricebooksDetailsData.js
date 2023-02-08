import { Link } from "react-router-dom"
import { LABELS } from "../../helpers/constans"
import { getFormattedDate } from "../../helpers/utils"

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


function PricebookDetailsData(props) {
    const { pricebook } = props

    return (
        <>
            <p>Nazwa produktu: {pricebook.product?.name || LABELS.no_value}</p>
            <p>Nazwa sklepu: {pricebook.store?.name || LABELS.no_value}</p>
            <p>Cena: {pricebook.price} zł</p>
            <p>Obowiązuje od: {getFormattedDate(pricebook.validFrom) || LABELS.no_value}</p>
            <p>Obowiązuje do: {getFormattedDate(pricebook.validTo) || LABELS.no_value}</p>
            <p>Ilość: {pricebook.quantity}</p>
            <br />
            <StoreSection store={pricebook.store} />
            <ProductSection product={pricebook.product} />
        </>
    )
}

export default PricebookDetailsData