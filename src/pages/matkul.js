import React from 'react'
import Knowledge_site_banner_2 from "../Partials/knowledge-site-banner-2"
import Matkul_data from "../Partials/matkul_data"
import Layout from "../layout/layout"
export default function Matkul() {
  return (
    <Layout>
      <Knowledge_site_banner_2 breadcrumb={[  "Mata Kuliah",
      "Academic",
      "Courses"]}/>
      <Matkul_data/>
    </Layout>
  )
}
