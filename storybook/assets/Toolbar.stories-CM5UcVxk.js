import{P as u}from"./PdfViewerToolbar-PiUP5bj5.js";import"./index-BMotijlX.js";import"./iframe-Dl4wRsyk.js";import"./preload-helper-Dp1pzeXC.js";import"./constants-rggtfkKZ.js";import"./Button-BBvOUCzs.js";import"./useBaseUiId-DvykIkBU.js";import"./svgIconContainer-ZNRey--2.js";import"./chevron-right-D3O22I1Z.js";import"./Input-CHcIZl-Z.js";import"./useControlled-CpODBJNs.js";import"./index-DZ5kNgnc.js";import"./index-D0vI-Ljk.js";import"./minus-CGn7jnqc.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,E={title:"Experimental/PdfViewer/Building Blocks/Toolbar",component:u,args:{currentPage:1,numPages:14,scale:1,sidebarOpen:!1,enableDownload:!1,onPageChange:e(),onScaleChange:e(),onSearchOpen:e(),onSidebarToggle:e(),onDownload:e(),onRotateLeft:e(),onRotateRight:e()},argTypes:{currentPage:{description:"Current page number (1-indexed)",control:{type:"number",min:1}},numPages:{description:"Total number of pages in the document",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},sidebarOpen:{description:"Whether the sidebar toggle is in the open state",control:"boolean"},enableDownload:{description:"Whether the download button is visible",control:"boolean"}}},o={},r={args:{enableDownload:!0}},a={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0}};var n,t,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    currentPage: 7,
    numPages: 14,
    scale: 1.5,
    sidebarOpen: true
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const R=["Default","WithDownload","MidDocument"];export{o as Default,a as MidDocument,r as WithDownload,R as __namedExportsOrder,E as default};
