import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPricebookById } from "../../apiCalls/pricebookApiCalls"
import PricebookDetailsData from "./PricebooksDetailsData"

function PricebookDetails() {
    let { pricebookId } = useParams()
    pricebookId = parseInt(pricebookId)
    const [pricebook, setPricebook] = useState({})
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getPricebookById(pricebookId)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        setPricebook({})
                        setMessage(result.message)
                    } else {
                        setPricebook(result)
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let content = <></>
    if (error) {
        content = <p>Error: {error.message || JSON.stringify(error)}</p>
    } else if (!isLoaded) {
        content = <p>Loading store data...</p>
    } else if (message) {
        content = <p>{message}</p>
    } else {
        content = <PricebookDetailsData pricebook={pricebook} />
    }

    return (
        <main>
            <h2>Sczegóły książki cenowej</h2>
            {content}
            <div className="form-buttons">
                <Link to=".." className="form-button-cancel back-link">Powrót</Link>
            </div>
        </main>
    )
}

export default PricebookDetails