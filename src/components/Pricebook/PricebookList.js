import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getAllPricebooks } from "../../apiCalls/pricebookApiCalls"
import PricebookListTable from "./PricebookListTable"

function PricebookList() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [pricebooks, setPricebooks] = useState([])

    useEffect(() => {
        getAllPricebooks()
            .then(res => res.json())
            .then(
                (result) => {
                    setPricebooks(result)
                },
                (error) => {
                    setError(error)
                }
            )
            .finally(() => {
                setIsLoaded(true)
            })
    }, [])

    let content = <></>

    if (error) {
        content = <p>Error: {JSON.stringify(error)}</p>
    } else if (!isLoaded) {
        content = <p>Loading...</p>
    } else {
        content = <PricebookListTable pricebooks={pricebooks} />
    }

    return (
        <main>
            <h2>Lista książek cenowych</h2>
            {content}
            <p>
                <Link to="./add" className="button-add">Dodaj nową książkę cenową</Link>
            </p>
        </main>
    )
}

export default PricebookList