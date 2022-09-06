import React from "react"
import { BASE_URL } from "../../Services/Url"
import { useNavigate, useParams } from "react-router-dom"
import useRequestData from "../../Hook/useRequestData"
import { ContainerFeed } from "./Styled"
import UseProtectedPage from "../../Hook/useProtectedPage"


const Feed = () => {
    UseProtectedPage()
    const params = useParams()

    const profile = useRequestData([], `${BASE_URL}/user/profile/${params.id}`)
    const navigate = useNavigate()

    const goToEditProfile = () => {
        navigate("/edit")
    }
    return(
        <ContainerFeed>
            <div className="container-user">
                <div className="info-title">
                <h2>Dados Cadastrais</h2>
                </div>
            <div className="info">
                <p>Nome: <span>{profile.nome}</span></p>
                <p>CPF: {profile.cpf}</p>
                <p>Placa: {profile.placa}</p>
                <div className="info-title">
                <h2>Endereço</h2>
                </div>
                <div>
                <p>CEP: {profile.cep}</p>
                <p>Cidade: {profile.cidade}</p>
                <p>Bairro: {profile.bairro}</p>
                <p>Logradouro: {profile.logradouro}</p>
                <p>UF: {profile.uf}</p>
                <button onClick={goToEditProfile}>Editar Perfil</button>
                </div>
            </div>

            </div>
        </ContainerFeed>
    )
}
export default Feed