import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-size: 10px;
        font-family: 'Lato', sans-serif;
        
    }
    body{
        font-size: 100%;
        list-style-type: none;
        font-family: 'Lato', sans-serif;
        background-color:#FAFAFA;
        position: relative;
    }
    ol, ul {
    list-style: none;
    } 
    a{
        text-decoration: none;
    } 
    button{
        cursor: pointer;
    } 
    #root{
        width: 100%;
        height: 100%;
        position: relative;
    }
    
`;

export default GlobalStyle;