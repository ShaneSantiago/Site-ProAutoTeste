import styled from "styled-components"

export const ContainerSignup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/background.png");
    background-size: cover;
    background-position: center;
    width: 100%;
    padding: 15px 0;

.container{
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 126, 255);
    width: 380px;
    align-items: center;
    border-radius: 20px;
    margin: 20px;
}
    
span{
    color: white;
    font-size: 20px;
    font-weight: bold;
}
.signup-form{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 10px;
    aligm-items: center;
    justify-content: center;
    margin: 15px;
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
.btn-button{
    float: right;
    margin: 5px;
    padding: 8px;
    width: 100px;
    color: #1d94ff;
    cursor: pointer;
    border: none;
}
.btn-form{
    height: 28px;
    background-color: white;
    color white;
    border: none;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 10px;
    color: #2682FF;
}
@media (max-width: 990px){
    .container{
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
    }
    .signyp-form{
        width: 300px;
        align-items: center;
        justify-content: center;
    }
    .input{
        width: 280px;
    }
    .btn-button{
        margin-top: 28px;
    }
}
`;