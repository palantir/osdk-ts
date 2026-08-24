import{P as m}from"./PdfViewerSearchBar-BY5lpwvR.js";import"./iframe-c92eWBTm.js";import"./preload-helper-C_mEB70A.js";import"./chevron-up-OPw4HblS.js";import"./svgIconContainer-BR-sWY_B.js";import"./index-BNyL3dmc.js";import"./chevron-down-Bx1a8QAg.js";import"./cross-DLdKHUYj.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/SearchBar",component:m,tags:["beta"],args:{query:"",totalMatches:0,currentMatchIndex:0,onQueryChange:e(),onNext:e(),onPrev:e(),onClose:e()},argTypes:{query:{description:"Current search query text",control:"text"},totalMatches:{description:"Total number of matches found",control:{type:"number",min:0}},currentMatchIndex:{description:"Index of the currently highlighted match (0-indexed)",control:{type:"number",min:0}}}},r={parameters:{docs:{source:{code:`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

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
/>`}}}},n={args:{query:"xyznonexistent",totalMatches:0,currentMatchIndex:0},parameters:{docs:{source:{code:`import { PdfViewerSearchBar } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(d=(h=t.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,i,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    // cspell:disable-next-line
    query: "xyznonexistent",
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
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["Default","WithMatches","NoResults"];export{r as Default,n as NoResults,t as WithMatches,v as __namedExportsOrder,S as default};
