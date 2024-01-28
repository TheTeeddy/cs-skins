
import { Grid, FooterTitle, FooterLinks } from "../styles/styles"
import { SocialIcon } from "react-social-icons"

import "../styles/styles.css"

export function Footer() {


    return (
        <Grid columns="3fr 1fr" rows="38px" justifyItems="center" alignItems="center" autoRows="38px">
            <FooterTitle>
                Skins fate
            </FooterTitle>
            <SocialIcon 
                url="https://www.instagram.com/" 
                target="_blank" 
                style={{gridRow: "1 / span 2", gridColumn: 2}}
                />
            <SocialIcon 
                url="https://www.facebook.com/" 
                target="_blank"
                style={{gridRow: "3 / span 2", gridColumn: 2}}
                />
            <SocialIcon 
                url="https://www.youtube.com/" 
                target="_blank"
                style={{gridRow: "5 / span 2", gridColumn: 2}}
                />
            <FooterLinks href="/about" row="2">
                About us
            </FooterLinks>
            <FooterLinks href="/faq" row="3" >
                FAQ
            </FooterLinks>
            <FooterLinks href="/contact" col="1">
                Contact
            </FooterLinks>

        </Grid>
    )
}