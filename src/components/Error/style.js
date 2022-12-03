import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    transition: all 0.6s;
    color: #888;
    flex-direction: column;
    a{
        box-shadow:1px 1px 1px 1px #888;
    }
`;

export const ContainerErro = styled.div`
    h1{
        font-size: 5rem;
        display: inline-block;
        padding-right: 12px;
        animation: type .5s alternate infinite;
    }
    @keyframes type{
        from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
    }
`;