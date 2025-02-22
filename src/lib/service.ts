const API_URL = process.env.BACKEND_API_URL

export async function get(endpoint: string) {
    const res = await fetch(`${API_URL}/${endpoint}`)
    return res.json()
}

export async function post<T>(endpoint: string, data: T) {
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}