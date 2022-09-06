import React from "react"
import { ContainerSignup } from "./Styled"

const SignupForm = (props) => {
    return(
        <ContainerSignup>
            
            <div className="container">
                <div className="container-form">
                <form onSubmit={props.onSubmit} className="signup-form">
                <span>Faça seu Cadastro</span>
                    <input className="input"
                    name="nome"
                    type="name"
                    value={props.nome}
                    onChange={(e) => props.setNome(e.target.value)}
                    placeholder="Nome"
                    required
                    />
                    <input className="input"
                    name="placa"
                    type="text"
                    value={props.placa}
                    onChange={(e) => props.setPlaca(e.target.value)}
                    placeholder="Placa"
                    required
                    /> 
                    <input className="input"
                    name="tel"
                    type="number"
                    value={props.tel}
                    onChange={(e) => props.setTel(e.target.value)}
                    placeholder="Telefone"
                    required
                    /> 
                    <input className="input"
                    name="cpf"
                    type="number"
                    value={props.cpf}
                    onChange={(e) => props.setCpf(e.target.value)}
                    placeholder="CPF"
                    required
                    />
                    <input className="input"
                    name="cep"
                    type="number"
                    value={props.cep}
                    onChange={(e) => props.setCep(e.target.value)}
                    onBlur={props.checkCEP}
                    placeholder="CEP"
                    required
                    />
                    <input className="input"
                    name="cidade"
                    type="name"
                    value={props.cidade}
                    onChange={(e) => props.setCidade(e.target.value)}
                    placeholder="CIdade"
                    required
                    />
                    <input className="input"
                    name="bairro"
                    type="name"
                    value={props.bairro}
                    onChange={(e) => props.setBairro(e.target.value)}
                    placeholder="Bairro"
                    required
                    />
                    <input className="input"
                    name="uf"
                    type="text"
                    value={props.uf}
                    onChange={(e) => props.setUf(e.target.value)}
                    placeholder="UF"
                    required
                    />
                    <input className="input"
                    name="logradouro"
                    type="name"
                    value={props.logradouro}
                    onChange={(e) => props.setLogradouro(e.target.value)}
                    placeholder="Logradouro"
                    required
                    />
                    
                    <button className="btn-form" type="submit">Cadastrar</button>
                </form>
                </div>
            </div>
        </ContainerSignup>
    )
}
export default SignupForm