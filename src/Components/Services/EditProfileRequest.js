import axios from "axios"
import { BASE_URL } from "./Url"

export const editUser = (form, clear) => {
    axios.put(`${BASE_URL}/users`, form, {
        headers:{
         Authorization: localStorage.getItem("token")
     }
     })
    .then((res) => {
        console.log(res.data)
        alert("Editado com sucesso")
        clear()
    })
    .catch((erro) => {
        console.log(erro)
    })
}