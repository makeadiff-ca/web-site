import styled from 'styled-components'
import { mediaMinWidth } from '../styling'

export default styled.div`
  margin: 0 0.5em;

  ${mediaMinWidth.phoneHuge`
    margin: 0 1em;
  `};

  ${mediaMinWidth.tabletLarge`
    margin: 0 auto;
    max-width: 60em;
  `};
`
