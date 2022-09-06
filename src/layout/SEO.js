import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO({ description, meta, title }) {
  
 
  const metaDescription = description || "Halaman web tentang jurusan S1 teknik informatika iSTTS"
  const defaultTitle = `Institut Sains dan Teknologi Terpadu Surabaya`
  const keywords=`Informatika STTS ISTTS Institut Sains Teknologi Terpadu Surabaya`

  return (
    <Helmet
      htmlAttributes={{
        lang:"id"
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `author`,
          content: "STTS",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@samijayaprobolinggo" || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="shortcut icon" href="favicon-32x32.png" type="image/x-icon"></link>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `id`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

