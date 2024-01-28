import useMediaQuery from '@mui/material/useMediaQuery';


import { FilterButton, Grid, HeartArea, SearchArea, SearchField, SortArea } from '../styles/styles';

export function HeaderField({handleFilter}) {

    const matches = useMediaQuery('(min-width:1380px)');
    console.log(matches)

    const formStyles = {
        background: "inherit",
        border: "none",
        fontSize: "17px",
        outline: "none",    
    }
    
   
    return (
        <Grid style={{background: "#3B0147", padding: "13px 15px"}} columns={matches ? "155px 100px 1fr" : "40px 155px 100px 1fr"} >
            <FilterButton style={{display: matches ? "none" : "block"}}>
            <i style={{background: "inherit"}} class="bi bi-funnel" onClick={() => handleFilter(true)}></i>
            </FilterButton>
            <SortArea>
                <select style={formStyles}>
                    <option value="default">Default</option>
                    <option value="Low-High">Price: Low - High</option>
                    <option value="High-Low">Price: High - Low</option>
                </select>
            </SortArea>
            <HeartArea>
                <i style={{background: "inherit"}} class="bi bi-suit-heart-fill"/>
            </HeartArea>
            <SearchArea>
                <SearchField placeholder='Search skins...' />
            </SearchArea>
        </Grid>
    )
}