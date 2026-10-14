import{j as n}from"./iframe-Cuknj9ph.js";import{B as e}from"./BasePdfViewer-C5NQG7_h.js";import"./preload-helper-DA49r888.js";import"./index-DUVMLmA5.js";import"./BasePdfViewer.module.css-ANoqoWIK.js";import"./PdfViewerAnnotationLayer-Dxs2rj8Z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SHb7eO6P.js";import"./PdfViewerOutlineSidebar-T4mmPVN-.js";import"./PdfViewerSidebarHeader-D04wUAjV.js";import"./useBaseUiId-ksC6H-yy.js";import"./useControlled-D1P2IuRq.js";import"./CompositeRoot-CBtXINXV.js";import"./CompositeItem-CyTGoO_U.js";import"./ToolbarRootContext-BMS0iTVE.js";import"./composite-CUDt05Vv.js";import"./svgIconContainer-Bxolnsq9.js";import"./PdfViewerSearchBar-BIXeOkYV.js";import"./chevron-up-haUGpyQ4.js";import"./chevron-down-DYalT47P.js";import"./cross-9NrnDCFm.js";import"./PdfViewerSidebar-cPjZMs2D.js";import"./index-C1B0s3j1.js";import"./index-B7AWjemI.js";import"./index-BPGm0MAa.js";import"./PdfViewerToolbar-Ct6Kvw5m.js";import"./Button-fi3zZM83.js";import"./chevron-right-BlV22pdQ.js";import"./Input-BEJtrH8a.js";import"./search-BJhgCNFy.js";import"./spin-pTt1omBN.js";import"./error-CYI1ELi7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4083/1e4d30bb1d4cdc2a36bc1cdc7880c4f98f9a94e4/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
