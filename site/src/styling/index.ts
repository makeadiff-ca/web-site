import { css, SimpleInterpolation, InterpolationValue } from 'styled-components'

export const palette = {
  base: '#39455a',
  dark: '#408385',
  medium: '#a5c1a3',
  light: '#c5e2a1',
  foreStandard: '#f0ebc8',
  foreBright: '#ffffff',
  foreDark: '#262F3F',
  diffPosBase: '#298e60',
  diffPosIcon: '#94f20d',
  diffPosText: '#ffffff',
  diffNegBase: '#ad3e3e',
  diffNegIcon: '#f38050',
  diffNegText: '#f38050',
}

type TemplateStringFunction = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => InterpolationValue[]

function makeMediaMinWidth(sizeInEms: number): TemplateStringFunction {
  return (strings, ...interpolations) => css`
    @media (min-width: ${sizeInEms}em) {
      ${css(strings, ...interpolations)};
    }
  `
}

export const mediaMinWidth = {
  phone: makeMediaMinWidth(23),
  phoneLarge: makeMediaMinWidth(25),
  phoneHuge: makeMediaMinWidth(39),
  tablet: makeMediaMinWidth(48),
  tabletLarge: makeMediaMinWidth(64),
  desktopSmall: makeMediaMinWidth(74),
  desktop: makeMediaMinWidth(85),
  desktopLarge: makeMediaMinWidth(90),
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

export function classNames(
  map: { [key: string]: boolean },
  ...names: (string | undefined)[]
): string {
  const mappedNames = Object.keys(map).reduce(
    (acc, name) => {
      if (map[name]) {
        acc.push(name)
      }
      return acc
    },
    [] as string[],
  )

  return mappedNames.concat(names.filter(isString)).join(' ')
}
