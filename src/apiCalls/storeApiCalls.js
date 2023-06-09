import { getCurrentUser } from "../helpers/authHelper";
import { BASE_API_URL } from "../helpers/constans";

export function getAllStores() {
    return fetch(BASE_API_URL + '/stores')
}

export function getStoreById(id) {
    return fetch(`${BASE_API_URL}/stores/${id}`)
}

export function addStore(store) {
    const user = getCurrentUser()
    let token = user?.token || ""
    return fetch(`${BASE_API_URL}/stores`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(store)
    })
}
export function updateStore(storeId, store) {
    return fetch(`${BASE_API_URL}/stores/${storeId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(store)
    })
}