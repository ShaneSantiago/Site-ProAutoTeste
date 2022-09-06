import React, { useEffect } from "react"
import { useNavigate } from "react-router"

const UseProtectedPage = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }

    useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
        goToHome()
    }
    }, [])
}
export default UseProtectedPage