import{j as n}from"./iframe-nHeyQ6G0.js";import{B as e}from"./BasePdfViewer-DFf3nF4O.js";import"./preload-helper-CQHnyaJj.js";import"./index-Cepl2Gdo.js";import"./BasePdfViewer.module.css-CUxy_z-V.js";import"./PdfViewerAnnotationLayer-aieMHvnm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9EDjJM-.js";import"./PdfViewerOutlineSidebar-C9KgGrNL.js";import"./PdfViewerSidebarHeader-Cvrt280d.js";import"./useBaseUiId-WP9Qsa8B.js";import"./useControlled-BEwPeN8G.js";import"./CompositeRoot-DVmkgFb8.js";import"./CompositeItem-Y1Nghizw.js";import"./ToolbarRootContext-CrhI_j71.js";import"./composite-BYQJTx_c.js";import"./svgIconContainer-CLZNV5by.js";import"./PdfViewerSearchBar-CjClrbJc.js";import"./chevron-up-CL7eFYbY.js";import"./chevron-down-DWkmyfL1.js";import"./cross-BY7_vW_g.js";import"./PdfViewerSidebar-B6sgfuwd.js";import"./index-BzvZTbEJ.js";import"./index-DDrT1OpE.js";import"./index-BwIe69Hj.js";import"./PdfViewerToolbar-XJXNc7kd.js";import"./Button-OJtt4Wi3.js";import"./chevron-right-BI3pBzJQ.js";import"./Input-LHo6mX7j.js";import"./search-nN6muyjH.js";import"./spin-CwgQSer6.js";import"./error-qX2wkXkr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3781/d91a979157f5667249e8741a5e28c5e4c78b5fa9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
