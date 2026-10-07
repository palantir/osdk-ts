import{j as n}from"./iframe-N69vsxs5.js";import{B as e}from"./BasePdfViewer-C8AiFFvy.js";import"./preload-helper-DK0eU9jP.js";import"./index-DFVx6FW1.js";import"./BasePdfViewer.module.css-DVMFDAu-.js";import"./PdfViewerAnnotationLayer-B0hjtMFV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW8VGq8Z.js";import"./PdfViewerOutlineSidebar-BlSMxgUA.js";import"./PdfViewerSidebarHeader-Uvz7J3Vv.js";import"./useBaseUiId-BOlvpNsK.js";import"./useControlled-HSJHWmyV.js";import"./CompositeRoot-CB-vBuO1.js";import"./CompositeItem-zsosIukW.js";import"./ToolbarRootContext-DAvYZo9n.js";import"./composite-DlZg84y_.js";import"./svgIconContainer-DHGJTaRH.js";import"./PdfViewerSearchBar-CYCU2JCW.js";import"./chevron-up-hi0T1DAo.js";import"./chevron-down-I26OMj3W.js";import"./cross-BdjHCXJd.js";import"./PdfViewerSidebar-Bse4BAU_.js";import"./index-BLwokh6k.js";import"./index-CshN8TfA.js";import"./index-CmUIsfdi.js";import"./PdfViewerToolbar-v6WZ2YqT.js";import"./Button-KvR9mvY1.js";import"./chevron-right-Bo-L9SYg.js";import"./Input-DVgfJ9ud.js";import"./search-DHKYFAa1.js";import"./spin-DpbdavgV.js";import"./error-vgCxf202.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4181/b704ef4dd319941fdf365a565efa43ad8ec44e8a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
