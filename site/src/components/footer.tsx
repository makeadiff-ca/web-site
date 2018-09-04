import * as React from 'react'
import styled from 'styled-components'
import ContentArea from './content-area'
import { palette } from '../styling'

interface Props {
  className?: string
  siteTitle: string
}

const originYear = 2018

const Footer: React.SFC<Props> = ({ className, siteTitle }) => {
  const currentYear = new Date().getFullYear()
  const copyRange =
    currentYear === originYear
      ? `${currentYear}`
      : `${originYear}-${currentYear}`

  return (
    <footer className={className}>
      <ContentArea className="sections" />
      <ContentArea className="copyright">
        Copyright © {copyRange} {siteTitle}. All rights reserved.
      </ContentArea>
    </footer>
  )
}

export default styled(Footer)`
  .copyright {
    font-size: 0.8em;
    text-align: center;
    color: ${palette.foreDark};
  }
`
