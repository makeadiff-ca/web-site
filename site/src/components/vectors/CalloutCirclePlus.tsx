import * as React from 'react'
import styled from 'styled-components'

interface SVGProps extends React.HTMLProps<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
}

const CalloutCirclePlus: React.SFC<SVGProps> = ({ svgRef, ...props }) => (
  <svg
    viewBox="0 0 60 64"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    ref={svgRef}
    {...props}
  >
    <circle cx={30} cy={33.938} r={30} fill="#39455a" />
    <circle cx={30} cy={30} r={30} fill="#298e60" />
    <path
      d="M13.357 24.452h11.095V13.357h11.096v11.095h11.095v11.096H35.548v11.095H24.452V35.548H13.357V24.452z"
      fill="#94f20d"
    />
  </svg>
)

export default styled(CalloutCirclePlus)``
