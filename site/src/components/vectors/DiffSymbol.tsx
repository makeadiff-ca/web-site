import * as React from 'react'
import styled from 'styled-components'

interface SVGProps extends React.HTMLProps<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
}

const DiffSymbol: React.SFC<SVGProps> = ({ svgRef, ...props }) => (
  <svg
    viewBox="0 0 90 90"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    ref={svgRef}
    {...props}
  >
    <path className="vertical" d="M30 0h30v90H30z" />
    <path className="horizontal" d="M90 60V30H0v30h90z" />
  </svg>
)

export default styled(DiffSymbol)``
