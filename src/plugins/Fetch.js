const baseUrl = 'http://localhost:8000'

export default {
    get: async (route) => {
        const options = {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }
        const res = await fetch(baseUrl+route, options)
        return await res.json()
    }
}