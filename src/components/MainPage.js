import { MainField } from "./mainField/MainField";
import { FilterField } from "./filterField/FilterField";

import { Grid } from "./styles/styles";

export function MainPage() {

    return (
        <Grid columns="1fr 4fr" rows="1fr" style={{ margin: "15px 32px"}}>
            <FilterField/>
            <MainField/>
        </Grid>
    )
}