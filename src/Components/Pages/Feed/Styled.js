import styled from "styled-components"

export const ContainerFeed = styled.div`
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
    min-height: 500px; 

.container-user{
    width: 300px;
    height: 520px;
    margin: 20px;
    border-radius: 20px;
    padding: 10px;
    
}
.info-title{
    margin: 10px;
    font-size: 15px;
    text-align: center;
}
h2{
    font-weight: lighter;
    color: white;
}
p{
    font-weight: lighter;
    background-color: #ccc;
    padding: 5px;
}
.info{
    font-size: 16px;
    display: block;
}
button{
    width: 180px;
    height: 45px;
    background-color: #2682FF;
    color white;
    border: none;
    border-radius: 20px;
    font-size: 18px;
    margin: 0 auto;
    cursor: pointer;

}
`;