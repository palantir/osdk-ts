import{P as l}from"./PdfViewerSearchBar-Bl8vV7Dk.js";import"./iframe-BeCKStTi.js";import"./preload-helper-BICrzKRt.js";import"./chevron-up-BthBkyrK.js";import"./svgIconContainer-D-9_AOAs.js";import"./index-BfYzXW_3.js";import"./chevron-down-BtABU6Ff.js";import"./cross-DDXI9CZ5.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,I={argTypes:{currentMatchIndex:{control:{min:0,type:"number"},description:"Index of the currently highlighted match (0-indexed)"},query:{control:"text",description:"Current search query text"},totalMatches:{control:{min:0,type:"number"},description:"Total number of matches found"}},args:{currentMatchIndex:0,onClose:e(),onNext:e(),onPrev:e(),onQueryChange:e(),query:"",totalMatches:0},component:l,tags:["beta"],title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/SearchBar"},t={},r={args:{currentMatchIndex:3,query:"trace",totalMatches:12}},a={args:{currentMatchIndex:0,query:"xyznonexistent",totalMatches:0}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    currentMatchIndex: 3,
    query: "trace",
    totalMatches: 12
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentMatchIndex: 0,
    // cspell:disable-next-line
    query: "xyznonexistent",
    totalMatches: 0
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Default","WithMatches","NoResults"];export{t as Default,a as NoResults,r as WithMatches,S as __namedExportsOrder,I as default};
