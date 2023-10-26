import { MainField } from "./mainField/MainField";
import { FilterField } from "./filterField/FilterField";
import { Footer } from "./footer/Footer";
import Logo from "../images/skinsfate.png"

import { Grid, SiteLogo } from "./styles/styles";

export function MainPage() {

    return (
        <Grid columns="1fr 4fr" rows="1fr" style={{ margin: "15px 32px"}} gap="22px 0">
            <FilterField/>
            <MainField/>
            <SiteLogo src={Logo} size="70%"/>
            <Footer/>
        </Grid>
    )
}