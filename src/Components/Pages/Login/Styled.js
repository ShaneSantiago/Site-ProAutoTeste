import styled from "styled-components"

export const ContainerForm = styled.div`

.container{
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 126, 255);
    width: 380px;
    align-items: center;
    border-radius: 20px;
}
    
span{
    color: white;
    font-size: 20px;
    font-weight: bold;
}
.login-form{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 10px;
    aligm-items: center;
    justify-content: center;
    height: 380px;
    border-radius: 20px;

}
.input{
    width: 300px;
    margin-top: 20px;
    background-color: transparent;
    height: 45px;
    color: #fff;
    padding: 0 5px;
    border: 0;
    margin-botton 45px;
    font-family: inherit;
    border-bottom: 2px solid #fff;
    outline: 0;
    transition: border-color 0.2s;
    &::placeholder {
    color: white;
}
}
.container-btn{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin-top: 10px;
}
.btn-button{
    margin: 5px;
    padding: 8px;
    width: 100px;
    color: #1d94ff;
    cursor: pointer;
    border: none;
}
.btn-signup{
    margin: 5px;
    padding: 8px;
    width: 100px;
    color: #1d94ff;
    cursor: pointer;
    border: none;
}
@media (max-width: 990px){
    .container{
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
    }
    .login-form{
        width: 300px;
        align-items: center;
        justify-content: center;
    }
    .input{
        width: 280px;
    }
   .container-btn{
    display: flex;
    justify-content: space-between;
    width: 300px;
   }
   
}
`;