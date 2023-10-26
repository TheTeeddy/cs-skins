import { useState } from 'react';

import { Grid, HeartArea, SearchArea, SearchField, SortArea } from '../styles/styles';

export function HeaderField() {
    const [searchedSkin, setSearchedSkin] = useState("");
    console.log("Reloaded component")
    


    const formStyles = {
        background: "inherit",
        border: "none",
        fontSize: "17px",
        outline: "none",
    }

    return (
        <Grid style={{background: "#3B0147", padding: "13px 15px"}} columns="155px 100px 1fr" >
            <SortArea>
                <select style={formStyles}>
                    <option value="default">Default</option>
                    <option value="Low-High">Price: Low - High</option>
                    <option value="High-Low">Price: High - Low</option>
                </select>
            </SortArea>
            <HeartArea>
                <i style={{background: "inherit", fontSize: "18px"}} class="bi bi-suit-heart-fill"/>
            </HeartArea>
            <SearchArea>
                <SearchField placeholder='Search skins...' value={searchedSkin} onChange={(e) => setSearchedSkin(e.target.value)}/>
            </SearchArea>
        </Grid>
    )
}