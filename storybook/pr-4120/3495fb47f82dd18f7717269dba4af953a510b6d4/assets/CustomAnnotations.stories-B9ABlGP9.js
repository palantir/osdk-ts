import{j as n}from"./iframe-3FtDhECv.js";import{B as e}from"./BasePdfViewer-CYo1Rdxg.js";import"./preload-helper-70ekmL9Z.js";import"./index-DDuj02wW.js";import"./BasePdfViewer.module.css-MuTDyojc.js";import"./PdfViewerAnnotationLayer-DPiFq2qB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7OEd9UF.js";import"./PdfViewerOutlineSidebar-bDbTC5Nl.js";import"./PdfViewerSidebarHeader-C3GGI75P.js";import"./useBaseUiId-ba-AZLlh.js";import"./useControlled-DAFRtrE7.js";import"./CompositeRoot-BwQMDbzT.js";import"./CompositeItem-X94Emfw4.js";import"./ToolbarRootContext-DWWF2uk2.js";import"./composite-l2Xk1Iwz.js";import"./svgIconContainer-8d5y5XmV.js";import"./PdfViewerSearchBar-CmydYWFG.js";import"./chevron-up-CN7EwXNY.js";import"./chevron-down-eXeXyWJp.js";import"./cross-3payUlda.js";import"./PdfViewerSidebar-XVDfV0B0.js";import"./index-BmkwvzsK.js";import"./index-Di_GBi9u.js";import"./index-CdOyTJBF.js";import"./PdfViewerToolbar-BtF4Ib9B.js";import"./Button-CtxTGJJ5.js";import"./chevron-right-BhaFJCPt.js";import"./Input-eNpsdHBj.js";import"./search-DQyEiXG4.js";import"./spin-DY-YSkZk.js";import"./error-Co_bSTMk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/3495fb47f82dd18f7717269dba4af953a510b6d4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
