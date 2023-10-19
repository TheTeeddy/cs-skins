import styled, {createGlobalStyle} from "styled-components";

const textColor = "#E0CBA5";
const primaryColor = "#DC2D5C";
const secondaryColor = "";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    background-color: #1e0024;
    font-family: Roboto Slab;

}
`

export const Grid = styled.div`
    display: grid;
    align-items: ${({alignItems}) => alignItems || "stretch"};
    grid-template-columns: ${({columns}) => columns || "1fr"};
    grid-template-rows: ${({rows}) => rows || "1fr"};
    grid-column-gap: ${({columnGap}) => columnGap || "0px"};
    grid-row-gap: ${({rowsGap}) => rowsGap || "0px"};
    color: ${({color}) => color || textColor}

`


export const Logo = styled.div`
    font-size: 23px;
    padding: 12px 22px;
    align-items: end;

`

export const Title = styled.div`
    color: ${textColor};
    text-shadow: 2.5px 0px 0px ${primaryColor};
    text-transform: uppercase;
    font-size: 42px;
    padding: 10px 0;
    text-align: center;

`

export const Authorization = styled.div`
    padding: 10px 32px;
    align-self: center;
    justify-self: end;
`

export const AuthorizationBtn = styled.button`
    text-align: end;
    color: ${textColor};
    background: transparent;
    border: 2px solid ${primaryColor};
    border-radius: 12px;
    font-family: Roboto Slab;
    text-transform: uppercase;
    font-size: 19px;
    padding: 1px 4px;
        &:hover {
            cursor: pointer;
            background: #4c2c52;
        }          
`