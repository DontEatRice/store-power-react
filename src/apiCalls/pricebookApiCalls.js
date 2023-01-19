import { pricebooks } from "./mockData"

export function getAllPricebooks() {
    return pricebooks
}

export function getPricebookById(id) {
    const store = pricebooks.find(pricebook => pricebook.id === id)
    return store
}