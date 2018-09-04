exports.__esModule = true

const getProps = config => {
  const props = []
  if (config.ref) props.push('svgRef')
  if (config.titleProp) props.push('title')
  if (config.expandProps) props.push('...props')
  if (props.length === 0) return '()'
  if (props.length === 1 && config.expandProps) return 'props'
  return `({ ${props.join(', ')} })`
}

exports.default = (code, config, state) => `
import * as React from 'react'
import styled from 'styled-components'

interface SVGProps extends React.HTMLProps<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>
}

const ${state.componentName}: React.SFC<SVGProps> = ${getProps(
  config,
)} => ${code}

export default styled(${state.componentName})\`\`
`
