import React from 'react'
import Knowledge_site_banner_2 from "./Partials/knowledge-site-banner-2"
import Layout from "./layout/layout"
import About_visimisi from "./Partials/about_visimisi"
import About_tahun from "./Partials/about_tahun"
export default function About() {
 
  return (
    <Layout>
      <Knowledge_site_banner_2 breadcrumb={["Tentang Kami","Home","About"]}/>
      <About_visimisi/>
      <About_tahun/>
    </Layout>
  )
}
