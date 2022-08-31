import React, { Children } from 'react'
import Header from "./header"
import Footer from "./footer"

export default function Layout(props) {

    return (
        <div id="page">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
