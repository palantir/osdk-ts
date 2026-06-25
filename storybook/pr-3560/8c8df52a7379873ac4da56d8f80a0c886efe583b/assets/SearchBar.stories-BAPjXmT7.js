import{P as l}from"./PdfViewerSearchBar-BprRUxEW.js";import"./iframe-Du3uM15W.js";import"./preload-helper-CklvEmIK.js";import"./chevron-up-CWewDj78.js";import"./svgIconContainer-CLb4tBtk.js";import"./index-Dy-Ae7RB.js";import"./chevron-down-DNZXBIAg.js";import"./cross-BWq8BmPL.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/SearchBar",component:l,tags:["beta"],args:{query:"",totalMatches:0,currentMatchIndex:0,onQueryChange:e(),onNext:e(),onPrev:e(),onClose:e()},argTypes:{query:{description:"Current search query text",control:"text"},totalMatches:{description:"Total number of matches found",control:{type:"number",min:0}},currentMatchIndex:{description:"Index of the currently highlighted match (0-indexed)",control:{type:"number",min:0}}}},t={},r={args:{query:"trace",totalMatches:12,currentMatchIndex:3}},a={args:{query:"xyznonexistent",totalMatches:0,currentMatchIndex:0}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
