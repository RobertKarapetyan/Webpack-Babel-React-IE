const request = require('superagent')

export function fetchFilters() {
    return request.get(`http://localhost:5003/api/loan-documents/document-type-filters`)
        .then(response => {
            const filters = response.body.elements
            return filters
        })
        .catch(error => error)
}