import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FormMode, LABELS, STORE_BLUEPRINT } from "../../helpers/constans"
import { addStore, getStoreById, updateStore } from "../../apiCalls/storeApiCalls"
import { checkEmail, checkPhoneNumber, checkRequired, checkTextLengthRange } from "../../helpers/validationUtils"
import FormButtons from "../form/FormButtons"
import FormInput from "../form/FormInput"
import { fillNullFields } from "../../helpers/utils"

function StoreForm() {
    const [store, setStore] = useState(STORE_BLUEPRINT)
    const [validationErrs, setValidationErrs] = useState(STORE_BLUEPRINT)

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [message, setMessage] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const { storeId } = useParams()
    const currentFormMode = storeId ? FormMode.EDIT : FormMode.NEW
    const navigate = useNavigate()
    const errorsSummary = hasErrors() ? 'Formularz zawiera błędy.' : ''
    const fetchError = error ? `Błąd: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message
    const pageTitle = currentFormMode === FormMode.NEW ? 'Nowy sklep' : 'Edycja sklepu'

    /**
     * @param {React.ChangeEvent} event 
     */
    function handleChange(event) {
        const { name, value } = event.target
        const errorMessage = validateField(name, value)
        console.log({ name, value, errorMessage })
        setValidationErrs({
            ...validationErrs,
            [name]: errorMessage
        })
        setStore({
            ...store,
            [name]: value
        })
    }

    /**
     * 
     * @param {React.FormEvent} event 
     */
    function handleSubmit(event) {
        event.preventDefault()
        const isValid = validateForm()
        if (!isValid) {
            return
        }
        let promise, response
        if (currentFormMode === FormMode.NEW) {
            promise = addStore(store)
        } else if (currentFormMode === FormMode.EDIT) {
            promise = updateStore(storeId, store)
        } else {
            return
        }

        promise
            .then(data => {
                response = data
                if (data.status === 201 || data.status >= 400) {
                    return data.json()
                }
            })
            .then(data => {
                if (response.ok || response.status < 300) {
                    setRedirect(true)
                    return
                }
                const validationErrors = { ...validationErrs }
                for (const i in data.validationErrors) {
                    const errorItem = data.validationErrors[i]
                    console.log(errorItem)
                    const errorMsg = errorItem.message
                    const fieldName = errorItem.path
                    validationErrors[fieldName] = errorMsg
                }
                setValidationErrs(validationErrors)
                setError(null)
            })
            .catch(error => setError(error))
            .finally(setIsLoaded(true))

    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = { ...validationErrs }
        Object.entries(store).forEach(([key, value]) => {
            const errorMessage = validateField(key, value)
            serverFieldsErrors[key] = errorMessage
            if (errorMessage.length > 0) {
                isValid = false
            }
        })
        setValidationErrs(serverFieldsErrors)
        return isValid
    }

    function hasErrors() {
        let hasErrors = false
        Object.values(validationErrs).forEach((value) => {
            if (value.length > 0) {
                hasErrors = true
            }
        })
        return hasErrors
    }

    useEffect(() => {
        if (!storeId || currentFormMode === FormMode.NEW) {
            return;
        }
        getStoreById(storeId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        setMessage(data.message)
                    } else {
                        setStore(fillNullFields(STORE_BLUEPRINT, data))
                        setMessage(null)
                    }
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                })
    }, [storeId, currentFormMode])

    useEffect(() => {
        if (redirect) {
            navigate('..')
        }
    }, [redirect, navigate])

    if (currentFormMode === FormMode.EDIT && !isLoaded) {
        return <div>Loading page {pageTitle}...</div>
    }

    return (
        <main>
            <h2>{pageTitle}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <FormInput type="text" name="name" error={validationErrs["name"]} placeholder="Od 3 do 20 znaków" value={store.name} label="Nazwa" handleChange={handleChange} required={true} />
                <FormInput type="text" name="city" error={validationErrs["city"]} placeholder="Maks. 40 znaków" value={store.city} label="Miejscowość" handleChange={handleChange} required={true} />
                <FormInput type="text" name="street" error={validationErrs["street"]} placeholder="np. Warszawska 9A/3" value={store.street} label="Ulica i numer/nr. mieszkania" handleChange={handleChange} required={true} />
                <FormInput type="text" name="phoneNumber" error={validationErrs["phoneNumber"]} placeholder="np. 111222333" value={store.phoneNumber} label="Numer telefonu" handleChange={handleChange} />
                <FormInput type="email" name="email" error={validationErrs["email"]} placeholder="np. kowalski@example.org" value={store.email} label="E-mail" handleChange={handleChange} />
                <FormInput type="password" name="password" error={validationErrs["password"]} value={store.password} label="Hasło" handleChange={handleChange} />

                <FormButtons cancelPath=".." formMode={currentFormMode} error={globalErrorMessage} />
            </form>
        </main>
    )
}

function validateField(fieldName, fieldValue) {
    const reqFields = ['name', 'city', 'street', 'password']
    let errorMessage = ''
    if (reqFields.includes(fieldName) && !checkRequired(fieldValue)) {
        return LABELS.required_field
    }
    switch (fieldName.toLowerCase()) {
        case 'name':
            if (!checkTextLengthRange(fieldValue, 3, 20)) {
                errorMessage = LABELS.text_range_err_msg(3, 20)
            }
            break;
        case 'city':
            if (!checkTextLengthRange(fieldValue, 1, 40)) {
                errorMessage = LABELS.text_range_err_msg(1, 40)
            }
            break;
        case 'street':
            if (!checkTextLengthRange(fieldValue, 1, 100)) {
                errorMessage = LABELS.text_range_err_msg(1, 100)
            }
            break;
        case 'phonenumber':
            if (fieldValue && !checkPhoneNumber(fieldValue)) {
                errorMessage = 'Nieprawidłowy numer telefonu'
            }
            break;
        case 'email':
            if (fieldValue && !checkEmail(fieldValue)) {
                errorMessage = 'Nieprawidłowy adres e-mail'
            }
            break;
        case 'password':
            if (!checkTextLengthRange(fieldValue, 6, 42)) {
                errorMessage = LABELS.text_range_err_msg(6, 42)
            }
            break;
        default:
            break;
    }
    return errorMessage
}


export default StoreForm