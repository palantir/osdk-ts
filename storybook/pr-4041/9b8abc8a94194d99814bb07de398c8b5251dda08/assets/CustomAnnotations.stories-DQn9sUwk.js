import{j as n}from"./iframe-C2aef3Jo.js";import{B as e}from"./BasePdfViewer-Da3HCgct.js";import"./preload-helper-B0E-WsIe.js";import"./index-CsHYpv_s.js";import"./BasePdfViewer.module.css-5-VKa9ve.js";import"./PdfViewerAnnotationLayer-DbzgPHRc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwGSSlI0.js";import"./PdfViewerOutlineSidebar-CH7oHxRH.js";import"./PdfViewerSidebarHeader-DIXLEtTO.js";import"./useBaseUiId-BjYhZ9YY.js";import"./useControlled-D_x1ayHM.js";import"./CompositeRoot-B0A_RBGx.js";import"./CompositeItem-083J1aRu.js";import"./ToolbarRootContext-B7lRNTOm.js";import"./composite-B2RxptoP.js";import"./svgIconContainer-BXdP-ypI.js";import"./PdfViewerSearchBar-DbZpwHJq.js";import"./chevron-up-DQKJPKTK.js";import"./chevron-down-DQZukdfl.js";import"./cross-mqWCDQwu.js";import"./PdfViewerSidebar-C6PI33a0.js";import"./index-aIdw8oWM.js";import"./index-DQucsIw7.js";import"./index-Cp-EDvHL.js";import"./PdfViewerToolbar-Bvc8eSa4.js";import"./Button-Cg9SUJSs.js";import"./chevron-right-B5i248Cw.js";import"./Input-DZdZFiVD.js";import"./search-D59Jmp9F.js";import"./spin-CIgFfT57.js";import"./error-D0kSZtEZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4041/9b8abc8a94194d99814bb07de398c8b5251dda08/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
