import { Grid, FilterTitle } from "../styles/styles";

import "../styles/styles";
import { FilterOption } from "./FilterOptions";

export function FilterField() {


    
    return (
        <Grid style={{background: "#2a0033", overflowY: "auto"}} rows="50px" gap="12px"> 
            <FilterTitle>
                Filter
            </FilterTitle>
            <FilterOption value="Price"/>
            <FilterOption value="Color"/>
            <FilterOption value="Type"/>
            <FilterOption value="ResetFilter"/>
        </Grid>
    )
}