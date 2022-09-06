import React from "react"
import { withPrefix } from 'gatsby';
import { StaticImage} from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Axios from "axios"
import Layout from "../layout/layout"
import Knowledge_site_banner from "../Partials/knowledge-site-banner"
import Knowledge_tentang_kami from "../Partials/knowledge-tentang-kami"
import Knowledge_tentang_kami_2 from "../Partials/knowledge-tentang-kami-2"
import Knowledge_recent from "../Partials/knowledge_recent"
import Knowledge_owl_carousel from "../Partials/knowledge-owl-carousel"
import Knowledge_spesialisasi from "../Partials/knowledge-spesialisasi"
import Knowledge_testimoni from "../Partials/knowledge-testimoni"
export default function Home() {
    let ArrayScript=[
      'https://code.jquery.com/jquery-3.4.1.min.js',
      '/js/frontend/modernizr-2.6.2.min.js',
      '/js/frontend/respond.min.js',
      '/js/all/jquery.min.js',

      '/js/frontend/jquery.easing.1.3.js',
      '/js/all/bootstrap.min.js',
      '/js/frontend/jquery.waypoints.min.js',
      '/js/frontend/jquery.stellar.min.js',
      '/js/frontend/jquery.flexslider-min.js',
      '/js/frontend/owl.carousel.min.js',

      '/js/frontend/jquery.magnific-popup.min.js',
      '/js/frontend/jquery.countTo.js',
      '/js/frontend/main.js',
      '/js/frontend/highlight.pack.js',
  ]


  function finish(){
    for(let i=0;i<ArrayScript.length;i++){
      const script = document.createElement('script')
      script.src=ArrayScript[i]
      script.async=true
      document.body.appendChild(script)
      ArrayScript[i]=""
    }
  }
  React.useEffect(()=>{
    finish();
  },[])
  return (
    <Layout>
      <Knowledge_site_banner/>
      <Knowledge_recent/>
      <Knowledge_owl_carousel title1={"Karya"} title2={"Karya Mahasiwa"}/>
      <Knowledge_tentang_kami/>
      <Knowledge_spesialisasi/>
      <Knowledge_tentang_kami_2/>
      <Knowledge_testimoni/>
    </Layout>
  )
}
