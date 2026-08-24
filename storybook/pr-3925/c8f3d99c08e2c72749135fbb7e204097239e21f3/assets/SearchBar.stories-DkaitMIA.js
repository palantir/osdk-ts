import{P as p}from"./PdfViewerSearchBar-Bhdx89El.js";import"./iframe-h1qnQQVx.js";import"./preload-helper-ADovFD1C.js";import"./chevron-up-Bzvysagl.js";import"./svgIconContainer-Ca3ASY3c.js";import"./index-DD5KPom6.js";import"./chevron-down-CivjtU0i.js";import"./cross-D4ej-8wY.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/SearchBar",component:p,tags:["beta"],args:{query:"",totalMatches:0,currentMatchIndex:0,onQueryChange:e(),onNext:e(),onPrev:e(),onClose:e()},argTypes:{query:{description:"Current search query text",control:"text"},totalMatches:{description:"Total number of matches found",control:{type:"number",min:0}},currentMatchIndex:{description:"Index of the currently highlighted match (0-indexed)",control:{type:"number",min:0}}}},r={parameters:{docs:{source:{code:`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

// Fully controlled — you own the query and run the search yourself
<PdfViewerSearchBar
  query=""
  totalMatches={0}
  currentMatchIndex={0}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>`}}}},t={args:{query:"trace",totalMatches:12,currentMatchIndex:3},parameters:{docs:{source:{code:`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

// currentMatchIndex is 0-indexed; the bar displays it as "4 of 12"
<PdfViewerSearchBar
  query="trace"
  totalMatches={12}
  currentMatchIndex={3}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>`}}}},n={args:{query:"nonexistent",totalMatches:0,currentMatchIndex:0},parameters:{docs:{source:{code:`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

// A non-empty query with zero matches shows the no-results state and
// disables the next/prev buttons
<PdfViewerSearchBar
  query="nonexistent"
  totalMatches={0}
  currentMatchIndex={0}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>`}}}};var o,a,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

// Fully controlled — you own the query and run the search yourself
<PdfViewerSearchBar
  query=""
  totalMatches={0}
  currentMatchIndex={0}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>\`
      }
    }
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var s,h,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    query: "trace",
    totalMatches: 12,
    currentMatchIndex: 3
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

// currentMatchIndex is 0-indexed; the bar displays it as "4 of 12"
<PdfViewerSearchBar
  query="trace"
  totalMatches={12}
  currentMatchIndex={3}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>\`
      }
    }
  }
}`,...(d=(h=t.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,i,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    query: "nonexistent",
    totalMatches: 0,
    currentMatchIndex: 0
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

// A non-empty query with zero matches shows the no-results state and
// disables the next/prev buttons
<PdfViewerSearchBar
  query="nonexistent"
  totalMatches={0}
  currentMatchIndex={0}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>\`
      }
    }
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["Default","WithMatches","NoResults"];export{r as Default,n as NoResults,t as WithMatches,v as __namedExportsOrder,S as default};
