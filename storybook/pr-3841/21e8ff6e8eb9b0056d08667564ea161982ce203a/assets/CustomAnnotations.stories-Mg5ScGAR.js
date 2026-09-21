import{j as n}from"./iframe-CPDW-PQM.js";import{B as e}from"./BasePdfViewer-CDINiDYj.js";import"./preload-helper-DLPPZvQy.js";import"./index-BD9zYiqo.js";import"./BasePdfViewer.module.css-BaOP0vft.js";import"./PdfViewerAnnotationLayer-Djwy8Wfw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D1jvWeff.js";import"./PdfViewerOutlineSidebar-DzaVKVn5.js";import"./PdfViewerSidebarHeader-DH6T2WsF.js";import"./useBaseUiId-B5I3_RDX.js";import"./useControlled-i4DTbWgc.js";import"./CompositeRoot-CMpp6cZL.js";import"./CompositeItem-BKuiG4wu.js";import"./ToolbarRootContext-OaLx1XI9.js";import"./composite-p-h0KAPd.js";import"./svgIconContainer-C7wqaI1B.js";import"./PdfViewerSearchBar-ZAuRCOjd.js";import"./chevron-up-Bq9Sdb4M.js";import"./chevron-down-BhbuOWem.js";import"./cross-DR7gxXwq.js";import"./PdfViewerSidebar-DAAj3En0.js";import"./index-DF93-j-r.js";import"./index-fIzLT5CY.js";import"./index-BTWFHyEC.js";import"./PdfViewerToolbar-2pIS3FMQ.js";import"./Button-CRJqCk8i.js";import"./chevron-right-aS_ADXbm.js";import"./Input-CD_gqaHO.js";import"./search-BZvDdvYt.js";import"./spin-CTwz9vZ2.js";import"./error-BojBsd96.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/21e8ff6e8eb9b0056d08667564ea161982ce203a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
