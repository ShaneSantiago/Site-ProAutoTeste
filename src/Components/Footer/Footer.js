import React from "react"
import { ContainerFooter } from "./Styled"

const Footer = () => {
    return(
        <ContainerFooter>
            
            <footer className="container-footer">
				<div className="container">
					<div className="about">
						<h2>Aonde Estamos</h2>
						<p>Rua: Exemplo, Bairro</p>
						<p>(00) 0000-0000</p>

					</div>
						<div className="about">
						<h2>Links Úteis</h2>
						<a href="https://facebook.com"> Facebook</a>
						<a href="https://instagram.com"> Instagram</a>
						

					</div>
						<div className="about">
						<h2>Links Úteis</h2>
                        <a>Blog</a>
					</div>
				</div>

			</footer>
            
            <footer className="footer2">
				<div className="container">
					<p>Todos os direitos reservados</p>
				</div>
			</footer>

        </ContainerFooter>
    )
}
export default Footer