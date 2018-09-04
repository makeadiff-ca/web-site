import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

class NotFoundPage extends React.PureComponent<Props, {}> {
  render() {
    const { className } = this.props

    return (
      <div className={className}>
        <h1>Not Found</h1>
      </div>
    )
  }
}

export default styled(NotFoundPage)``
