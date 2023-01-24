import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllStores } from "../../apiCalls/storeApiCalls"
import StoreListTable from "./StoreListTable"


function StoreList() {
    // const stores = getAllStores()
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [stores, setStores] = useState([])

    useEffect(() => {
        getAllStores()
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setStores(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    let content = <></>
    if (error) {
        content = <p>{error}</p>
    } else if (!isLoaded) {
        content = <p>Ładowanie...</p>
    } else if (stores.length === 0) {
        content = <p>Brak sklepów.</p>
    } else {
        content = <StoreListTable stores={stores} />
    }


    return (
        <main>
            <h2>Lista sklepów</h2>
            {content}
            <p>
                <Link to="./add" className="button-add">Dodaj nowy sklep</Link>
            </p>
        </main>
    )
}

export default StoreList