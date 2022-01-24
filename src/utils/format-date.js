export const longDate = (dateString) => {
    let d = new Date(dateString)
    let day = d.getDate()
    let month = d.toLocaleString('default', { month: 'long' })
    let year = d.getFullYear()

    const nth = (day) => {
        if (day > 3 && day < 21) return 'th'
        switch(day % 10) {
            case 1: return 'st'
            case 2: return 'nd'
            case 3: return 'rd'
            default: return 'th'
        }
    }

    return day + nth(day) + ' ' + month + ' ' + year
}

export const shortDate = (dateString) => {
    let d = new Date(dateString)
    let day = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()

    day = day < 10 ? '0' + day : day
    month = month < 10 ? '0' + month : month

    return day + '-' + month + '-' + year
}