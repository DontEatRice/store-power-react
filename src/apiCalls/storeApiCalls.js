import { stores } from "./mockData";

export function getAllStores() {
    return stores
}

export function getStoreById(id) {
    const store = stores.find(store => store.id === id)
    return store
}