import React from 'react';
import { CodeBlock , dracula} from 'react-code-blocks';
import './copyblock.css'

export default function CopyBlock({ code, language, showLineNumbers, startingLineNumber }) {
    return (
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={dracula}
      />
    );
}
