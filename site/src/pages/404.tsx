import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'

interface Props {
  className?: string
}

class NotFoundPage extends React.PureComponent<Props> {
  render() {
    const { className } = this.props

    return (
      <Layout className={className}>
        <h1>Not Found</h1>
      </Layout>
    )
  }
}

export default styled(NotFoundPage)``
