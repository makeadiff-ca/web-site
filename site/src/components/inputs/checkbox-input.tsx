import * as React from 'react'
import styled from 'styled-components'
import { mediaMinWidth, palette } from '../../styling'

interface Props {
  className?: string
  disabled?: boolean
  label: string
  value: number
  checked: boolean
  onSelect(value: number): void
  onDeselect(value: number): void
}

class CheckboxInput extends React.PureComponent<Props> {
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, onSelect, onDeselect } = this.props
    e.currentTarget.checked ? onSelect(value) : onDeselect(value)
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const { checked, onSelect, onDeselect, value } = this.props
      e.preventDefault()
      checked ? onDeselect(value) : onSelect(value)
    }
  }

  handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      e.preventDefault()
      e.stopPropagation()
      e.currentTarget.focus()
    }
  }

  render() {
    const { className, checked, disabled, label, value } = this.props

    return (
      <div
        className={className}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleFocus}
      >
        <label className="checkbox-label-wrapper" tabIndex={-1}>
          <input
            disabled={disabled}
            type="checkbox"
            value={value}
            onChange={this.handleChange}
            checked={checked}
            tabIndex={-1}
          />
          <span>{label}</span>
        </label>
      </div>
    )
  }
}

export default styled(CheckboxInput)`
  border-radius: 0.2em;
  box-shadow: 0 0 0 0 ${palette.diffPosBase};
  margin: 0.2em 0;
  transition: box-shadow 0.1s ease-in-out;

  > label {
    color: ${palette.foreDark};
    cursor: pointer;
    display: flex;
    font-size: 1em;

    span {
      flex: 1 1;
      margin-left: 0.25em;
    }
  }

  &:hover {
    box-shadow: 0 0 0 0.1em ${palette.dark};
  }

  &:focus {
    box-shadow: 0 0 0 0.2em ${palette.diffPosBase};
  }
`
