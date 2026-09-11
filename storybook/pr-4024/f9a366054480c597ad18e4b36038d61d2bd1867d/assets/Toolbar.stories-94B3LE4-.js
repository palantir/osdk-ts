import{P as m}from"./PdfViewerToolbar-CEtgVkKY.js";import"./index-Dz_M8fMm.js";import"./iframe-jMwYipi7.js";import"./preload-helper-DuATZxWQ.js";import"./constants-DsXMS3N3.js";import"./Button-CQ-F38oG.js";import"./useBaseUiId-CowvthfG.js";import"./svgIconContainer-C67djf6q.js";import"./chevron-right-BPVe899G.js";import"./Input-yW4xW1y2.js";import"./useControlled-CkNav0ZD.js";import"./index-_q0G2ZtV.js";import"./index-DEfzi2BY.js";import"./search-CZYRjLGu.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,V={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Toolbar",component:m,tags:["beta"],args:{currentPage:1,numPages:14,scale:1,autoSize:!1,sidebarOpen:!1,enableDownload:!1,onPageChange:e(),onZoomIn:e(),onZoomOut:e(),onAutoSizeToggle:e(),onSearchOpen:e(),onSidebarToggle:e(),onDownload:e(),onRotateLeft:e(),onRotateRight:e()},argTypes:{currentPage:{description:"Current page number (1-indexed)",control:{type:"number",min:1}},numPages:{description:"Total number of pages in the document",control:{type:"number",min:1}},scale:{description:"Current zoom scale",control:{type:"number",min:.25,max:5,step:.25}},sidebarOpen:{description:"Whether the sidebar toggle is in the open state",control:"boolean"},enableDownload:{description:"Whether the download button is visible",control:"boolean"}}},o={parameters:{docs:{source:{code:`// Fully controlled — every button is a callback you wire to your own state
<PdfViewerToolbar
  currentPage={1}
  numPages={14}
  scale={1}
  autoSize={false}
  sidebarOpen={false}
  enableDownload={false}
  onPageChange={setCurrentPage}
  onZoomIn={zoomIn}
  onZoomOut={zoomOut}
  onAutoSizeToggle={toggleAutoSize}
  onSearchOpen={openSearch}
  onSidebarToggle={toggleSidebar}
  onDownload={downloadPdf}
  onRotateLeft={rotateLeft}
  onRotateRight={rotateRight}
/>`}}}},n={args:{enableDownload:!0},parameters:{docs:{source:{code:`// The download button is hidden unless enableDownload is set
<PdfViewerToolbar
  currentPage={1}
  numPages={14}
  scale={1}
  enableDownload
  onDownload={downloadPdf}
  {...otherHandlers}
/>`}}}},a={args:{currentPage:7,numPages:14,scale:1.5,sidebarOpen:!0},parameters:{docs:{source:{code:`// Mid-document state: page input filled, zoom above 100%, sidebar toggle active
<PdfViewerToolbar
  currentPage={7}
  numPages={14}
  scale={1.5}
  sidebarOpen
  onPageChange={setCurrentPage}
  onSidebarToggle={toggleSidebar}
  {...otherHandlers}
/>`}}}};var r,t,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// Fully controlled — every button is a callback you wire to your own state
<PdfViewerToolbar
  currentPage={1}
  numPages={14}
  scale={1}
  autoSize={false}
  sidebarOpen={false}
  enableDownload={false}
  onPageChange={setCurrentPage}
  onZoomIn={zoomIn}
  onZoomOut={zoomOut}
  onAutoSizeToggle={toggleAutoSize}
  onSearchOpen={openSearch}
  onSidebarToggle={toggleSidebar}
  onDownload={downloadPdf}
  onRotateLeft={rotateLeft}
  onRotateRight={rotateRight}
/>\`
      }
    }
  }
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var l,d,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    enableDownload: true
  },
  parameters: {
    docs: {
      source: {
        code: \`// The download button is hidden unless enableDownload is set
<PdfViewerToolbar
  currentPage={1}
  numPages={14}
  scale={1}
  enableDownload
  onDownload={downloadPdf}
  {...otherHandlers}
/>\`
      }
    }
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    currentPage: 7,
    numPages: 14,
    scale: 1.5,
    sidebarOpen: true
  },
  parameters: {
    docs: {
      source: {
        code: \`// Mid-document state: page input filled, zoom above 100%, sidebar toggle active
<PdfViewerToolbar
  currentPage={7}
  numPages={14}
  scale={1.5}
  sidebarOpen
  onPageChange={setCurrentPage}
  onSidebarToggle={toggleSidebar}
  {...otherHandlers}
/>\`
      }
    }
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const _=["Default","WithDownload","MidDocument"];export{o as Default,a as MidDocument,n as WithDownload,_ as __namedExportsOrder,V as default};
