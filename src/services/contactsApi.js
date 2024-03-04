import axios from "axios"

axios.defaults.baseURL= "https://65e457063070132b3b24922f.mockapi.io"

export const fetchContactsApi = async() => {
    return await axios.get("/contacts") }

export const addContactApi = async(newContact) => {
    return await axios.post("/contacts", newContact) }

export const deleteContactApi = async(id) => {
    return await axios.delete(`/contacts/${id}`)
}
