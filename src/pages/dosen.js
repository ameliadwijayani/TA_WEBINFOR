import React from 'react'
import Knowledge_site_banner_2 from "../Partials/knowledge-site-banner-2"
import Dosen_data from "../Partials/dosen_data"
import Layout from "../layout/layout"

export default function Dosen() {

  return (
    <Layout>
      <Knowledge_site_banner_2 breadcrumb={[  "Dosen","Academic","Lecturers"]}/>
      <Dosen_data />
    </Layout>
  )
}
