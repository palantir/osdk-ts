import{j as n}from"./iframe-BwtdJUQ8.js";import{B as e}from"./BasePdfViewer-Bynx3l8n.js";import"./preload-helper-DJuGrF4Q.js";import"./index-ecbPEJsH.js";import"./BasePdfViewer.module.css-CB5GWPgH.js";import"./PdfViewerAnnotationLayer-d5DO8hKE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--AUpYIAW.js";import"./PdfViewerOutlineSidebar-DEnV5f19.js";import"./PdfViewerSidebarHeader-D1oL1CWs.js";import"./useBaseUiId-DlvOV9lG.js";import"./useControlled-CTxNl2GG.js";import"./CompositeRoot-iqzsGS7W.js";import"./CompositeItem-gNAn1-ON.js";import"./ToolbarRootContext-B6jDfH-i.js";import"./composite-DglRx_pb.js";import"./svgIconContainer-BpIR-cOm.js";import"./PdfViewerSearchBar-0LqmfD55.js";import"./chevron-up-DmLmV1CY.js";import"./chevron-down-DAI8xIlK.js";import"./cross-D5O7asJB.js";import"./PdfViewerSidebar-CTYTBU6S.js";import"./index-BkxqopTp.js";import"./index-D-6QZGaS.js";import"./index-NBYYlFiK.js";import"./PdfViewerToolbar-C7ganY9K.js";import"./Button-a-v4YEmM.js";import"./chevron-right-BRXBMNz7.js";import"./Input-Ckc7B0k2.js";import"./search-BMvzDH_4.js";import"./spin-C5YFjcuM.js";import"./error-B3Glsuys.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/6a0c4b3358f16657ee3a0a4438ffa5835232065a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
