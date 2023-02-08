export function checkRequired(value) {
    return (
        value &&
        !(typeof value === 'string' && value.trim() === '')
    )
}

/**
 * @param {any} value 
 * @param {number} min 
 * @param {number} max 
 */
export function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false
    }
    value = value.toString().trim()
    const len = value.length
    if (
        (max && len > max) ||
        (min && len < min)
    ) {
        return false
    }

    return true
}

/**
 * @param {string?} value 
 */
export function checkEmail(value) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return checkForRegex(value, re)
}

export function checkLink(value) {
    const re = /(https?:\/\/[^\s]+)/g
    return checkForRegex(value, re)
}

export function checkPhoneNumber(value) {
    const re = /^\d{9}$/gm
    return checkForRegex(value, re)
}

/**
 * @param {string?} value 
 * @param {RegExp} regex 
 */
export function checkForRegex(value, regex) {
    if (!value) {
        return false
    }

    value = value.trim()
    return regex.test(value)
}

/**
 * @param {number | string | null} value 
 * @returns {boolean}
 */
export function checkNumber(value) {
    return value && !isNaN(value)
}

/**
 * @param {string?} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {boolean}
 */
export function checkNumberRange(value, min, max) {
    if (!checkNumber(value))
        return false

    value = parseFloat(value)
    return value >= min && value <= max
}

/**
 * @param {string} value 
 * @returns {boolean}
 */
export function checkDate(value) {
    const re = /(\d{4})-(\d{2})-(\d{2})/
    return checkForRegex(value, re)
}

/**
 * @param {string} value 
 * @param {string} compareTo 
 */
export function checkDateIfAfter(value, compareTo) {
    if (
        !value ||
        !compareTo ||
        !checkDate(value) ||
        !checkDate(compareTo)
    ) {
        return false
    }
    return new Date(value) >= new Date(compareTo)
}