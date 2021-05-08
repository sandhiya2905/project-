import React from "react"
import Footer from '../components/footer'
import Icon from '../components/icons'


export function FooterContainer(){
    return(
        <Footer> 
            <Footer.Wrapper>
                <Footer.Row> 
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">India</Footer.Link>
                    <Footer.Link href="#">Singapore</Footer.Link>
                    <Footer.Link href="#">United States</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f"></Icon>Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube"></Icon>Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram"></Icon>Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter"></Icon>Twitter</Footer.Link>    
                </Footer.Column>
                </Footer.Row>   
            </Footer.Wrapper>
        </Footer>
    )
}