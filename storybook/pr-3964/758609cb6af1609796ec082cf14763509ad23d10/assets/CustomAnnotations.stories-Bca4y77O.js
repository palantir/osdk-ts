import{j as n}from"./iframe-O11Zq4F1.js";import{B as e}from"./BasePdfViewer--wruBoFZ.js";import"./preload-helper-DlwmVUfx.js";import"./index-JCX27zQ_.js";import"./BasePdfViewer.module.css-BAG8p3vM.js";import"./PdfViewerAnnotationLayer-C2a-9gDh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJbBjZI1.js";import"./PdfViewerOutlineSidebar-DlW9z-ww.js";import"./PdfViewerSidebarHeader-BEH48L_C.js";import"./useBaseUiId-Cu9t8yGo.js";import"./useControlled-B8YHL1ap.js";import"./CompositeRoot-CAOZhsn6.js";import"./CompositeItem-DLmG3BnZ.js";import"./ToolbarRootContext-tyPorBFs.js";import"./composite-CXM_4XfT.js";import"./svgIconContainer-niJASFYH.js";import"./PdfViewerSearchBar-ZzDQmiyH.js";import"./chevron-up-CtCQuxIs.js";import"./chevron-down-vcyh2ihf.js";import"./cross-CgbZ2Lur.js";import"./PdfViewerSidebar-CZpDdd6p.js";import"./index-BZM-lKSg.js";import"./index-D4Y1diP4.js";import"./index-CZs8bj4M.js";import"./PdfViewerToolbar-HJh0eyQI.js";import"./Button-C08V9i3x.js";import"./chevron-right-B85Xt_Zu.js";import"./Input-KS7sPzNw.js";import"./search-Cj99250y.js";import"./spin-Ca27mP0_.js";import"./error-Cg1niATE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3964/758609cb6af1609796ec082cf14763509ad23d10/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
