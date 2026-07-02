import{P as u}from"./PdfViewerToolbar-x5cOyPac.js";import"./index-Di6vk80_.js";import"./iframe-CF2-Sj3u.js";import"./preload-helper-DGiL_0YC.js";import"./constants-DsXMS3N3.js";import"./Button-D2M1A0dK.js";import"./useBaseUiId-DnMjxbKf.js";import"./svgIconContainer-Eu_OnahF.js";import"./chevron-right-D9VwHvGW.js";import"./Input-DNRQ_uyR.js";import"./useControlled-C2elAlNO.js";import"./index-B1Ce7KrJ.js";import"./index-DbSzIC9m.js";import"./minus-C2Q4EcYx.js";import"./search-CO3O3W7D.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,W={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Toolbar",component:u,tags:["beta"],args:{currentPage:1,numPages:14,scale:1,autoSize:!1,sidebarOpen:!1,enableDownload:!1,onPageChange:e(),onZoomIn:e(),onZoomOut:e(),onAutoSizeToggle:e(),onSearchOpen:e(),onSidebarToggle:e(),onDownload:e(),onRotateLeft:e(),onRotateRight:e()},argTypes:{currentPage:{description:"Current page number (1-indexed)",control:{type:"number",min:1}},numPages:{description:"Total number of pages in the document",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},sidebarOpen:{description:"Whether the sidebar toggle is in the open state",control:"boolean"},enableDownload:{description:"Whether the download button is visible",control:"boolean"}}},o={},r={args:{enableDownload:!0}},t={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0}};var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
