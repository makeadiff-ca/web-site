import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { AppState } from '../state'
import * as ContactState from '../state/contact'
import ContentArea from '../components/content-area'
import { mediaMinWidth, palette } from '../styling'
import ContactForm, { Form } from '../components/contact-form'
import HeroDiff from '../components/hero-diff'
import Layout from '../components/layouts'
import HeroBaseBreaker from '../components/vectors/HeroBaseBreaker'

interface MainProps {
  className?: string
}

interface StateProps {
  interests: ContactState.ContactInterest[]
  submitState: ContactState.SubmitState
}

interface DispatchProps {
  contactSubmit(form: Form): void
  fetchContactInterests(): void
}

interface Props extends MainProps, StateProps, DispatchProps {}

class IndexPage extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetchContactInterests()
  }

  handleFormSubmit = (form: Form) => {
    this.props.contactSubmit(form)
  }

  render() {
    const { className, interests, submitState } = this.props

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
                with software and IT solutions. Levaraging our members' skills
                in software design, development, and deployment, we help make
                more of a difference.
              </p>
            </div>
            <ContactForm
              interests={interests}
              onSubmit={this.handleFormSubmit}
              submitState={submitState}
            />
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

function mapStateToProps(state: AppState): StateProps {
  return { ...state.contact }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    contactSubmit(form) {
      dispatch(
        ContactState.actions.contactSubmit(
          form.name,
          form.email,
          form.interests,
        ),
      )
    },
    fetchContactInterests() {
      dispatch(ContactState.actions.interestsFetch())
    },
  }
}

const ConnectedIndexPage = connect<
  StateProps,
  DispatchProps,
  MainProps,
  AppState
>(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage)

export default styled(ConnectedIndexPage)`
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

    ${ContactForm} {
      margin: 2rem auto 0 auto;
      position: relative;
      max-width: 26em;
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

      ${ContactForm} {
        margin-top: 0;
        position: absolute;
        right: 0;
        top: 1em;
        width: 20em;
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
