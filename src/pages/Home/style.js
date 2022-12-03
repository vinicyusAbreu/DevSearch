import styled from "styled-components";
import { Link } from "react-router-dom";
import { BreakpointSize, breakAt } from "../../styles/responsive";

export const ContainerHome = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const H1 = styled.h1`
  color: #3B4252;
  font-family: Lato;
  font-size: 4.0rem;
  font-style: italic;
  line-height: 5.0rem;
  width: 500px;
  text-align: center;
  ${breakAt(BreakpointSize.sm)} {
    width: auto;
  }

`
export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-top: 10px;
    ${breakAt(BreakpointSize.sm)} {
    
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Input = styled.input`
  background-color: #FFFFFF;
  border: 1px solid #3B4252;
  border-radius: 5px;
  width: 400px;
  height: 50px;
  padding-left: 23px;
  font-size: 1.8rem;
  font-style: italic;
  color: #8190A5;

  ${breakAt(BreakpointSize.sm)} {
    width: 100%;
  }

`;

export const Submit = styled(Link)`
  background-color: #47525E;
  border-radius: 5px;
  width: 118px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #ECEFF4;
  font-family: Lato;
  font-size: 2.2rem;
  font-style: italic;
  line-height: 6.2rem;
  text-align: center;
  ${breakAt(BreakpointSize.sm)} {
    width: 100%;
  }
`;