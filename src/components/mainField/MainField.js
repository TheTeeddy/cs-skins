import { Grid } from "../styles/styles";
import { HeaderField } from "./HeaderField";
import { SkinsField } from "./SkinsField";


export function MainField() {



    return (
        <Grid rows="50px 670px">
        <HeaderField/> 
        <SkinsField/>
        </Grid>
    )
}