const request = require("superagent");

export function fetchFilters() {
  return request
    .get(`{web-api-url}`)
    .then((response) => {
      return response.body;
    })
    .catch((error) => error);
}
