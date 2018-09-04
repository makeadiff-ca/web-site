import * as React from 'react'
import styled from 'styled-components'
import { classNames, mediaMinWidth, palette } from '../../styling'

interface Props {
  className?: string
  hasErrors?: boolean
  onChange(value: string): void
  value: string
}

class TextInput extends React.PureComponent<Props> {
  handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    this.props.onChange(e.currentTarget.value)

  render() {
    const { className: propsClassName, hasErrors, value } = this.props
    const className = classNames({ 'has-errors': !!hasErrors }, propsClassName)

    return (
      <input className={className} value={value} onChange={this.handleChange} />
    )
  }
}

export default styled(TextInput)`
  background-color: ${palette.foreBright};
  border-radius: 0.2em;
  border: 1px solid ${palette.base};
  box-shadow: 0 0 0 0 ${palette.diffPosBase};
  box-sizing: border-box;
  color: ${palette.foreDark};
  font-size: 1em;
  margin: 0.2em 0;
  outline: none;
  padding: 0.5em;
  transition: box-shadow 0.1s ease-in-out;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 0.2em ${palette.diffPosBase};
  }

  &.has-errors {
    background-color: #eaacac;
  }
`
