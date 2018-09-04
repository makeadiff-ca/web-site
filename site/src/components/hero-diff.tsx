import * as React from 'react'
import styled from 'styled-components'
import DiffSymbol from './vectors/DiffSymbol'
import { classNames, palette } from '../styling'

interface Props {
  className?: string
  diffAdd?: boolean
  opacity?: number
  label: string
}

class HeroDiff extends React.PureComponent<Props> {
  render() {
    const { className: propsClassName, diffAdd, label, opacity } = this.props
    const className = classNames({ 'diff-add': !!diffAdd }, propsClassName)

    return (
      <div className={className} style={{ opacity: opacity || 1 }}>
        <DiffSymbol />
        <span className="label">{label}</span>
      </div>
    )
  }
}

export default styled(HeroDiff)`
  position: relative;
  font-family: 'Rockwell';

  ${DiffSymbol} {
    position: absolute;
    width: 1.6em;
    height: 1.6em;
    margin: 0.4em;

    .horizontal {
      fill: ${palette.diffNegIcon};
    }

    .vertical {
      display: none;
    }
  }

  .label {
    display: inline-block;
    padding: 0.4em 0.5em 0em 1.5em;
    font-size: 1.7em;
    background-color: ${palette.diffNegBase};
    color: ${palette.diffNegText};
  }

  &.diff-add {
    ${DiffSymbol} {
      .horizontal {
        fill: ${palette.diffPosIcon};
      }

      .vertical {
        display: block;
        fill: ${palette.diffPosIcon};
      }
    }

    .label {
      background-color: ${palette.diffPosBase};
      color: ${palette.diffPosText};
      text-shadow: 0 0.08em 0 ${palette.base};
    }
  }
`
