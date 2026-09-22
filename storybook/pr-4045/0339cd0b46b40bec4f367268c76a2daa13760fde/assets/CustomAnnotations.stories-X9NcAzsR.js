import{j as n}from"./iframe-CEjFXQ7i.js";import{B as e}from"./BasePdfViewer-CtWLw4-c.js";import"./preload-helper-DLeq1RMI.js";import"./index-D6JFDMhk.js";import"./BasePdfViewer.module.css-DyfSHRAp.js";import"./PdfViewerAnnotationLayer-CdZpAcOf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fr1MbfIw.js";import"./PdfViewerOutlineSidebar-5H5CEpDv.js";import"./PdfViewerSidebarHeader-w6LMCq0t.js";import"./useBaseUiId-DIsNXkIK.js";import"./useControlled-Bactb4pm.js";import"./CompositeRoot-Cs_ogeyT.js";import"./CompositeItem-B1vfMTcy.js";import"./ToolbarRootContext-CM1Snkhx.js";import"./composite-YofervN4.js";import"./svgIconContainer-BmnNwyNQ.js";import"./PdfViewerSearchBar-Ccq0OV8J.js";import"./chevron-up-BrswIa9v.js";import"./chevron-down-B26wW5MT.js";import"./cross-D6CNu_FK.js";import"./PdfViewerSidebar-7nN3QnI0.js";import"./index-Dwcp4INV.js";import"./index-DRlQNLpD.js";import"./index-B-VVrHtR.js";import"./PdfViewerToolbar-DT6lievB.js";import"./Button-4xVurfNi.js";import"./chevron-right-C0BzJAiu.js";import"./Input-CyL2x7p2.js";import"./search-BURF39r2.js";import"./spin-BlQJwLxW.js";import"./error-Bcog9g9V.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4045/0339cd0b46b40bec4f367268c76a2daa13760fde/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
