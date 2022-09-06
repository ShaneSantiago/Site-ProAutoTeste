import React, { useState } from "react"
import { Container, Typography, Box, TextField, Grid, Link, Button } from "@mui/material"
import { ContainerForm } from "./Styled"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../Services/Url"
import useForm from "../../Hook/useForm"
import UnProtectedPage from "../../Hook/useUnprotectedPage"

const Login = ({rightButtonText, setRightButtonText}) => {
    UnProtectedPage()
    const [form, onChange, clear] = useForm({
        cpf: "",
        placa: ""
    })

    const navigate = useNavigate()

    const goToSignup = () => {
        navigate("/cadastro")
    }


    const goToFeed = () => {
        navigate("/feed")
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(setRightButtonText)
    }

    const login = () => {

        axios.post(`${BASE_URL}/login`, form)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.access_token)
            console.log(res.data.message)
            goToFeed()
            setRightButtonText("Logout")
        })
        .catch((erro) => {
            console.log(erro)
        })
    }
    return(
        <ContainerForm>
            <div className="container">
           <div className="container-login">
            <form onSubmit={onSubmitForm} className="login-form">
            <span>Login com suas Credenciais</span>

                <input className="input"
                name="cpf"
                type="number"
                value={form.cpf}
                onChange={onChange}
                placeholder="CPF - Apenas números"
                />

                <input className="input"
                name="placa"
                type="text"
                value={form.placa}
                onChange={onChange}
                placeholder="Placa"
                />
                <div>
                
            <button type="submit" className="btn-button" >LOGIN</button>
            <button onClick={goToSignup} className="btn-signup">CADASTRAR</button>
           
            </div>
            </form>
            </div>
            </div>
        </ContainerForm>
    )
}
export default Login