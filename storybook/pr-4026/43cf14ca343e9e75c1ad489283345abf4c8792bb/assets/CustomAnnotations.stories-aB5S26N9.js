import{j as n}from"./iframe-BOlAF3V1.js";import{B as e}from"./BasePdfViewer-ujjL7So8.js";import"./preload-helper-B8-M1e1R.js";import"./index-DHGHpbde.js";import"./BasePdfViewer.module.css-01I21Aod.js";import"./PdfViewerAnnotationLayer-CNGsB36F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEFNEQGl.js";import"./PdfViewerOutlineSidebar-Dr6hDPBR.js";import"./PdfViewerSidebarHeader-CbRqVrQX.js";import"./useBaseUiId-DKEtUdQs.js";import"./useControlled-XB4dOcfe.js";import"./CompositeRoot-BwIZsC1Y.js";import"./CompositeItem-DUqi3n0Z.js";import"./ToolbarRootContext-CrA83z4-.js";import"./composite-uQCx7Ami.js";import"./svgIconContainer-BI7oIE-s.js";import"./PdfViewerSearchBar-DbTaaXsf.js";import"./chevron-up-CZxdzJsY.js";import"./chevron-down-1Vj4zZ-s.js";import"./cross-4uTXI33L.js";import"./PdfViewerSidebar-ClkNV3Zt.js";import"./index-8QnQJeqI.js";import"./index-D0SLMQsQ.js";import"./index-Ckc7ROJV.js";import"./PdfViewerToolbar-C6Y8dYKV.js";import"./Button-C_Kq6X6A.js";import"./chevron-right-Dg1r6o8M.js";import"./Input-DPiHLqc9.js";import"./search-dtRuG4ZW.js";import"./spin-gKLyPwTn.js";import"./error-mE4pvPha.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4026/43cf14ca343e9e75c1ad489283345abf4c8792bb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
