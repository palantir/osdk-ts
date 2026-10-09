import{j as n}from"./iframe-Cw3LH66c.js";import{B as e}from"./BasePdfViewer-CMtf9og6.js";import"./preload-helper-0zDabIei.js";import"./index-BEERWgVy.js";import"./BasePdfViewer.module.css-CXuZEjDM.js";import"./PdfViewerAnnotationLayer-BZac5sLH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-W7RF3olQ.js";import"./PdfViewerOutlineSidebar-CvVEFOpd.js";import"./PdfViewerSidebarHeader-D9d4OaOm.js";import"./useBaseUiId-BSwJaM6C.js";import"./useControlled-0OhiGPgb.js";import"./CompositeRoot-Df4xFFN1.js";import"./CompositeItem-C2idg_k-.js";import"./ToolbarRootContext-f4q0b_R5.js";import"./composite-DkWEa617.js";import"./svgIconContainer-By_Zx8bX.js";import"./PdfViewerSearchBar-CuqNfbq6.js";import"./chevron-up-B9HGNRu3.js";import"./chevron-down-DRmznTzQ.js";import"./cross-BxwRmAhN.js";import"./PdfViewerSidebar-DBbYnnuY.js";import"./index-DQ4AskLW.js";import"./index-Dvk9IgkK.js";import"./index-Di_GE7Jl.js";import"./PdfViewerToolbar-BxQ4c63Z.js";import"./Button-dLCYbHpS.js";import"./chevron-right-Dp0HuUfB.js";import"./Input-CtFwY591.js";import"./search-CZ_uh4ZV.js";import"./spin-30eDZTiR.js";import"./error-CmY3qZ0u.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/71c5563cc4db289d6b428a5c3ff2f604e0f432bd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
