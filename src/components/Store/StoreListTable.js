import StoreListTableRow from "./StoreListTableRow"

function StoreListTable(props) {
    const { stores } = props

    return (
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
                        <StoreListTableRow store={store} key={store.id} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default StoreListTable