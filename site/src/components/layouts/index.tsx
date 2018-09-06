import * as React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Footer from '../footer'
import { palette } from '../../styling'

interface Props {
  className?: string
}

class Layout extends React.PureComponent<Props> {
  render() {
    const { className, children } = this.props

    return (
      <div className={className}>
        <Helmet
          title="Make a Diff"
          meta={[
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            {
              name: 'theme-color',
              content: palette.base,
            },
          ]}
        />
        {children}
        <Footer siteTitle="Make a Diff" />
      </div>
    )
  }
}

export default styled(Layout)`
  > .content {
    position: relative;
    overflow: hidden;
  }
`
