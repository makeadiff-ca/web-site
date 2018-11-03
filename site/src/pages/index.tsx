import * as React from 'react'
import styled from 'styled-components'
import ContentArea from '../components/content-area'
import { mediaMinWidth, palette } from '../styling'
import HeroDiff from '../components/hero-diff'
import Layout from '../components/layouts'
import HeroBaseBreaker from '../components/vectors/HeroBaseBreaker'

interface MainProps {
  className?: string
}

interface Props extends MainProps {}

class IndexPage extends React.PureComponent<Props> {
  render() {
    const { className } = this.props

    return (
      <Layout className={className}>
        <div className="page-head">
          <HeroBaseBreaker className="hero-base-break" />
          <ContentArea className="hero-area">
            <div className="brand-area">
              <HeroDiff label="make lives better" opacity={0.2} />
              <HeroDiff label="make an impact" opacity={0.4} />
              <HeroDiff label="make a change" opacity={0.8} />
              <HeroDiff label="make a diff" diffAdd />
              <p>
                Make a Diff assists other non-profits and charities in Calgary
                with software and IT solutions. Leveraging our members' skills
                in software design, development, and deployment, we help make
                more of a difference.
              </p>
            </div>
          </ContentArea>
        </div>
        <article className="page-body">
          <section>
            <ContentArea className="temp" />
          </section>
        </article>
      </Layout>
    )
  }
}

export default styled(IndexPage)`
  > .page-head {
    position: relative;
    background-color: ${palette.base};

    .hero-area {
      position: relative;

      .brand-area p {
        color: ${palette.foreBright};
        font-size: 1.1em;
        line-height: 1.4;
        text-shadow: 0 2px 0 ${palette.foreDark};
        margin-top: 1em;
      }
    }

    .hero-base-break {
      position: absolute;
      bottom: 0;
      left: 38%;
      max-width: 60em;
      min-width: 40em;
      transform: translate(-50%, 21%);
    }
  }

  > .page-body {
    min-height: 4em;
  }

  ${mediaMinWidth.tablet`
    > .page-head {
      height: 26em;

      .hero-area {
        .brand-area p {
          width: 22em;
        }
      }

      .hero-base-break {
        left: 50%;
        transform: translate(-50%, 30%);
      }

      ${HeroDiff} {
        font-size: 1.3em;
      }
    }

    > .page-body {
      min-height: 15em;
    }
  `};

  ${mediaMinWidth.tabletLarge`
    > .page-head {
      .hero-area {
        .brand-area p {
          width: 28em;
        }
      }

      ${HeroDiff} {
        font-size: 1.6em;
      }

      .contact-area {
        margin-top: 0;
        position: absolute;
        right: 2em;
        top: 2em;
        width: 25em;
        height: 20em;
      }
    }

    > .page-body {
      min-height: 15em;
    }
  `};
`
