import styled from "styled-components"

export const ContainerHome = styled.div`
    width: 100%;
    
    
.main{
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/background.png");
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 15px 0;
    min-height: 500px;  
}
.conteudo-main{
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 90px 0;
 
    
}
.conteudo-main h2{
    fint-size: 50px;
    color: white;
    font-weight: lighter;
}
.conteudo-main h2 > span{
    color: #2682FF;
}
.conteudo-main p{
    color: white;
    margin-top: 18px;
    font-size: 16px;
    font-weight: lighter;
}
.conteudo-main button{
    width: 180px;
    height: 45px;
    background-color: #2682FF;
    color white;
    border: none;
    border-radius: 20px;
    font-size: 18px;
}
@media (max-width: 990px) {
    .main{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .conteudo-main{
        display: flex;
        width: 300px;
        margin: 10px;
        flex-direction: column;
    }
}
`;