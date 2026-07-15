import{P as u}from"./PdfViewerToolbar-DkszkJK3.js";import"./index-c-KUwE8v.js";import"./iframe-BQbGwNJm.js";import"./preload-helper-DZhVWGpL.js";import"./constants-DsXMS3N3.js";import"./Button-DIIydijW.js";import"./useBaseUiId-GT7f3Dl5.js";import"./svgIconContainer-Bkd6Vdtd.js";import"./chevron-right-Dq1G55qI.js";import"./Input-WeXDQawZ.js";import"./useControlled-DWqy833M.js";import"./index-BwjBTWX5.js";import"./index-N7hAlELw.js";import"./search-7Vs1LIzt.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,C={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Toolbar",component:u,tags:["beta"],args:{currentPage:1,numPages:14,scale:1,autoSize:!1,sidebarOpen:!1,enableDownload:!1,onPageChange:e(),onZoomIn:e(),onZoomOut:e(),onAutoSizeToggle:e(),onSearchOpen:e(),onSidebarToggle:e(),onDownload:e(),onRotateLeft:e(),onRotateRight:e()},argTypes:{currentPage:{description:"Current page number (1-indexed)",control:{type:"number",min:1}},numPages:{description:"Total number of pages in the document",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},sidebarOpen:{description:"Whether the sidebar toggle is in the open state",control:"boolean"},enableDownload:{description:"Whether the download button is visible",control:"boolean"}}},o={},r={args:{enableDownload:!0}},n={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0}};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
