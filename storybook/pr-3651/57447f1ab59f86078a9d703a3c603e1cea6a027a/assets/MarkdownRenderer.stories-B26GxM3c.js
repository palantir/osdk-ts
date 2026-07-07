import{j as t}from"./iframe-CsWLXGze.js";import{M as o}from"./MarkdownRenderer-Bn6Xhyg6.js";import"./preload-helper-CSH4YltX.js";import"./index-M4a-IfHf.js";const m=`# Sample Document

## Introduction

This is a **sample markdown** document that demonstrates the *MarkdownRenderer* component.

### Features

- Headings (h1–h6)
- **Bold** and *italic* text
- ~~Strikethrough~~ text
- [Links](https://example.com) and autolinked URLs
- Inline \`code\` and fenced code blocks
- Blockquotes
- Tables
- Ordered and unordered lists
- Task lists

## Code Example

\`\`\`typescript
import { MarkdownRenderer } from "@osdk/react-components/experimental/markdown-renderer";

function App() {
  return <MarkdownRenderer content="# Hello World" />;
}
\`\`\`

## Blockquote

> This is a blockquote. It can span multiple lines and is styled with a
> left border accent.

## Table

| Feature      | Supported |
| ------------ | --------- |
| Headings     | Yes       |
| Bold/Italic  | Yes       |
| Code blocks  | Yes       |
| Tables       | Yes       |
| Images       | Yes       |

## Strikethrough

This feature is ~~deprecated~~ and should no longer be used. Use the ~~old API~~ new API instead.

## Task Lists

- [x] Set up project structure
- [x] Add markdown rendering
- [ ] Write unit tests
- [ ] Update documentation

## Autolinked URLs

Visit https://example.com for more information, or email contact@example.com.

You can also use explicit links like [GitHub](https://github.com).

## Lists

### Ordered

1. First item
2. Second item
3. Third item

### Unordered

- Item A
- Item B
- Item C

---

*End of document.*
`,x={title:"Components/DocumentViewer/Renderers/MarkdownRenderer",component:o,tags:["beta"],args:{content:m},render:n=>t.jsx("div",{style:{height:"600px"},children:t.jsx(o,{...n})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"Markdown text to render",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"}}},e={},r={args:{content:`# Hello World

A simple paragraph with **bold** and *italic*.`},render:n=>t.jsx("div",{style:{height:"300px"},children:t.jsx(o,{...n})}),parameters:{docs:{source:{code:`import { MarkdownRenderer } from "@osdk/react-components/experimental/markdown-renderer";

<MarkdownRenderer content="# Hello World\\n\\nA simple paragraph with **bold** and *italic*." />`}}}};var a,s,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,c,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: "# Hello World\\n\\nA simple paragraph with **bold** and *italic*."
  },
  render: (args: MarkdownRendererProps) => <div style={{
    height: "300px"
  }}>
      <MarkdownRenderer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { MarkdownRenderer } from "@osdk/react-components/experimental/markdown-renderer";

<MarkdownRenderer content="# Hello World\\\\n\\\\nA simple paragraph with **bold** and *italic*." />\`
      }
    }
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const g=["WithContent","MinimalContent"];export{r as MinimalContent,e as WithContent,g as __namedExportsOrder,x as default};
