import{j as n}from"./iframe-I-ljmhXo.js";import{B as e}from"./BasePdfViewer-_Kl2Qftd.js";import"./preload-helper-M9MPg2Uh.js";import"./index-DHgdi-G8.js";import"./BasePdfViewer.module.css-D_xP46ZR.js";import"./PdfViewerAnnotationLayer-Ciu34NlU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwEWhxnz.js";import"./PdfViewerOutlineSidebar-CaWKBA9J.js";import"./PdfViewerSidebarHeader-DjhROo6j.js";import"./useBaseUiId-63vNftzH.js";import"./useControlled-D9MNKFMV.js";import"./CompositeRoot-Bp9PQYk4.js";import"./CompositeItem-BNvc3zNV.js";import"./ToolbarRootContext-Bgx3Oosy.js";import"./composite-BpdBkPyX.js";import"./svgIconContainer-DTF9Rr_D.js";import"./PdfViewerSearchBar-_61y6H1N.js";import"./chevron-up-DlHq8p3O.js";import"./chevron-down-C0rEk766.js";import"./cross--08b2Esz.js";import"./PdfViewerSidebar-uBJTcEX9.js";import"./index-BuOpPpDi.js";import"./index-B-RGy6eE.js";import"./index-wV7cEBRP.js";import"./PdfViewerToolbar-Cavk0tCZ.js";import"./Button-BPW8BJKe.js";import"./chevron-right-CDluNe-I.js";import"./Input-DgDEYrB1.js";import"./search-Xmbyz7ae.js";import"./spin-DxdeOJ0V.js";import"./error-Dy0kv_06.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4282/44238665633d8324e0ac9551f407d4bd900969ae/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
