import React, { Children } from 'react'
import Header from "./header"
import Footer from "./footer"
import SEO from "./SEO"

export default function Layout(props) {

    return (
        <div id="page">
            <SEO title={"S1-Informatika"}/>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
