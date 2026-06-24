import{P as l}from"./PdfViewerSearchBar-BDcf7OZR.js";import"./iframe-DMxx2zRm.js";import"./preload-helper-CZp4bVzU.js";import"./chevron-up-BrR1MLEV.js";import"./svgIconContainer-Cxr5K9bz.js";import"./index-DrfViuQB.js";import"./chevron-down-D2J8c7da.js";import"./cross-CvK6XiNa.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/SearchBar",component:l,tags:["beta"],args:{query:"",totalMatches:0,currentMatchIndex:0,onQueryChange:e(),onNext:e(),onPrev:e(),onClose:e()},argTypes:{query:{description:"Current search query text",control:"text"},totalMatches:{description:"Total number of matches found",control:{type:"number",min:0}},currentMatchIndex:{description:"Index of the currently highlighted match (0-indexed)",control:{type:"number",min:0}}}},t={},r={args:{query:"trace",totalMatches:12,currentMatchIndex:3}},a={args:{query:"xyznonexistent",totalMatches:0,currentMatchIndex:0}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    query: "trace",
    totalMatches: 12,
    currentMatchIndex: 3
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    // cspell:disable-next-line
    query: "xyznonexistent",
    totalMatches: 0,
    currentMatchIndex: 0
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Default","WithMatches","NoResults"];export{t as Default,a as NoResults,r as WithMatches,S as __namedExportsOrder,I as default};
