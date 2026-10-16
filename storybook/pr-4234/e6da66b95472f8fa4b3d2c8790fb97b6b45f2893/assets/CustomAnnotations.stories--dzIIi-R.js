import{j as n}from"./iframe-BoRHmw1P.js";import{B as e}from"./BasePdfViewer-Cg4p4TlZ.js";import"./preload-helper-BwC4djfE.js";import"./index-CKE1HitJ.js";import"./BasePdfViewer.module.css-BYkqOraC.js";import"./PdfViewerAnnotationLayer-YL10K-lQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9zktqM7.js";import"./PdfViewerOutlineSidebar-BqgNZU4d.js";import"./PdfViewerSidebarHeader-BgoH4yeS.js";import"./useBaseUiId-CclY9vCT.js";import"./useControlled-DCVjIVG_.js";import"./CompositeRoot-BfyIfqM1.js";import"./CompositeItem-BuKhldON.js";import"./ToolbarRootContext-CcVDjx55.js";import"./composite-NGGk8Cjx.js";import"./svgIconContainer-BiIenURc.js";import"./PdfViewerSearchBar-BXhVKu1l.js";import"./chevron-up-DPtMsXVg.js";import"./chevron-down-DOBMuKk4.js";import"./cross-CXHDS3ru.js";import"./PdfViewerSidebar-DxbKDVkM.js";import"./index-DupFExnL.js";import"./index-DtzOCkwB.js";import"./index-CrIjACAu.js";import"./PdfViewerToolbar-Dr50gB9n.js";import"./Button-D_pTSnh0.js";import"./chevron-right-C4_t9LDs.js";import"./Input-C1OYcJfy.js";import"./search-DY5E4Hwb.js";import"./spin-B62TyaNK.js";import"./error-sO_QuGwO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4234/e6da66b95472f8fa4b3d2c8790fb97b6b45f2893/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
