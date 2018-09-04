import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import { palette } from '../styling'

import './globals.css'

interface Props {
  className?: string
  children(): React.ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: {
    pathname: string
  }
}

const Layout: React.SFC<Props> = ({ className, children, data, location }) => (
  <div className={className}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        {
          name: 'theme-color',
          content: palette.base,
        },
      ]}
    />
    <div
      className={`content ${location.pathname !== '/' ? 'content-page' : ''}`}
    >
      {children()}
    </div>
    <Footer siteTitle={data.site.siteMetadata.title} />
  </div>
)

export default styled(Layout)`
  > .content {
    position: relative;
    overflow: hidden;

    &.content-page {
      padding-top: 4em;
    }
  }

  > header .mast-menu {
    z-index: 1;
  }
`

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
