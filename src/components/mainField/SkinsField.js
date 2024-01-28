
import { skinsInfo } from "../../data/data"
import SkinCard from "./SkinCard"


import { Grid } from "../styles/styles"



export function SkinsField() {

    console.log(skinsInfo)

    return (
        <Grid 
        style={{    background: "#3B0147", padding: "12px", overflowY: "auto"}} 
        columns="repeat(auto-fill, minmax(150px ,1fr))"
        gap="8px"
        >
            {skinsInfo.map(({src, price}) => <SkinCard src={src} price={price}/>)}
        </Grid>
    )
}