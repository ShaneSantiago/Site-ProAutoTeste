import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerHeader } from "./Styled"

const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token")
 
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/")
    }
    const goToFeed = () => {
        navigate("/feed")
    }
    const logout = () => {
        localStorage.removeItem("token")
    }
    const righButtonAction = () => {
        if(token){
            logout()
            setRightButtonText("Login")
            goToLogin()
        } else {
            goToLogin()
        }
    }
    return(
        <ContainerHeader>
            <header>
                <nav>
                    <div className="logo">Logo</div>
                    <ul className="nav-menu">
                        <li onClick={righButtonAction}><a>{rightButtonText}</a></li>
                        <li onClick={goToFeed}><a>Feed</a></li>
                    </ul>
                </nav>
            </header>
            <main></main>
        </ContainerHeader>
    )
}
export default Header