import PricebookListTableRow from "./PricebookListTableRow"

function PricebookListTable(props) {
    const { pricebooks } = props

    return (
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
                {
                    pricebooks.map(pricebook => (
                        <PricebookListTableRow pricebook={pricebook} key={pricebook.id} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default PricebookListTable