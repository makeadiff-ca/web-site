import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  renderGtag() {
    const gtag = process.env.GATSBY_GTAG
    const hasGtag = typeof gtag === 'string' && gtag.length > 0

    if (process.env.NODE_ENV === `production` && hasGtag) {
      const scriptContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag}');
      `

      return [
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
        />,
        <script dangerouslySetInnerHTML={{ __html: scriptContent }} />,
      ]
    } else {
      return null
    }
  }

  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          {this.renderGtag()}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1.0"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
