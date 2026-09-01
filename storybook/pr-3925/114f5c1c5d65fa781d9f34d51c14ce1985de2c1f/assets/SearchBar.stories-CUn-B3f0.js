import{P as y}from"./PdfViewerSearchBar-D6Knj1oe.js";import"./iframe-CuEjl7Uz.js";import"./preload-helper-Bnv-TItm.js";import"./chevron-up-BZnvYc8R.js";import"./svgIconContainer-Dd92hyPw.js";import"./index-BYfl2w_f.js";import"./chevron-down-CP7RGjpz.js";import"./cross-CXL6d4Nc.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,q={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/SearchBar",component:y,tags:["beta"],args:{query:"",totalMatches:0,currentMatchIndex:0,onQueryChange:e(),onNext:e(),onPrev:e(),onClose:e()},argTypes:{query:{description:"Current search query text",control:"text"},totalMatches:{description:"Total number of matches found",control:{type:"number",min:0}},currentMatchIndex:{description:"Index of the currently highlighted match (0-indexed)",control:{type:"number",min:0}}}},r={parameters:{docs:{source:{code:`// Fully controlled — you own the query and run the search yourself
<PdfViewerSearchBar
  query=""
  totalMatches={0}
  currentMatchIndex={0}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>`}}}},t={args:{query:"trace",totalMatches:12,currentMatchIndex:3},parameters:{docs:{source:{code:`// currentMatchIndex is 0-indexed; the bar displays it as "4 of 12"
<PdfViewerSearchBar
  query="trace"
  totalMatches={12}
  currentMatchIndex={3}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>`}}}},n={args:{query:"nonexistent",totalMatches:0,currentMatchIndex:0},parameters:{docs:{source:{code:`// A non-empty query with zero matches shows the no-results state and
// disables the next/prev buttons
<PdfViewerSearchBar
  query="nonexistent"
  totalMatches={0}
  currentMatchIndex={0}
  onQueryChange={setQuery}
  onNext={goToNextMatch}
  onPrev={goToPrevMatch}
  onClose={closeSearch}
/>`}}}};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// Fully controlled — you own the query and run the search yourself
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
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,h,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    query: "trace",
    totalMatches: 12,
    currentMatchIndex: 3
  },
  parameters: {
    docs: {
      source: {
        code: \`// currentMatchIndex is 0-indexed; the bar displays it as "4 of 12"
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
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var d,l,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    query: "nonexistent",
    totalMatches: 0,
    currentMatchIndex: 0
  },
  parameters: {
    docs: {
      source: {
        code: \`// A non-empty query with zero matches shows the no-results state and
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const T=["Default","WithMatches","NoResults"];export{r as Default,n as NoResults,t as WithMatches,T as __namedExportsOrder,q as default};
