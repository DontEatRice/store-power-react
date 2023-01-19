export function getFormattedDate(dateSource) {
    if (!dateSource) {
        return ''
    }
    const dateObject = new Date(dateSource)
    return dateObject.getFullYear() + '-' + ('0' + (dateObject.getMonth() + 1)).slice(-2) + "-" + ('0' + dateObject.getDate()).slice(-2)
}