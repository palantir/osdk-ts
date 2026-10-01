import{j as n}from"./iframe-DxxbQvQS.js";import{B as e}from"./BasePdfViewer-CiLyOcU1.js";import"./preload-helper-BmW5a970.js";import"./index-Cu-WR_G5.js";import"./BasePdfViewer.module.css-Dqf6j2eW.js";import"./PdfViewerAnnotationLayer-ioyWAD8s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3CA26--X.js";import"./PdfViewerOutlineSidebar-eX4fCuuw.js";import"./PdfViewerSidebarHeader-B4sGiXUG.js";import"./useBaseUiId-Brl8T8Kf.js";import"./useControlled-CL6vvYza.js";import"./CompositeRoot-CPPn3RyR.js";import"./CompositeItem-beHVPrKw.js";import"./ToolbarRootContext-9fMJDea1.js";import"./composite-C5YJt7dM.js";import"./svgIconContainer-PZP2rkyO.js";import"./PdfViewerSearchBar-CUZHJ1R5.js";import"./chevron-up-DBbJ6kbF.js";import"./chevron-down-CCZd9VTh.js";import"./cross-D--1C_uR.js";import"./PdfViewerSidebar-WeQF1qj-.js";import"./index-CI5AqopY.js";import"./index-mzAwx4l9.js";import"./index-CkYBlAD9.js";import"./PdfViewerToolbar-ZK-dBbBv.js";import"./Button-BnqDmIMF.js";import"./chevron-right-_LLGe-WE.js";import"./Input-CVhM1jds.js";import"./search-rJtEr32Y.js";import"./spin-CUhqdHw3.js";import"./error-ClKWsTpb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4131/9c07606030d9e1f0b8d39cf1924ca587e25fa15f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
