import { Helmet } from "react-helmet"

export default function SEO({ title , description , favicon }) {
  return (
    <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/jpg" href={favicon} />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={favicon} />
        <meta property="og:description" content={description} />
    </Helmet>
  )
}
