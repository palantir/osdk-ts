import{j as n}from"./iframe-CEat60Hp.js";import{B as e}from"./BasePdfViewer-DYtzSwWD.js";import"./preload-helper-LGTzr2gM.js";import"./index-DyITJqpd.js";import"./BasePdfViewer.module.css-Cpg4hB68.js";import"./PdfViewerAnnotationLayer-D9dFK1_P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9tHLEsy.js";import"./PdfViewerOutlineSidebar-D91sD-pM.js";import"./PdfViewerSidebarHeader-TTjw7zHq.js";import"./useBaseUiId-ClM_1fTm.js";import"./useControlled-CZHKBSyi.js";import"./CompositeRoot-DdN2loyx.js";import"./CompositeItem-ChZ-XSJC.js";import"./ToolbarRootContext-MdE91PHa.js";import"./composite-Ce22aUj6.js";import"./svgIconContainer-CN1a-FY8.js";import"./PdfViewerSearchBar-DiIReG0V.js";import"./chevron-up-DhX97DRD.js";import"./chevron-down-CbnQEPHn.js";import"./cross-D-uWfUMG.js";import"./PdfViewerSidebar-DbpEWRTE.js";import"./index-DO0PQOk2.js";import"./index-BKoym7aL.js";import"./index-C_WLSqh0.js";import"./PdfViewerToolbar-CStuU0_B.js";import"./Button-CCDq6dgu.js";import"./chevron-right-C1mM_teU.js";import"./Input-By_gu53Z.js";import"./search-COfQ1bXD.js";import"./spin-C25GatFv.js";import"./error-Us6LDG_u.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4159/71e7de8f03321605c6adf6c5bce3fca3bae6ddaf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
