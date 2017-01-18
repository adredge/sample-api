const axios = require('axios')
const LocalService = require('./local-service')

const localService = new LocalService('./index.js')

before(() => {
    return localService.start()
})

after(() => {
    return localService.kill()
})

module.exports = {
    makeApiCall
}

function makeApiCall(relativeUrl) {
    let url = `http://localhost:3000/${relativeUrl}`
    console.log('url', url)
    return axios.get(url)
        .then(response => response.data)
}