import{P as u}from"./PdfViewerToolbar-CFuJtoIz.js";import"./index-Ba8E2uBZ.js";import"./iframe-DszJazu2.js";import"./preload-helper-Bzu0i3_D.js";import"./constants-B8f3UZHi.js";import"./Button-CitqSRfE.js";import"./useBaseUiId-uQFZhVSw.js";import"./svgIconContainer-CEdnDZiu.js";import"./chevron-right-CY9ogxpg.js";import"./Input-DmxxNVOR.js";import"./useControlled-n_Yv0c_i.js";import"./index-DjghywXo.js";import"./index-gwcYQEqp.js";import"./minus-B1UoTyUl.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,B={title:"Beta/DocumentViewer/Renderers/PdfViewer/Building Blocks/Toolbar",component:u,args:{currentPage:1,numPages:14,scale:1,autoSize:!1,sidebarOpen:!1,enableDownload:!1,onPageChange:e(),onZoomIn:e(),onZoomOut:e(),onAutoSizeToggle:e(),onSearchOpen:e(),onSidebarToggle:e(),onDownload:e(),onRotateLeft:e(),onRotateRight:e()},argTypes:{currentPage:{description:"Current page number (1-indexed)",control:{type:"number",min:1}},numPages:{description:"Total number of pages in the document",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},sidebarOpen:{description:"Whether the sidebar toggle is in the open state",control:"boolean"},enableDownload:{description:"Whether the download button is visible",control:"boolean"}}},o={},r={args:{enableDownload:!0}},n={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0}};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    currentPage: 7,
    numPages: 14,
    scale: 1.5,
    sidebarOpen: true
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const W=["Default","WithDownload","MidDocument"];export{o as Default,n as MidDocument,r as WithDownload,W as __namedExportsOrder,B as default};
