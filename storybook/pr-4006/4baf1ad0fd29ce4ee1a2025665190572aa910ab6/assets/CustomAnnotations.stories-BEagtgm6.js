import{j as n}from"./iframe-CGyuUHxy.js";import{B as e}from"./BasePdfViewer-C1boMg4z.js";import"./preload-helper-CHXR4TEM.js";import"./index-BY9adCgo.js";import"./BasePdfViewer.module.css-CSPSbT6S.js";import"./PdfViewerAnnotationLayer-BCqjLVxx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8rDgZ1a.js";import"./PdfViewerOutlineSidebar-CMCUL_4V.js";import"./PdfViewerSidebarHeader-an3DgX2c.js";import"./useBaseUiId-CxRjJ2eA.js";import"./useControlled-DMowJxn0.js";import"./CompositeRoot-2FnPGbNx.js";import"./CompositeItem-C9KCjhut.js";import"./ToolbarRootContext-B3Ikfeie.js";import"./composite-Ccbhb-G_.js";import"./svgIconContainer-BsIK3M0v.js";import"./PdfViewerSearchBar-IcJ7nQPb.js";import"./chevron-up-Cv2Ke0fm.js";import"./chevron-down-DvkSXyV_.js";import"./cross-IJIRpi8I.js";import"./PdfViewerSidebar-DRMuTRBR.js";import"./index-GV80kSzg.js";import"./index-BAxLRNzk.js";import"./index-CiafOJ6c.js";import"./PdfViewerToolbar-phMfEOY6.js";import"./Button-BCdalSJc.js";import"./chevron-right-CZqFLzOo.js";import"./Input-C3-P_z4v.js";import"./search-lH3pU1gQ.js";import"./spin-CoxZsxLn.js";import"./error-2nP38RK7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4006/4baf1ad0fd29ce4ee1a2025665190572aa910ab6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
