import{j as n}from"./iframe-4Ny8APPO.js";import{B as e}from"./BasePdfViewer-Bd3-s5ft.js";import"./preload-helper-DHWrfsom.js";import"./index-BDa5owMw.js";import"./BasePdfViewer.module.css-DOUKsOPF.js";import"./PdfViewerAnnotationLayer-Cs6EyhYq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BI1PbGmF.js";import"./PdfViewerOutlineSidebar-CzlyGxnj.js";import"./PdfViewerSidebarHeader-qQsDZ2dV.js";import"./useBaseUiId-Cylkv8_6.js";import"./useControlled-CDmZbK63.js";import"./CompositeRoot-o5CDeCcX.js";import"./CompositeItem-BlU9UJGi.js";import"./ToolbarRootContext-4zNRwQbb.js";import"./composite-rxIlBuDW.js";import"./svgIconContainer-CI9V091I.js";import"./PdfViewerSearchBar-_2973HoL.js";import"./chevron-up-C5OFQAYY.js";import"./chevron-down-UQ0goxb7.js";import"./cross-CeVI-uk1.js";import"./PdfViewerSidebar-1oqjr32z.js";import"./index-BpN3FT8y.js";import"./index-DZ12fAcl.js";import"./index-C2QpJmDZ.js";import"./PdfViewerToolbar-CyR0dbsT.js";import"./Button-DLJHtyJi.js";import"./chevron-right-DsryW-B2.js";import"./Input-BJD6b5K7.js";import"./search-DqDmcAMp.js";import"./spin-BRJc8Pe-.js";import"./error-al8La3lG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3772/74ddf3c779f7d11a19b6a3182a50efa3e8770284/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
