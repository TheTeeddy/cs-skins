import { HeaderField } from "./mainField/headerField";
import { FilterField } from "./filterField/filterField";

import "./styles/styles";
import { Grid } from "./styles/styles";

export function MainPage() {

    return (
        <Grid columns="1fr 4fr" rows="1fr" style={{ height: "45rem", margin: "15px 32px"}}>
            <FilterField/>
            <HeaderField/>
        </Grid>
    )
}