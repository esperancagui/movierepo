import axios, { AxiosError } from 'axios'

export const TMDB_BASE = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const client = axios.create({
    baseURL: TMDB_BASE,
    params: {
        api_key: API_KEY
    }
})

export const tmdbFetch = async (path: string, params?: { page: number }): Promise<any> => {
    try {
        const response = await client.get(path, { params })
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Error fetching TMDB data:', error.response?.data)
        }
        throw error
    }
}