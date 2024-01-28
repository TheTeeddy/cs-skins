    import { useState } from "react"
    import { Grid } from "../styles/styles"
    import CheckBox from "./CheckBox";

    // Reset button check

    export function FilterOption({value}) {

       

        const redCircle = "red";
        const blueCircle = "blue";
        const greenCircle = "green";
        const yellowCircle = "yellow";
        const [showPrice, setShowPrice] = useState(true);
        const [showType, setShowType] = useState(false)
        const [minPrice, setMinPrice] = useState("");
        const [maxPrice, setMaxPrice] = useState("");
        const [activeColor, setActiveColor] = useState({
            red: false,
            blue: false,
            green: false,
            yellow: false
            
        });
        
        const activeFilter = "active-color-filter"
        
        
        
        const handleMinPriceChange = (event) => {
            const result = event.target.value.replace(/\D/g, "")
            setMinPrice(result)
            setActiveColor({
                red: true,
                blue: false
            })
        }
        
        const handleMaxPriceChange = (event) => {
            const result = event.target.value.replace(/\D/g, "")
            setMaxPrice(result)
        }

        const filterSkinsByColor = (e) => {
            const color = e.target.id;
            
            setActiveColor({
                ...activeColor,
                [color]: !activeColor[color]
            })     
        }
        
        const resetFilter = () => {
            setMaxPrice("")
            console.log(maxPrice)
        }

        const {red, blue, green, yellow} = activeColor;
        
        
        switch(value) {
            case "Price":
                return (    
                    <Grid columns="1fr 1fr" autoRows="25px" >
                        <div className="filter-title">
                            {value}
                        </div>
                        <div className="toggle-button" >
                            {showPrice 
                            ? <i class="bi bi-dash" onClick={()=> setShowPrice(!showPrice)}></i>
                            : <i class="bi bi-plus" onClick={()=> setShowPrice(!showPrice)}></i>
                            }
                        </div>
                        <div className="filter-body" style={{display: showPrice ? "inline-block" : "none"}}>
                            <input 
                            placeholder=" Min $"
                            className="input-price min" 
                            type="text"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            />
                        </div>
                        <div className="filter-body price-right" style={{display: showPrice ? "inline-block" : "none"}}>
                            <input 
                            placeholder=" Max $"
                            className="input-price max" 
                            type="text"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            />
                        </div>
                    </Grid>
                )
            
                case "Color": 
                return (
                    <Grid columns="1fr">
                        <div className="filter-title">
                            {value}
                        </div>
                        <div className="filter-color">
                            <Grid columns="repeat(4, 1fr)" rows="1fr" justifyItems="center">
                            <div className={`${redCircle} ${red ? activeFilter : ""}`} id={redCircle} onClick={filterSkinsByColor}></div>
                            <div className={`${blueCircle} ${blue ? activeFilter : ""}`} id={blueCircle} onClick={filterSkinsByColor}></div>
                            <div className={`${greenCircle} ${green ? activeFilter : ""}`} id={greenCircle} onClick={filterSkinsByColor}></div>
                            <div className={`${yellowCircle} ${yellow ? activeFilter : ""}`} id={yellowCircle} onClick={filterSkinsByColor}></div>
                            </Grid>
                        </div>
                    </Grid>
                )

                case "Type":
                    return(
                        <Grid columns="1fr 1fr" autoRows="25px" >
                            <div className="filter-title">
                                {value}
                            </div>
                            <div className="toggle-button" >
                                {showType 
                                ? <i class="bi bi-dash" onClick={()=> setShowType(!showType)}></i>
                                : <i class="bi bi-plus" onClick={()=> setShowType(!showType)}></i>
                                }
                            </div>
                            <div className="filter-body" style={{display: showType ? "inline-block" : "none"}}>
                                Pistol
                            </div>
                            <div className="filter-body check-box" style={{display: showType ? "inline-block" : "none"}}>
                                <CheckBox/>
                            </div>
                            <div className="filter-body" style={{display: showType ? "inline-block" : "none"}}>
                                SMG
                            </div>
                            <div className="filter-body check-box" style={{display: showType ? "inline-block" : "none"}}>
                                <CheckBox/>
                            </div>
                            <div className="filter-body" style={{display: showType ? "inline-block" : "none"}}>
                                Sniper Rifle
                            </div>
                            <div className="filter-body check-box" style={{display: showType ? "inline-block" : "none"}}>
                                <CheckBox/>
                            </div>
                            <div className="filter-body" style={{display: showType ? "inline-block" : "none"}}>
                                Pistol
                            </div>
                            <div className="filter-body check-box" style={{display: showType ? "inline-block" : "none"}}>
                                <CheckBox/>
                            </div>
                            <div className="filter-body" style={{display: showType ? "inline-block" : "none"}}>
                                Knife
                            </div>
                            <div className="filter-body check-box" style={{display: showType ? "inline-block" : "none"}}>
                                <CheckBox/>
                            </div>
                            <div className="filter-body" style={{display: showType ? "inline-block" : "none"}}>
                                Gloves
                            </div>
                            <div className="filter-body check-box" style={{display: showType ? "inline-block" : "none"}}>
                                <CheckBox/>
                            </div>
                            <div className="filter-body" style={{display: showType ? "inline-block" : "none"}}>
                                Sticker
                            </div>
                            <div className="filter-body check-box" style={{display: showType ? "inline-block" : "none"}}>
                                <CheckBox/>
                            </div>
                        </Grid>
                    )
                
                case "ResetFilter":
                    return(
                        <Grid columns="1fr" justifyItems="center">
                            <div className="reset-filter" onClick={resetFilter}>Reset Filter</div>
                        </Grid>
                    )
            default:
                return 'Test Issue'
        }

    }