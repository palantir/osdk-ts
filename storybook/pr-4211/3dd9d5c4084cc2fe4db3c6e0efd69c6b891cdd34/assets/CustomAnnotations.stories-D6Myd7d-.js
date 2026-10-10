import{j as n}from"./iframe-5u9ZtrJt.js";import{B as e}from"./BasePdfViewer-DQf2eZzc.js";import"./preload-helper-CuQanuSU.js";import"./index-DavgBEP1.js";import"./BasePdfViewer.module.css-0Txr0oQd.js";import"./PdfViewerAnnotationLayer-C7mFo301.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-F_svd_s1.js";import"./PdfViewerOutlineSidebar-DV2FgxN2.js";import"./PdfViewerSidebarHeader-C02C5RF3.js";import"./useBaseUiId-CQYNNsxK.js";import"./useControlled-B5brBFEZ.js";import"./CompositeRoot-CktCCUBO.js";import"./CompositeItem-DF5M0Q62.js";import"./ToolbarRootContext-BdaDw2wr.js";import"./composite-CGw-Ihls.js";import"./svgIconContainer-jQAOa3hY.js";import"./PdfViewerSearchBar-BhANi3bQ.js";import"./chevron-up-erQLLJga.js";import"./chevron-down-B3Fv0w50.js";import"./cross-BpzwhQi5.js";import"./PdfViewerSidebar-DPzS-IYS.js";import"./index-vMKc9Vfa.js";import"./index-DMFEApmF.js";import"./index-C7XPHJ8o.js";import"./PdfViewerToolbar-DqAD9oZH.js";import"./Button-ChR8k8XV.js";import"./chevron-right-BJRRHHgZ.js";import"./Input-D8eW-et_.js";import"./search-JNpB3WRd.js";import"./spin-BSMBirL8.js";import"./error-CQ8cV0Cv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4211/3dd9d5c4084cc2fe4db3c6e0efd69c6b891cdd34/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
