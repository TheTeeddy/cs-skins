import { MainField } from "./mainField/MainField";
import { FilterField } from "./filterField/FilterField";
import { Footer } from "./footer/Footer";
import useMediaQuery from '@mui/material/useMediaQuery';



import Logo from "../images/skinsfate.png"
import { Grid, SiteLogo } from "./styles/styles";
import { useState } from "react";

export function MainPage() {

    const matches = useMediaQuery('(min-width:1380px)');
    const [showFooter, setShowFooter] = useState(true);

    const handleFooter = (value) => {
        if (matches && value === false) {

        }
        setShowFooter(value)
    }


    return (
        <Grid columns="1fr 4fr" rows="1fr" style={{ margin: "15px 32px"}} gap="22px 0">
            <div style={{display: matches ? "inline-block" : "none", background: "#2a0033", position: "relative"}}>
            <FilterField />
            </div>
            <div style={{gridColumn: matches ? "auto" : "span 2"}}>
            <MainField handleFooter={handleFooter}/>
            </div>
            {showFooter ? 
                <>
                <SiteLogo src={Logo} size="70%" />
                <Footer/> 
                </>
            : null}
        </Grid>
    )
}