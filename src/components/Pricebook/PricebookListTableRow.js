import ListActions from "../fragments/ListActions"

function PricebookListTableRow(props) {
    const { pricebook } = props
    return (
        <tr>
            <td>{pricebook.product ? pricebook.product.name : 'No product name ;/'}</td>
            <td>{pricebook.store ? pricebook.store.name : 'No store name ;/'}</td>
            <td>{pricebook.price} zł</td>
            <td>
                <ListActions id={pricebook.id} />
            </td>
        </tr>
    )
}
export default PricebookListTableRow