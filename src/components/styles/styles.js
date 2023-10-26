import styled, {createGlobalStyle} from "styled-components";

export const textColor = "#E0CBA5";
export const primaryColor = "#DC2D5C";
export const secondaryColor = "#66F3ED";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    background-color: #1e0024;
    font-family: Roboto Slab;
    color: ${textColor};
}
`

export const Grid = styled.div`
    display: grid;
    align-items: ${({alignItems}) => alignItems || "stretch"};
    justify-items: ${({justifyItems}) => justifyItems || "stretch"};
    grid-template-columns: ${({columns}) => columns || "auto"};
    grid-template-rows: ${({rows}) => rows || "auto"};
    grid-auto-rows: ${({autoRows}) => autoRows || "auto"};
    grid-gap: ${({gap}) => gap || "0px"};
    color: ${({color}) => color || textColor};
    background: ${({background}) => background || "inherit"};

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
    text-decoration: none;
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
    padding: 1px 5px;
        &:hover {
            cursor: pointer;
            background: #4c2c52;
        }          
`

export const HeartArea = styled.div`
    justify-self: center;
    background: inherit;
    align-self: center;

        >:hover {
            cursor: pointer;
            color: ${primaryColor};
            font-size: 40px;
        }   
`

export const SortArea = styled.div`
    background: inherit;
    align-self: center;


    >*:hover {
        cursor: pointer;
        color: ${primaryColor};
        background: inherit;
    }   
`
export const SearchArea = styled.div`
    background: inherit;
    justify-self: end;
    align-self: center;

`

export const SearchField = styled.input`
    border: none;
    background: #7B3989;
    height: 27px;
    border-radius: 5px;
    padding: 1px 10px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${secondaryColor};
    }
`

export const SiteLogo = styled.img`
    src: ${({src}) => src || "img"};
    alt: ${({alt}) => alt || "NoAlt"};
    width: ${({size}) => size || "100%"};
    justify-self: center;
`

export const FooterTitle = styled(Title)`
    font-size: 20px;
    text-shadow: 1.3px 0px 0px ${primaryColor};
`

export const FooterLinks =styled.a`
    href: ${({href}) => href};
    text-decoration: none;
    grid-column: ${({col}) => col || "auto"};
    grid-row: ${({row}) => row || "auto"};


    &:hover {
        color: ${primaryColor}
    }
`