import{j as n}from"./iframe-tTpw548-.js";import{B as e}from"./BasePdfViewer-BRrJpTeJ.js";import"./preload-helper-BfLQzAkp.js";import"./index-CfoC8y9T.js";import"./BasePdfViewer.module.css-Cx7TX7qR.js";import"./PdfViewerAnnotationLayer-zvaF8iJv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQRXSlfc.js";import"./PdfViewerOutlineSidebar-Dc0Czl-k.js";import"./PdfViewerSidebarHeader-D6BFwbNz.js";import"./useBaseUiId-CAQFrlAe.js";import"./useControlled-C7x4-FQ_.js";import"./CompositeRoot-CdUL1vQ-.js";import"./CompositeItem-CCzTqTt9.js";import"./ToolbarRootContext-CJ6qVhPJ.js";import"./composite-CJkTEPcI.js";import"./svgIconContainer-T3TG2U7K.js";import"./PdfViewerSearchBar-CrxdanLe.js";import"./chevron-up-CyHxY_di.js";import"./chevron-down-EEhO5M0S.js";import"./cross-CLKnrtat.js";import"./PdfViewerSidebar-BxpzDjEz.js";import"./index-LL3h6rZ2.js";import"./index-BP7y8sZT.js";import"./index-D2O-B8gB.js";import"./PdfViewerToolbar-BMobUpnY.js";import"./Button-GJuyUH0v.js";import"./chevron-right-CWSVP7VL.js";import"./Input-HFN8Ab80.js";import"./search-DermPgDt.js";import"./spin-tIL5zAph.js";import"./error-DVgq5BdO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4334/049dc465d9477c5ea6e3fb19a2ef02dd774e70fd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
