import{j as n}from"./iframe-hmluRZS5.js";import{B as e}from"./BasePdfViewer-BQAi-EgD.js";import"./preload-helper-DlYZq8_X.js";import"./index-DlmwBpMI.js";import"./BasePdfViewer.module.css-ChlyazcE.js";import"./PdfViewerAnnotationLayer-DUquSFVO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-TnULO_ib.js";import"./PdfViewerOutlineSidebar-C8QxqMe3.js";import"./PdfViewerSidebarHeader-DDJzPHJC.js";import"./useBaseUiId-Ce6hVQyf.js";import"./useControlled-CWtQ2etk.js";import"./CompositeRoot-BlbBabfC.js";import"./CompositeItem-Bger7i4K.js";import"./ToolbarRootContext-BviESwyl.js";import"./composite-Cz3P8fmc.js";import"./svgIconContainer-Cr9UBTnz.js";import"./PdfViewerSearchBar-Do5SyL7_.js";import"./chevron-up-DmSp0BEp.js";import"./chevron-down-BV1ESAvw.js";import"./cross-CF7Ek918.js";import"./PdfViewerSidebar-D1ppXFFK.js";import"./index-CYwmlkYY.js";import"./index-eMB_Bo_f.js";import"./index-Bc2sNs6_.js";import"./PdfViewerToolbar-C8M_k8tP.js";import"./Button-UcoIXCLv.js";import"./chevron-right-DJSAdI4h.js";import"./Input-uUNDzlAG.js";import"./search-CyNzQTjU.js";import"./spin-8DP7kJoh.js";import"./error-B495uG_z.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/494b1ccf57b4e4a1d1a8a248140f48203fa7ccb8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
