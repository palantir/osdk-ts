import{j as n}from"./iframe-FtcUBUVc.js";import{B as e}from"./BasePdfViewer-DNydcn74.js";import"./preload-helper-C1DqyS6M.js";import"./index-BrOlmJ2Z.js";import"./BasePdfViewer.module.css-CXZ3BRQi.js";import"./PdfViewerAnnotationLayer-jeDIpSyW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdnyDDvr.js";import"./PdfViewerOutlineSidebar-CU73LzO7.js";import"./PdfViewerSidebarHeader-DZ5JKqgd.js";import"./useBaseUiId-CE5itc9W.js";import"./useControlled-DyZru4zO.js";import"./CompositeRoot-Bfmv7Zuz.js";import"./CompositeItem-CnrRuFeY.js";import"./ToolbarRootContext-C1QQQlr9.js";import"./composite-7rmuBxl6.js";import"./svgIconContainer-N_OtDM-z.js";import"./PdfViewerSearchBar-i8ybP2CV.js";import"./chevron-up-Bng7o-Ha.js";import"./chevron-down-gXp7YXqe.js";import"./cross-CzxFF0QG.js";import"./PdfViewerSidebar-AFl72jH5.js";import"./index-0OE-AeSh.js";import"./index-D40iZtqR.js";import"./index-DEH9dzt7.js";import"./PdfViewerToolbar-JYRtHdni.js";import"./Button-GQVi1do4.js";import"./chevron-right-C-p-Q8JX.js";import"./Input-ByVchIyr.js";import"./search-dRD30Vx4.js";import"./spin-UVpNEyDa.js";import"./error-DVkQT4u5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/9e7b3d3c7a9d8e054b650bfb666657f62987b21a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
