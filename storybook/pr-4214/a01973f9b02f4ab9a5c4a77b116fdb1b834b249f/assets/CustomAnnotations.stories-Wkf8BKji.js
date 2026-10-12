import{j as n}from"./iframe-DQ-Ez-qG.js";import{B as e}from"./BasePdfViewer-DwHv0WJF.js";import"./preload-helper-DbSstiuK.js";import"./index-BXE1O0xs.js";import"./BasePdfViewer.module.css-DcLxXamn.js";import"./PdfViewerAnnotationLayer-Dtk6hSMw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-A-n-3esR.js";import"./PdfViewerOutlineSidebar-DP44tidS.js";import"./PdfViewerSidebarHeader-CN_6oqyk.js";import"./useBaseUiId-SgVzRrNW.js";import"./useControlled-CTxFJ2Pw.js";import"./CompositeRoot-DOtWACD6.js";import"./CompositeItem-DdY16ynU.js";import"./ToolbarRootContext-BlHD5nI1.js";import"./composite-BiRiw1GR.js";import"./svgIconContainer-B-U6T-6a.js";import"./PdfViewerSearchBar-CV1HsYsT.js";import"./chevron-up-DL9Ek3XH.js";import"./chevron-down-COv6kIer.js";import"./cross-UZvPpSxI.js";import"./PdfViewerSidebar-EvIsIj2U.js";import"./index-e-PI1xG5.js";import"./index-vFCgFCPf.js";import"./index-CKAmw6bu.js";import"./PdfViewerToolbar-hmVsP_Mq.js";import"./Button-CEhBDWA2.js";import"./chevron-right-DKob33Es.js";import"./Input-DJaKEaOT.js";import"./search-67zYXUAs.js";import"./spin-DvZzk_KE.js";import"./error-BvUwAVRc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4214/a01973f9b02f4ab9a5c4a77b116fdb1b834b249f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
