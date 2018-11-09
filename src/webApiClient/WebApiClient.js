const request = require('superagent')

export function fetchFilters() {
    return request.get(`<your own url>`)
        .then(response => {
            const filters = response.body.elements
            return filters
        })
        .catch(error => error)
}