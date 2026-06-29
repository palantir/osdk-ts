import{P as u}from"./PdfViewerToolbar-DNXsw1-h.js";import"./index-Bb5mjG_a.js";import"./iframe-UO4Ybkw7.js";import"./preload-helper-DiJvXCUK.js";import"./constants-DsXMS3N3.js";import"./Button-kE2g4U-0.js";import"./useBaseUiId-_4TB_TLw.js";import"./svgIconContainer-B_raw7t4.js";import"./chevron-right-BSmf3gxU.js";import"./Input-CEw-t_4F.js";import"./useControlled-CR06vBJn.js";import"./index-Bvhr_DAd.js";import"./index-DKFo-HpT.js";import"./minus-XZ5ilPR8.js";import"./search-B4rNT_0W.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,W={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Toolbar",component:u,tags:["beta"],args:{currentPage:1,numPages:14,scale:1,autoSize:!1,sidebarOpen:!1,enableDownload:!1,onPageChange:e(),onZoomIn:e(),onZoomOut:e(),onAutoSizeToggle:e(),onSearchOpen:e(),onSidebarToggle:e(),onDownload:e(),onRotateLeft:e(),onRotateRight:e()},argTypes:{currentPage:{description:"Current page number (1-indexed)",control:{type:"number",min:1}},numPages:{description:"Total number of pages in the document",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},sidebarOpen:{description:"Whether the sidebar toggle is in the open state",control:"boolean"},enableDownload:{description:"Whether the download button is visible",control:"boolean"}}},o={},r={args:{enableDownload:!0}},t={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0}};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    currentPage: 7,
    numPages: 14,
    scale: 1.5,
    sidebarOpen: true
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const z=["Default","WithDownload","MidDocument"];export{o as Default,t as MidDocument,r as WithDownload,z as __namedExportsOrder,W as default};
