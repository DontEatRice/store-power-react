import { BASE_API_URL } from "./constans"
import { pricebooks } from "./mockData"

export function getAllPricebooks() {
    return fetch(`${BASE_API_URL}/pricebooks`)
}

export function getPricebookById(id) {
    const store = pricebooks.find(pricebook => pricebook.id === id)
    return store
}