import{j as n}from"./iframe-CrH6Yrlk.js";import{B as e}from"./BasePdfViewer-KIDeS6_a.js";import"./preload-helper-DWN1nqfF.js";import"./index-BLeB2LZ4.js";import"./BasePdfViewer.module.css-sdixrHNZ.js";import"./PdfViewerAnnotationLayer-CCYktqbS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnvxmgI9.js";import"./PdfViewerOutlineSidebar-BI0uLwsO.js";import"./PdfViewerSidebarHeader-BYszQmNV.js";import"./useBaseUiId-DxKrUPMo.js";import"./useControlled-BHyUcUtS.js";import"./CompositeRoot-rsR3p22P.js";import"./CompositeItem-BB8cOYaX.js";import"./ToolbarRootContext-BfVZ25NV.js";import"./composite-ffO3RfE4.js";import"./svgIconContainer-BOBFAYEP.js";import"./PdfViewerSearchBar-BKHpNpbh.js";import"./chevron-up-aXNeo19j.js";import"./chevron-down-Do4cSabx.js";import"./cross-Djpe7veO.js";import"./PdfViewerSidebar-CIs5hWYP.js";import"./index-ow98vrD3.js";import"./index-Dnjnym33.js";import"./index-BXkTUwMI.js";import"./PdfViewerToolbar-Cf7qLatT.js";import"./Button-ChVjuzMV.js";import"./chevron-right-_qoyqaLx.js";import"./Input-CO-EhnoV.js";import"./search-C_RAyaII.js";import"./spin-DjxqVyck.js";import"./error-Bb5TXnmt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4119/371355d781c45452e9fa1b2bb5a0a9fa4a4cda9c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
