import{j as n}from"./iframe-C-gRhmL7.js";import{B as e}from"./BasePdfViewer-BydY70uX.js";import"./preload-helper-BRnBMuxX.js";import"./index-BomyFAOQ.js";import"./BasePdfViewer.module.css-DAT0f5yx.js";import"./PdfViewerAnnotationLayer-cplmUXNr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3KBD8U3.js";import"./PdfViewerOutlineSidebar-DxqgBSuh.js";import"./PdfViewerSidebarHeader-CR21nHWc.js";import"./useBaseUiId-Dr0jpy2a.js";import"./useControlled-BYigcnNh.js";import"./CompositeRoot-V2nABwQW.js";import"./CompositeItem-Dc0cRnHM.js";import"./ToolbarRootContext-tG5LuvDM.js";import"./composite-abNLhxgk.js";import"./svgIconContainer-D3HKLOfp.js";import"./PdfViewerSearchBar-BthhPqDV.js";import"./chevron-up-DDwoi2Mj.js";import"./chevron-down-Cj7UC7sg.js";import"./cross-BgbLU6cP.js";import"./PdfViewerSidebar-nZSU7H-R.js";import"./index-CYurDmtO.js";import"./index-Cc3D0dS0.js";import"./index-CMgDy_5O.js";import"./PdfViewerToolbar-KM-I_dfW.js";import"./Button-CE8V4pbx.js";import"./chevron-right-CHQMff9l.js";import"./Input-D1XkMJrA.js";import"./search-BQdh6WXo.js";import"./spin-CfoNZAcw.js";import"./error-AkMr3-YU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4233/5ef9e0da91ddb0c08e731b054289b52153f858ff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
