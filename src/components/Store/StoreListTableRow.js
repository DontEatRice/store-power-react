import ListActions from "../fragments/ListActions"

function StoreListTableRow(props) {
    const { store } = props
    return (
        <tr>
            <td>{store.name}</td>
            <td>{store.city}</td>
            <td>{store.street}</td>
            <td>
                <ListActions id={store.id} />
            </td>
        </tr>
    )
}

export default StoreListTableRow