import axios from "axios"
import React, { useEffect, useState } from "react"
import UseProtectedPage from "../../Hook/useProtectedPage"
import { BASE_URL } from "../../Services/Url"
import { ContainerEdit } from "./Styled"


const Edit = () => {
    UseProtectedPage()
    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [uf, setUf] = useState("")


    const onSubmitForm = (e) => {
        e.preventDefault()
        editUser()
    }
    const editUser = (form, clear) => {
        const body = {
            cep: cep,
            cidade: cidade,
            bairro: bairro,
            uf: uf,
            logradouro: logradouro
        }
        axios.put(`${BASE_URL}/users`, body, {
            headers:{
             Authorization: localStorage.getItem("token")
         }
         })
        .then((res) => {
            alert("Editado com sucesso")
            clear()
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '')
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
            setBairro(res.data.bairro)
            setCidade(res.data.localidade)
            setLogradouro(res.data.logradouro)
            setUf(res.data.uf)
        })
        .catch((erro) => {
            console.log(erro)
        })
      }

   
    return(
        <ContainerEdit>
            <div className="container">
                <div>
                    <h2 className="title">Editar Informações</h2>
                </div>
            <form onSubmit={onSubmitForm}>
                <input 
                name="cep"
                type="number"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onBlur={checkCEP}
                placeholder="CEP"
                />
                <input 
                name="cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Cidade"
                />
                <input 
                name="bairro"
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Bairro"
                />
                <input 
                name="logradouro"
                type="text"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
                placeholder="Logradouro"
                />
                <input 
                name="uf"
                type="text"
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                placeholder="UF"
                />
                <button type="submit">Concluir</button>
            </form>
            </div>
        </ContainerEdit>
    )
}
export default Edit