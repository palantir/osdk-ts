import{P as l}from"./PdfViewerSearchBar-CwuMuaI0.js";import"./iframe-Bu2xKdiG.js";import"./preload-helper-CcA_CFJQ.js";import"./chevron-up-Bovi7biE.js";import"./svgIconContainer-D9vdOpuR.js";import"./index-DnkFbpFC.js";import"./chevron-down-ZyUjIbUX.js";import"./cross-BHnpLW3B.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,I={title:"Beta/DocumentViewer/Renderers/PdfViewer/Building Blocks/SearchBar",component:l,args:{query:"",totalMatches:0,currentMatchIndex:0,onQueryChange:e(),onNext:e(),onPrev:e(),onClose:e()},argTypes:{query:{description:"Current search query text",control:"text"},totalMatches:{description:"Total number of matches found",control:{type:"number",min:0}},currentMatchIndex:{description:"Index of the currently highlighted match (0-indexed)",control:{type:"number",min:0}}}},r={},t={args:{query:"trace",totalMatches:12,currentMatchIndex:3}},a={args:{query:"xyznonexistent",totalMatches:0,currentMatchIndex:0}};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    query: "trace",
    totalMatches: 12,
    currentMatchIndex: 3
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    // cspell:disable-next-line
    query: "xyznonexistent",
    totalMatches: 0,
    currentMatchIndex: 0
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Default","WithMatches","NoResults"];export{r as Default,a as NoResults,t as WithMatches,S as __namedExportsOrder,I as default};
