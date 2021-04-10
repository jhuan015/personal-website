import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from 'styled-components'

// Override selection styles as orange on orange looks bad
const SyntaxHighlighterStyles = styled(SyntaxHighlighter)`
  * {
    &::selection {
      background: #accef7;
    }
    &::-moz-selection {
      background: #accef7;
    }
  }
`
interface Props {
  node: {
    code: React.ReactNode
    language: string
  }
}

/**
 * Code Serializer component for Sanity code-input.
 */
const Code: React.FC<Props> = ({ node: { language, code } }) => (
  <>
    <SyntaxHighlighterStyles
      language={language || 'text'}
      showLineNumbers
      style={materialOceanic}
    >
      {code}
    </SyntaxHighlighterStyles>
  </>
)

export default Code
