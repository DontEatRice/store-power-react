export function getFormattedDate(dateSource) {
    if (!dateSource) {
        return ''
    }
    const dateObject = new Date(dateSource)
    return dateObject.getFullYear() + '-' + ('0' + (dateObject.getMonth() + 1)).slice(-2) + "-" + ('0' + dateObject.getDate()).slice(-2)
}

export function fillNullFields(blueprint, obj) {
    const result = Object.assign({ ...blueprint }, obj)
    for (const field in result) {
        if (result[field] == null || result[field] === undefined) {
            result[field] = ''
        }
    }
    return result
}