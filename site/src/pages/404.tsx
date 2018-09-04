import React from 'react'
import styled from 'styled-components'
import CenteredHeader from '../components/centered-header'

interface Props {
  className?: string
}

class NotFoundPage extends React.PureComponent<Props, {}> {
  render() {
    const { className } = this.props

    return (
      <div className={className}>
        <h1>Not Found</h1>
        <CenteredHeader>Not Found</CenteredHeader>
      </div>
    )
  }
}

export default styled(NotFoundPage)``
