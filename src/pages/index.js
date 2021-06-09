import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "@emotion/react"
import theme from "@rebass/preset"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <h1>Rio Grappling Club Stellenbosch</h1>
      <p>The Home Of Brazilian Jiu Jitsu In Stellenbosch</p>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
