import { BASE_API_URL } from "./constans";
import { stores } from "./mockData";

export function getAllStores() {
    return fetch(BASE_API_URL + '/stores')
}

export function getStoreById(id) {
    const store = stores.find(store => store.id === id)
    return store
}