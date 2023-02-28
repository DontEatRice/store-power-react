import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApiCall } from "../../apiCalls/authApiCalls";
import { FormMode, LABELS, USER_BLUEPRINT } from "../../helpers/constans";
import { checkEmail, checkRequired } from "../../helpers/validationUtils";
import FormButtons from "../form/FormButtons";
import FormInput from "../form/FormInput";

function LoginForm(props) {
    const [user, setUser] = useState(USER_BLUEPRINT);
    const [validationErrs, setValidationErrs] = useState(USER_BLUEPRINT);
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(true)
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()
    const errorsSummary = hasErrors() ? 'Formularz zawiera błędy.' : ''
    const fetchError = error ? `Błąd: ${error.message}` : ''
    const globalErrorMessage = errorsSummary || fetchError || message

    const handleChange = (event) => {
        const { name, value } = event.target
        const errorMessage = validateField(name, value)
        setValidationErrs({
            ...validationErrs,
            [name]: errorMessage
        })
        setUser({
            ...user,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const isValid = validateForm()
        let response;

        if (!isValid) {
            return
        }
        setIsLoaded(false)
        loginApiCall(user)
            .then(res => {
                response = res
                return res.json()
            })
            .then(data => {
                if (response.status === 200) {
                    if (data.token) {
                        props.handleLogin(JSON.stringify(data))
                        navigate(-1)
                    }
                } else {
                    setMessage(data.message)
                }
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsLoaded(true)
            })
    }

    function validateForm() {
        let isValid = true
        let serverFieldsErrors = { ...validationErrs }
        Object.entries(user).forEach(([key, value]) => {
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
    if (!isLoaded) {
        return <main>Ładowanie...</main>
    } else if (error) {
        console.error(error)
        return <main>Błąd: {error.message}</main>
    } else if (message) {
        return <main>{message}</main>
    }

    return (
        <main>
            <div id="login">
                <h2>Login</h2>
                <form className="form" method="post" onSubmit={handleSubmit}>
                    <FormInput
                        name="email"
                        value={user.email}
                        error={validationErrs['email']}
                        label="E-mail"
                        handleChange={handleChange}
                        type="text"
                    />
                    <FormInput
                        name="password"
                        value={user.password}
                        error={validationErrs['password']}
                        label="Hasło"
                        type="password"
                        handleChange={handleChange}
                    />

                    <FormButtons cancelPath="/" formMode={FormMode.NEW} error={globalErrorMessage} />

                </form>
            </div>
        </main>
    )
}

function validateField(fieldName, fieldValue) {
    const reqFields = ['user', 'password']
    if (reqFields.includes(fieldName) && !checkRequired(fieldValue)) {
        return LABELS.required_field
    }
    switch (fieldName) {
        case 'email':
            if (fieldValue && !checkEmail(fieldValue)) {
                return 'Nieprawidłowy adres e-mail'
            }
            break;
        default:
            break;
    }

    return ''
}

export default LoginForm