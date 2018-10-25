import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layouts'

interface Node {
  excerpt: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
  }
  id: string
}

interface Edge {
  node: Node
}

interface Data {
  allMarkdownRemark: {
    edges: Edge[]
    totalCount: number
  }
}

interface Props {
  data: Data
}

class News extends React.PureComponent<Props> {
  render() {
    const { totalCount, edges } = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <div>
          <h1>News</h1>
          <h4>{totalCount} Posts</h4>
          {edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{' '}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default News

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
