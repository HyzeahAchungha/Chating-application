import axios from 'axios'
const API = axios.create({baseURL:'https://chating-application-nine.vercel.app/'})

export const userChats=(id)=>API.get(`/chat/${id}`)
