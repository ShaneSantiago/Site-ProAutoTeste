import styled from "styled-components"

export const ContainerHeader = styled.div`


.logo{
    font-size: 23px;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: white;
}

nav{
    display: flex;

    justify-content: space-around;
    align-items: center;
    font-family: system-ui,
    -apple-system, Helvetica, Arial, sans-serif;
    background-color: #237a70;
    height: 8vh;
}
a{
    color: white;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;
}
a:hover{
    opacity: 0.8;
}
.nav-menu{
    list-style: none;
    display: flex;
}
.nav-menu li{
    letter-spacing: 3px;
    margin-left: 32px;


@media (max-width: 990px) {
    
    .nav-menu{
        margin: 20px;
        
    }
    .nav-menu li{
        margin-left: 0;
        
    }
    .mobile-menu{
        display: block;
    }
}
`;