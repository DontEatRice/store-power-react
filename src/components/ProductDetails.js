import { Link, useParams } from "react-router-dom"
import { getProductById } from "../apiCalls/productApiCalls"

function PricebooksSection(props) {
    const { pricebooks } = props
    if (!pricebooks || pricebooks.length === 0) {
        return <h2>Ten produkt nie został jeszcze dodany do żadnego sklepu!</h2>
    }
    return (
        <>
            <h2>Sklepy w których znajduje się produkt</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Sklep</th>
                        <th>Cena</th>
                        <th>Ilość</th>
                    </tr>
                </thead>
                <tbody>
                    {pricebooks.map(pricebook => (
                        <tr>
                            <td><Link>{pricebook.store?.name}</Link></td>
                            <td>{pricebook.price} zł</td>
                            <td>{pricebook.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

function ProductDetails() {
    let { productId } = useParams()
    productId = parseInt(productId)
    const product = getProductById(productId)
    return (
        <main>
            <h2>Szczegóły produktu</h2>
            <p>Nazwa: {product.name}</p>
            <p>Opis: {product.description}</p>
            <p>Link do obrazka: <a href={product.imageLink} alt={product.name} target="_blank" rel="noreferrer">{product.imageLink}</a></p>
            <p>Jednostka miary: {product.unitOfMeasure?.label}</p>

            <PricebooksSection pricebooks={product.pricebooks} />

            <div className="form-buttons">
                <Link to="/stores" className="form-button-cancel back-link">Powrót</Link>
            </div>
        </main>
    )
}

export default ProductDetails