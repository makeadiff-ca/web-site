import * as React from 'react'
import styled from 'styled-components'
import { mediaMinWidth, palette } from '../../styling'

interface Props {
  className?: string
  disabled?: boolean
  label: string
  onClick(): void
}

class Button extends React.PureComponent<Props> {
  render() {
    const { className, disabled, label, onClick } = this.props

    return (
      <button
        className={className}
        disabled={disabled}
        type="button"
        onClick={onClick}
      >
        {label}
      </button>
    )
  }
}

export default styled(Button)`
  background-color: ${palette.diffPosBase};
  border-radius: 0.2em;
  border: none;
  box-shadow: 0 0.2em 0 0 ${palette.foreDark};
  color: ${palette.foreBright};
  font-size: 1em;
  font-weight: bold;
  padding: 0.4em 0.7em;
  transition: box-shadow 0.1s ease-in-out;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 0.2em ${palette.diffPosBase};
  }

  &[disabled] {
    background-color: transparent;
    box-shadow: 0 0 0 0.1em ${palette.dark};
    color: ${palette.dark};
    cursor: not-allowed;
    opacity: 0.5;
  }
`
