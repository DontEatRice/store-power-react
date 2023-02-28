import { BASE_API_URL } from "../helpers/constans"

export const loginApiCall = (user) => {
    const url = `${BASE_API_URL}/auth/login`
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}