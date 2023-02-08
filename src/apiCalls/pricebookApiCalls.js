import { BASE_API_URL } from "../helpers/constans"

export function getAllPricebooks() {
    return fetch(`${BASE_API_URL}/pricebooks`)
}

export function getPricebookById(id) {
    return fetch(`${BASE_API_URL}/pricebooks/${id}`)
}