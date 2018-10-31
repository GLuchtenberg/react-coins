import { API_URL } from './config'

class Http {
    constructor(url) {
        this.url = url
    }
    get = (url) => {
        return fetch(`${this.url}/${url}`)
            .then(res => res.json().then(res => res))
            .catch(e => console.log(e))
    }
}

export default new Http(API_URL)