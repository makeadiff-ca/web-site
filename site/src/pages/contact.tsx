import React from 'react'
import Layout from '../components/layouts'

interface Props {}

class Contact extends React.PureComponent<Props> {
  render() {
    return (
      <Layout>
        <div>
          <h1>Contact</h1>
          <div>
            <p>
              You can contact us at{' '}
              <a href="mailto:make.a.diff@mailinator.com">
                make.a.diff@mailinator.com
              </a>
              .
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
