import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts'

interface Data {
  markdownRemark: {
    frontmatter: {
      title: string
    }
    html: string
  }
}

interface Props {
  data: Data
}

class NewsPost extends React.PureComponent<Props> {
  render() {
    const { markdownRemark: post } = this.props.data

    return (
      <Layout>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default NewsPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
