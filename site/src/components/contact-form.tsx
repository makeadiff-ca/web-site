import * as React from 'react'
import styled from 'styled-components'
import { validate } from 'validate.js'
import { SubmitState, ContactInterest } from '../state/contact'
import Button from '../components/inputs/button'
import CheckboxInput from '../components/inputs/checkbox-input'
import TextInput from '../components/inputs/text-input'
import CalloutCirclePlus from '../components/vectors/CalloutCirclePlus'
import { mediaMinWidth, palette, classNames } from '../styling'

export interface Form {
  email: string
  interests: number[]
  name: string
}

interface Props {
  className?: string
  interests: ContactInterest[]
  onSubmit(form: Form): void
  submitState: SubmitState
}

interface State {
  canSubmit: boolean
  email: string
  errors: { email?: string[]; interests?: string[]; name?: string[] }
  interests: number[]
  name: string
  touched: { email: boolean; interests: boolean; name: boolean }
}

class ContactForm extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      canSubmit: false,
      email: '',
      errors: {},
      interests: [],
      name: '',
      touched: {
        email: false,
        interests: false,
        name: false,
      },
    }
  }

  validateFormState() {
    const { email, interests, name } = this.state
    const errors = validate(
      { email, interests, name },
      {
        name: { length: { minimum: 1 } },
        email: { email: true },
        interests: { length: { minimum: 1 } },
      },
    )
    const canSubmit = errors === undefined
    this.setState({ canSubmit, errors: errors || {} })
  }

  shouldShowFieldErrors(field: keyof Form): boolean {
    const { errors, touched } = this.state
    return touched[field] && errors.hasOwnProperty(field)
  }

  handleNameChange = (name: string) => {
    this.setState(
      { name, touched: { ...this.state.touched, name: true } },
      () => this.validateFormState(),
    )
  }

  handleEmailChange = (email: string) => {
    this.setState(
      { email, touched: { ...this.state.touched, email: true } },
      () => this.validateFormState(),
    )
  }

  handleSelectInterest = (id: number) => {
    const interestsSet = new Set(this.state.interests)
    interestsSet.add(id)
    this.setState(
      {
        interests: Array.from(interestsSet),
        touched: { ...this.state.touched, interests: true },
      },
      () => this.validateFormState(),
    )
  }

  handleDeselectInterest = (id: number) => {
    this.setState(
      { interests: this.state.interests.filter(i => i !== id) },
      () => this.validateFormState(),
    )
  }

  handleFormSubmitClick = () => {
    const { canSubmit, email, interests, name } = this.state
    const data: Form = { email, interests: interests.slice(), name }
    if (canSubmit) {
      this.props.onSubmit(data)
    }
  }

  render() {
    const { className: propsClassName, interests, submitState } = this.props
    const { canSubmit, name, email, interests: selectedInterests } = this.state
    const nameHasErrors = this.shouldShowFieldErrors('name')
    const emailHasErrors = this.shouldShowFieldErrors('email')
    const submitPending = submitState === SubmitState.Pending
    const submitFailed = submitState === SubmitState.Failed
    const submitComplete = submitState === SubmitState.Submitted

    const className = classNames(
      {
        'submit-pending': submitPending,
        'submit-failed': submitFailed,
        'submit-complete': submitComplete,
      },
      propsClassName,
    )

    return (
      <div className={className}>
        <div className="base" />
        <div className="content">
          <h2>Make a Diff with Us!</h2>
          <div className="callout">
            <CalloutCirclePlus className="callout-icon" />
            <p>
              More people means more diffs, and more diffs means we can do more
              good.
            </p>
          </div>
          <div className="form">
            <label>Your Name *</label>
            <TextInput
              disabled={submitPending || submitComplete}
              value={name}
              hasErrors={nameHasErrors}
              onChange={this.handleNameChange}
            />

            <label>Your Email *</label>
            <TextInput
              disabled={submitPending || submitComplete}
              value={email}
              hasErrors={emailHasErrors}
              onChange={this.handleEmailChange}
            />

            <label>Your Specialties & Interests (≥1)</label>
            {interests.map(i => (
              <CheckboxInput
                disabled={submitPending || submitComplete}
                key={i.id}
                value={i.id}
                label={i.value}
                checked={selectedInterests.includes(i.id)}
                onSelect={this.handleSelectInterest}
                onDeselect={this.handleDeselectInterest}
              />
            ))}

            <div className="controls">
              <Button
                label="Make Contact"
                disabled={!canSubmit || submitPending || submitComplete}
                onClick={this.handleFormSubmitClick}
              />
            </div>
            <div className="form-overlay" />
            <div className="form-thanks">Thanks for your interest!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default styled(ContactForm)`
  position: relative;

  > .base {
    background-color: ${palette.foreStandard};
    box-shadow: 0 0.3em 0 0 ${palette.foreDark};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: skewY(2.5deg);
    width: 100%;
  }

  > .content {
    padding: 2em 1em;
    position: relative;

    h2 {
      color: ${palette.foreDark};
      font-size: 1.5em;
      margin-bottom: 1em;
    }

    .callout {
      margin-bottom: 2em;
      position: relative;

      .callout-icon {
        left: -0.5em;
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        width: 4em;
      }

      p {
        color: ${palette.base};
        font-size: 1.2em;
        margin-left: 3.5em;
      }
    }

    .form {
      position: relative;

      > label {
        color: ${palette.dark};
        display: block;
        font-size: 0.9em;
      }

      .controls {
        margin-top: 2em;
        text-align: right;
      }

      .form-overlay {
        background-color: ${palette.foreStandard};
        bottom: -0.2em;
        left: -0.2em;
        opacity: 0;
        position: absolute;
        right: -0.2em;
        top: 0;
        transition: opacity 0.1s ease-in-out, visibility: 0.1s linear;
        visibility: hidden;
      }

      .form-thanks {
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
        visibility: hidden;
        transform: translate(-50%, 0%);
        transition: transform 0.2s ease-out, opacity 0.2s ease-out, visibility 0.2s linear;
      }
    }

    ${TextInput} {
      margin-bottom: 1em;
    }
  }

  &.submit-pending {
    > .content .form .form-overlay {
      opacity: 0.5;
      visibility: visible
    }
  }

  &.submit-complete {
    > .content .form {
      .form-overlay {
        opacity: 1;
        visibility: visible
      }

      .form-thanks {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%);
      }
    }
  }

  ${mediaMinWidth.phoneHuge`
    > .content {
      padding: 2em;
    }
  `};

  ${mediaMinWidth.tablet`
    > .content {
      .callout {
        .callout-icon {
          width: 5em;
          left: -4.5em;
        }

        p {
          margin-left: 1.5em;
        }
      }
    }
  `};
`
