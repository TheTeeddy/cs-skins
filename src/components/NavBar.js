import { Grid, Title, Authorization, AuthorizationBtn , Logo } from "./styles/styles"
import skinsFateIcon from "../images/skinsfateIcon.png"
import "./styles/styles"




export function NavigationBar() {

    return (
        <Grid columns="1fr 1fr 1fr">
            <Logo>
                <img style={{width: "70px"}} 
                src={skinsFateIcon}
                alt="SKINS FATE LOGO"/>
            </Logo>
            
            <Title as="a" href="/"> skins fate </Title>

            <Authorization>
                <AuthorizationBtn>
                    sign in
                </AuthorizationBtn>
            </Authorization>
        </Grid>
        
        )
    
}