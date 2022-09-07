import React from "react"
import { Route, Routes } from "react-router-dom"
import Edit from "../Pages/EditProfile/EditProfile"
import Footer from "../Footer/Footer"
import Cadastro from "../Pages/Cadastro/Cadastro"
import Feed from "../Pages/Feed/Feed"
import Home from "../Pages/Home"
import Login from "../Pages/Login/Login"
import ErroPage from "../Pages/ErroPage/ErroPage"

const Routers = ({rightButtonText, setRightButtonText}) => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}>
                </Route>

                <Route exact path="/login" element={<Login/>}>
                </Route>

                <Route exact path="/cadastro" element={<Cadastro rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}>
                </Route>

                <Route exact path="/feed" element={<Feed />}>
                </Route>

                <Route exact path="/edit" element={<Edit />}>
                </Route>

                <Route exact path="*" element={<ErroPage />}>
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}
export default Routers