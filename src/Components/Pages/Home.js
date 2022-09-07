import React from "react"
import Login from "./Login/Login"
import { ContainerHome, Form } from "./Styled"

const Home = ({rightButtonText, setRightButtonText}) => {
    return(
        <ContainerHome>
            <div className="main">
             <div className="conteudo-main">
                <h2>Bem vindo ao <span>Site de Cadastro</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum euismod nisl, id aliquet tortor volutpat eu. <br/>
                Suspendisse at arcu aliquam, aliquet ligula dapibus, porttitor purus. <br/>
                Praesent ac magna mattis magna aliquam iaculis nec id ante. Cras molestie dolor et felis pellentesque feugiat. <br/>
                Proin sit amet magna ac mi porta auctor vitae lacinia ligula. Nulla ante velit, ullamcorper id augue sed, tempus interdum erat. <br/>
                Curabitur rutrum libero leo, at rutrum urna vehicula vel. Curabitur mattis dolor vel elementum malesuada. Fusce ante sapien,<br/>
                aliquam in augue ac, pretium vulputate erat. Mauris facilisis nisi est, <br/> sed tincidunt nibh accumsan et. Sed egestas tellus nec lobortis condimentum. 
                Phasellus elementum dignissim ornare.</p>

                <button>Saiba mais</button>
                
             </div>
                <Login rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            </div>
        </ContainerHome>
    )
}
export default Home