import{j as n}from"./iframe-DYP6I0EJ.js";import{B as e}from"./BasePdfViewer-CXVRHKzM.js";import"./preload-helper-sS4hYFkK.js";import"./index-DIhwEquj.js";import"./BasePdfViewer.module.css-B-zG8A3g.js";import"./PdfViewerAnnotationLayer-CRjxe2-R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuAQDARF.js";import"./PdfViewerOutlineSidebar-CKurWQSz.js";import"./PdfViewerSidebarHeader-DuyHxwLI.js";import"./useBaseUiId-BZiJrEE8.js";import"./useControlled-CBcSqYsQ.js";import"./CompositeRoot-ByWoXpEH.js";import"./CompositeItem-BuWL3KPI.js";import"./ToolbarRootContext-6dERQM_o.js";import"./composite-DQKMgq2L.js";import"./svgIconContainer-C4jga87M.js";import"./PdfViewerSearchBar-CayYLwO-.js";import"./chevron-up-BU90ll14.js";import"./chevron-down-DgAcZbyD.js";import"./cross-bDPWwylA.js";import"./PdfViewerSidebar-C47c3SMC.js";import"./index-Bbf985kl.js";import"./index-kgSrvS5D.js";import"./index-C2R1rTgL.js";import"./PdfViewerToolbar-Ove_klWo.js";import"./Button-BBpZA8JE.js";import"./chevron-right-BFx4PWe3.js";import"./Input-CX9B7mOe.js";import"./search-DC-q2Fvd.js";import"./spin-DFtkdKjJ.js";import"./error-BJ0QSSt_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4060/2a505b35e96067d8aa97ae8d1dd660d2cef09166/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
