import { useState } from "react";
import { Grid } from "../styles/styles";
import { HeaderField } from "./HeaderField";
import { SkinsField } from "./SkinsField";
import { ModalFilter } from "../ModalFilter";


export function MainField({handleFooter}) {

    const [showFilter, setShowFilter] = useState(false)

    const handleFilter = (value) => {
        setShowFilter(value)
        handleFooter(!value)
    }



    return (
       showFilter ? <ModalFilter showFilter={showFilter} handleFilter={handleFilter}/>
        : (
        <Grid rows="50px 670px">
        <HeaderField handleFilter={handleFilter}/> 
        <SkinsField/>
        </Grid>
        )
    )
}