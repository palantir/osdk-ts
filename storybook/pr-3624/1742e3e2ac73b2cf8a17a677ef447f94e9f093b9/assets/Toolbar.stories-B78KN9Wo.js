import{P as u}from"./PdfViewerToolbar-s6o0ppC9.js";import"./index-BfYzXW_3.js";import"./iframe-BeCKStTi.js";import"./preload-helper-BICrzKRt.js";import"./constants-DsXMS3N3.js";import"./Button-to0u69wN.js";import"./useBaseUiId-COsIpFVh.js";import"./svgIconContainer-D-9_AOAs.js";import"./chevron-right-BFpwcuaa.js";import"./Input-fr7UgVSn.js";import"./useControlled-5Cxw9uoZ.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./search-CZf2_gwq.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={argTypes:{currentPage:{control:{min:1,type:"number"},description:"Current page number (1-indexed)"},enableDownload:{control:"boolean",description:"Whether the download button is visible"},numPages:{control:{min:1,type:"number"},description:"Total number of pages in the document"},scale:{control:{max:5,min:.25,step:.25,type:"number"},description:"Current zoom scale"},sidebarOpen:{control:"boolean",description:"Whether the sidebar toggle is in the open state"}},args:{autoSize:!1,currentPage:1,enableDownload:!1,numPages:14,onAutoSizeToggle:e(),onDownload:e(),onPageChange:e(),onRotateLeft:e(),onRotateRight:e(),onSearchOpen:e(),onSidebarToggle:e(),onZoomIn:e(),onZoomOut:e(),scale:1,sidebarOpen:!1},component:u,tags:["beta"],title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Toolbar"},o={},r={args:{enableDownload:!0}},n={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0}};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    currentPage: 7,
    numPages: 14,
    scale: 1.5,
    sidebarOpen: true
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const W=["Default","WithDownload","MidDocument"];export{o as Default,n as MidDocument,r as WithDownload,W as __namedExportsOrder,C as default};
