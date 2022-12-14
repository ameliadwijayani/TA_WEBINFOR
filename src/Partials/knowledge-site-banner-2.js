import React from 'react'
import Axios from "axios"

export default function Knowledge_site_banner_2({breadcrumb=["","",""]}) {

  return (
   <aside id="colorlib-hero">
    <div className="flexslider" style={{ minHeight:"376px" }}>
        <ul className="slides" style={{ minHeight:"376px" }}>
        <li style={{ backgroundImage: `url("/img/beranda/cover/0.jpg")`,
            width: "100%",
            float: "left",
            marginRight: "-100%",
            position: "relative",
            opacity: 1,
            display: "block",
            zIndex: 2, }} >
            <div className="overlay" />
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-md-offset-3 col-xs-12 slider-text animated fadeInUp">
                <div className="slider-text-inner text-center">
                    <h2>
                        {breadcrumb[0]?breadcrumb[0]:""}
                    </h2>
                    <h3 className="breadcrumbs"><span>{breadcrumb[1]?breadcrumb[1]:""}
                    </span> |
                    <span><a title="ISTTS"href="/">
                        </a> {breadcrumb[2]?breadcrumb[2]:""}</span></h3>
                </div>
                </div>
            </div>
            </div>
        </li>
        </ul>
    </div>
    </aside>


  )
}
