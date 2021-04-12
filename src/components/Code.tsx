import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
    <SyntaxHighlighter
      language={language || 'text'}
      showLineNumbers
      style={materialOceanic}
    >
      {code}
    </SyntaxHighlighter>
  </>
)

export default Code
