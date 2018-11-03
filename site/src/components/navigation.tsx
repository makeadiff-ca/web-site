import * as React from 'react'
import { Link } from 'gatsby'

interface Props {}

class Navigation extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Navigation
