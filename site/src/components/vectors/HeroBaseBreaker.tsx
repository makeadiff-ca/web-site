import * as React from 'react'
import styled from 'styled-components'

interface SVGProps extends React.HTMLProps<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
}

const HeroBaseBreaker: React.SFC<SVGProps> = ({ svgRef, ...props }) => (
  <svg
    viewBox="0 0 868 400"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    ref={svgRef}
    {...props}
  >
    <path
      d="M786.419 236.959h80.738v80.738h-80.738v80.739H705.68v-80.739h-80.738v-26.55h-27.345v29.956h-29.956v-29.956h-29.956v-29.956h29.956v-29.956h29.956v29.956h27.345v-24.232h80.738v-80.738h80.739v80.738zm-570.184 77.104h-21.428v-21.428h-21.429v-21.429h21.429v-21.428h21.428v21.428h21.428v21.429h-21.428v21.428zm116.558-.815h-29.621v-29.621h-29.621v-29.62h29.621v-29.621h29.621v29.621h29.62v29.62h-29.62v29.621zm92.367-42.101h19.183v19.183H425.16v19.184h-19.184V290.33h-19.184v-19.183h19.184v-19.184h19.184v19.184zM77.625 281.689h12.472v12.473H77.625v12.472H65.152v-12.472H52.68v-12.473h12.472v-12.472h12.473v12.472zm62.882-6.453h12.473v12.472h-12.473v12.472h-12.472v-12.472h-12.472v-12.472h12.472v-12.473h12.472v12.473zm-136.058-1.43h2.225v2.224H4.449v2.225H2.225v-2.225H0v-2.224h2.225v-2.225h2.224v2.225zm101.655-14.375h7.388v7.388h-7.388v7.388h-7.388v-7.388h-7.388v-7.388h7.388v-7.387h7.388v7.387zm271.33 4.972h3.971v3.971h-3.971v3.972h-3.972v-3.972h-3.971v-3.971h3.971v-3.971h3.972v3.971zM48.711 258.66h3.971v3.971h-3.971v3.972H44.74v-3.972h-3.972v-3.971h3.972v-3.971h3.971v3.971zm417.417-10.718h6.131v6.13h-6.131v6.131h-6.13v-6.131h-6.131v-6.13h6.131v-6.13h6.13v6.13zm61.318-61.384h36.582v36.582h-36.582v36.581h-36.581V223.14h-36.582v-36.582h36.582v-36.581h36.581v36.581zm29.545 60.056h3.971v3.971h-3.971v3.971h-3.971v-3.971h-3.972v-3.971h3.972v-3.971h3.971v3.971zm-319.821-1.899h3.971v3.972h-3.971v3.971h-3.971v-3.971h-3.972v-3.972h3.972v-3.971h3.971v3.971zm-73.693-15.164h3.972v3.972h-3.972v3.971h-3.971v-3.971h-3.971v-3.972h3.971v-3.971h3.971v3.971zm193.503-8.306h6.13v6.13h-6.13v6.131h-6.131v-6.131h-6.13v-6.13h6.13v-6.131h6.131v6.131zm468.549 4.98h2.224v2.224h-2.224v2.225h-2.225v-2.225h-2.224v-2.224h2.224V224h2.225v2.225zm-408.395-22.04h10.024v10.024h-10.024v10.024H407.11v-10.024h-10.024v-10.024h10.024v-10.024h10.024v10.024zm427.545 19.847h-10.647v-10.646h-10.646v-10.647h10.646v-10.646h10.647v10.646h10.646v10.647h-10.646v10.646zm-192.74-62.054h30.62v30.621h-30.62v30.621h-30.621v-30.621h-30.621v-30.621h30.621v-30.621h30.621v30.621zm166.742-5.03h12.997v12.998h-12.997v12.998h-12.998v-12.998h-12.998v-12.998h12.998v-12.997h12.998v12.997zm-363.637-19.894h12.998v12.998h-12.998v12.998h-12.998v-12.998h-12.998v-12.998h12.998v-12.998h12.998v12.998zm83.407-2.825h3.972v3.971h-3.972v3.972h-3.971V138.2h-3.971v-3.971h3.971v-3.971h3.971v3.971zm187.297-23.688h14.408v14.409h-14.408v14.408H711.34V124.95h-14.408v-14.409h14.408V96.133h14.408v14.408zM480.223 84.124h3.971v3.971h-3.971v3.971h-3.971v-3.971h-3.972v-3.971h3.972v-3.972h3.971v3.972zm292.453-25.768h3.971v3.971h-3.971v3.972h-3.971v-3.972h-3.972v-3.971h3.972v-3.971h3.971v3.971zM516.529 2.225h2.224v2.224h-2.224v2.225h-2.225V4.449h-2.224V2.225h2.224V0h2.225v2.225z"
      fill="#408385"
    />
  </svg>
)

export default styled(HeroBaseBreaker)``
