import { BASE_API_URL } from "./constans";

export function getAllStores() {
    return fetch(BASE_API_URL + '/stores')
}

export function getStoreById(id) {
    return fetch(`${BASE_API_URL}/stores/${id}`)
}