export const BASE_API_URL = 'http://localhost:8080/api'
export const FormMode = {
    NEW: 'NEW',
    EDIT: 'EDIT'
}
export const STORE_BLUEPRINT = Object.freeze({
    name: '',
    city: '',
    street: '',
    phoneNumber: '',
    email: '',
    password: ''
})
export const USER_BLUEPRINT = Object.freeze({
    email: '',
    password: ''
})

export const LABELS = {
    no_value: <span style={{ color: 'GrayText' }}>--Brak wartości--</span>,
    required_field: 'Pole jest wymagane',
    text_range_err_msg: (min, max) => {
        return `Pole powinno zawierać od ${min} do ${max} znaków`
    }
}