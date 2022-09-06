import React, { useState } from "react"
import { BASE_URL } from "../../Services/Url"
import axios from "axios"
import SignupForm from "./SignupForm"
import UnProtectedPage from "../../Hook/useUnprotectedPage"
import { useNavigate } from "react-router-dom"


const Cadastro = () => {
    UnProtectedPage()
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [placa, setPlaca] = useState("")
    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [tel, setTel] = useState("")
    const [cidade, setCidade] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [uf, setUf] = useState("")

    const navigate = useNavigate()

    const goToFeed = () => {
        navigate("/feed")
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
     const onSubmit = (e) => {
        e.preventDefault()
        const body = {
            nome: nome,
            cpf: cpf,
            placa: placa,
            cep: cep,
            tel: tel,
            bairro: bairro,
            cidade: cidade,
            logradouro: logradouro,
            uf: uf
          }
        axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.access_token)
            alert("Cadastro realizado com sucesso")
            goToFeed()
           
        })
        .catch((erro) => {
            console.log(erro)
        })
   
     }
      
    return(
        <div>
            <SignupForm 
            nome={nome} setNome={setNome}
            placa={placa} setPlaca={setPlaca}
            cpf={cpf} setCpf={setCpf}
            cep={cep} setCep={setCep}
            bairro={bairro} setBairro={setBairro}
            tel={tel} setTel={setTel}
            cidade={cidade} setCidade={setCidade}
            logradouro={logradouro} setLogradouro={setLogradouro}
            uf={uf} setUf={setUf}
            onSubmit={onSubmit}
            checkCEP={checkCEP}
            />
        </div>
    )
}
export default Cadastro