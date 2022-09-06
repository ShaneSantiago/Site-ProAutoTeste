import styled from "styled-components"

export const ContainerEdit = styled.div`
    width: 100%:
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/background.png");
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 15px 0;

.container{
    width: 300px;
    height: 520px;
    margin: 20px;
    border-radius: 20px;
    padding: 10px;
}
.title{
    color: white;
    font-weight: lighter;
    text-align: center;
}
.container form{
    width: 300px;
    display: flex;
    flex-direction: column;

}
.container input{
    margin: 10px;
    padding: 10px;
}
.container button{
    width: 100px;
    margin: 0 auto;
    height: 45px;
    background-color: #2682FF;
    color white;
    border: none;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
}

`;