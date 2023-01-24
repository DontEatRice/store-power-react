import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getStoreById } from "../../apiCalls/storeApiCalls";
import StoreDetailsData from "./StoreDetailsData";

function StoreDetails() {
    let { storeId } = useParams()
    const [store, setStore] = useState({})
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    function fetchStoreById() {
        getStoreById(storeId)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        setStore({})
                        setMessage(result.message)
                    } else {
                        setStore(result)
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                })
    }

    useEffect(() => {
        fetchStoreById()
        // eslint-disable-next-line
    }, [])

    let content = <></>

    if (error) {
        content = <p>Error: {error}</p>
    } else if (!isLoaded) {
        content = <p>Loading store data...</p>
    } else if (message) {
        content = <p>{message}</p>
    } else {
        content = <StoreDetailsData store={store} />
    }

    return (
        <main>
            <h2>Szczegóły sklepu</h2>
            {content}
            <div className="form-buttons">
                <Link to="/stores" className="form-button-cancel back-link">Powrót</Link>
            </div>
        </main>
    )
}

export default StoreDetails