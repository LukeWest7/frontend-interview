import styled from 'styled-components'

const Path = styled.path`
  fill: ${({ hasFill, accent }) =>
    hasFill
        ? accent
        ? 'var(--glsr-accent-colour)'
        : 'var(--glsr-text-colour)'
        : null};
  stroke: ${({ hasStroke, accent }) =>
    hasStroke
        ? accent
        ? 'var(--glsr-accent-colour)'
        : 'var(--glsr-text-colour)'
        : null};
`

export default Path
