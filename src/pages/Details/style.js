
import styled from "styled-components";
import { BreakpointSize, breakAt } from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    .active{
        ${breakAt(BreakpointSize.md)} {
        animation: fadeIn 0.5s forwards ;
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
                left: 0;
            }
            
        }}
    }
   
    
`;

export const Perfil = styled.div`
    width: 450px;
    background-color: #3B4252;
    max-height: 100vh;
    overflow: auto;
    padding: 60px 5px 47px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ECEFF4;
    opacity: 1;
    left: 0;
    -ms-overflow-style: none; 
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    ${breakAt(BreakpointSize.md)} {
        position: absolute;
        height: auto;
        width: 100%;
        left: -100%;
        opacity: 0;
    }
    ${breakAt(BreakpointSize.sm)} {
        padding: 30px 5px 30px 15px;
    }
    img{
        width: 298px;
        height: 298px;
        ${breakAt(BreakpointSize.sm)} {
            width: 200px;
            height: 200px;
        }
    }
    .close{
        display: none;
        ${breakAt(BreakpointSize.md)} {
            display: block;
            width: 36px;
            height: 36px;
            position: absolute;
            left: 10px;
            top: 10px;
        }
    }
`;
export const Dados = styled.div`
    margin-top: 30px;
    h2{
        font-size: 4.0rem;
        font-style:italic;
        line-height:5.0rem;
        font-weight:400;
        ${breakAt(BreakpointSize.sm)} {
            line-height: normal;
            font-size: 3.0rem;
        }
    }
    small{
        font-size: 2.8rem;
        font-style: italic;
        line-height: 3.4rem;
        ${breakAt(BreakpointSize.sm)} {
            line-height: normal;
            font-size: 2.0rem;
        }
    }
    p{
        color: #8190A5;
        font-size: 1.8rem;
        line-height: 2.8rem;
        margin-top: 5px;
        padding-right:25px;
        ${breakAt(BreakpointSize.sm)} {
            line-height: normal !important;
            font-size: 1.6rem !important;
            padding-right:2px !important;
        }
       
    }
`;
export const Social = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    span{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 1.8rem;
        font-style: italic;
        line-height: 2.6rem;
        ${breakAt(BreakpointSize.sm)} {
            line-height: normal;
            font-size: 1.3rem;
        }
    }
`;

export const CardDetails = styled.ul`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    ${breakAt(BreakpointSize.sm)} {
        margin-top: 20px;
    }
`;
export const CardDetailsItem = styled.li`
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 2.0rem;
    font-style: italic;
    line-height: 3.4rem;
    ${breakAt(BreakpointSize.sm)} {
        line-height: normal;
        font-size: 1.6rem;
        gap: 10px;
        svg{
            width: 20px;
            height: 20px;
        }
    }
`;
export const PerfilMobile = styled.div`
    display: none;
    padding: 10px;
    ${breakAt(BreakpointSize.md)} {
        display: flex;
    }
`;
export const ContainerMenu = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    span{
        color: #333;
        font-size: 1.8rem;
        font-weight: bold;
    }
`;

export const Repository = styled.div`
    padding:30px 0;
    flex: 1;
    
    max-height: 100vh;
    overflow: auto;
    
`;
export const BoxRepo = styled.a`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ECEFF4;;
    padding-bottom: 10px;
    color: #3B4252;
    max-width: 90%;
    margin:0 auto;
    margin-bottom: 20px;
    ${breakAt(BreakpointSize.sm)}{
        gap: 5px;
    }
    h3{
        font-size: 2.4rem;
        font-style: italic;
        line-height: 3.4rem;
        ${breakAt(BreakpointSize.sm)} {
           font-size: 2.04rem;
           line-height: normal;
        }
    }
    p{
        font-size: 1.8rem;
        line-height: 2.8rem;
        ${breakAt(BreakpointSize.sm)} {
              font-size: 1.53rem;
              line-height: normal;

        }
    }
`;
export const InfoRepo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    color: #8190A5;
    span{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size:1.8rem;
        font-style: italic;
        line-height: 2.2rem;
        ${breakAt(BreakpointSize.sm)} {
              font-size: 1.53rem;
              line-height: normal;

        }
    }

`;
export const Circle = styled.span`
    background-color:#8190A5;
    width: 18px;
    height: 18px;
    display: inline-block;
    border-radius: 50%;
    margin:0 15px;
    ${breakAt(BreakpointSize.sm)} {
        width: 11px;
        height: 11px;
        margin:0 10px;

    }
`;

