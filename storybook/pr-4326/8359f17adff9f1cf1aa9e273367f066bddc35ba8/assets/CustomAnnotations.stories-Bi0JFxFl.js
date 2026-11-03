import{j as n}from"./iframe-B6Lta6LP.js";import{B as e}from"./BasePdfViewer-D2ASXuJC.js";import"./preload-helper-CYbl2xdJ.js";import"./index-tKxTuoVH.js";import"./BasePdfViewer.module.css-BZmLb9Y2.js";import"./PdfViewerAnnotationLayer-BzqJNbx6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-r2hm1M3S.js";import"./PdfViewerOutlineSidebar-DLTdnx0K.js";import"./PdfViewerSidebarHeader-C_SWyVQE.js";import"./useBaseUiId-LeTLb_RS.js";import"./useControlled-Db4l5j0n.js";import"./CompositeRoot-CylVPm1T.js";import"./CompositeItem-aYCSoUde.js";import"./ToolbarRootContext-BwcsMBBX.js";import"./composite-CXu030fZ.js";import"./svgIconContainer-DPd9W8TR.js";import"./PdfViewerSearchBar-Boc4GAmf.js";import"./chevron-up-E3328gzw.js";import"./chevron-down-DP_Haie7.js";import"./cross-CAJFEHXr.js";import"./PdfViewerSidebar-CwQDMkcY.js";import"./index-BIznb_cm.js";import"./index-DW8Y-83r.js";import"./index-C1Xd9eEP.js";import"./PdfViewerToolbar-BFofH22h.js";import"./Button-CDP0EtTw.js";import"./chevron-right-DjMcvmts.js";import"./Input-CNTN6kGr.js";import"./search-CJ2Z9OiI.js";import"./spin-BOgMu4ge.js";import"./error-B_rV--z6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4326/8359f17adff9f1cf1aa9e273367f066bddc35ba8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
