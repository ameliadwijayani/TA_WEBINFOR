import React from 'react'
import Knowledge_site_banner_2 from "./Partials/knowledge-site-banner-2"
import Karyamhs_data from "./Partials/karyamhs_data"
import Layout from "./layout/layout"
export default function Karya_mahasiswa() {
  return (
    <Layout>
    <Knowledge_site_banner_2 breadcrumb={[  "Karya Mahasiswa", "New", "Creation"]}/>
    <Karyamhs_data/>
  </Layout>
  )
}
