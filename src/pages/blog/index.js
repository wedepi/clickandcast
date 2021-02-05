import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: '#212529',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            Blog
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
