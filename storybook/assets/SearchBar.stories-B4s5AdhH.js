import{P as l}from"./PdfViewerSearchBar-gXzZxV5K.js";import"./iframe-BIk6y3D2.js";import"./preload-helper-Dp1pzeXC.js";import"./chevron-up-B-7SS0_R.js";import"./svgIconContainer-ClEpVk-E.js";import"./index-BrxLtgxq.js";import"./chevron-down-c1DUM2ML.js";import"./cross-Wh0LPwEp.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,I={title:"Experimental/PdfViewer/Building Blocks/SearchBar",component:l,args:{query:"",totalMatches:0,currentMatchIndex:0,onQueryChange:e(),onNext:e(),onPrev:e(),onClose:e()},argTypes:{query:{description:"Current search query text",control:"text"},totalMatches:{description:"Total number of matches found",control:{type:"number",min:0}},currentMatchIndex:{description:"Index of the currently highlighted match (0-indexed)",control:{type:"number",min:0}}}},r={},t={args:{query:"trace",totalMatches:12,currentMatchIndex:3}},a={args:{query:"xyznonexistent",totalMatches:0,currentMatchIndex:0}};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    query: "trace",
    totalMatches: 12,
    currentMatchIndex: 3
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    // cspell:disable-next-line
    query: "xyznonexistent",
    totalMatches: 0,
    currentMatchIndex: 0
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["Default","WithMatches","NoResults"];export{r as Default,a as NoResults,t as WithMatches,S as __namedExportsOrder,I as default};
