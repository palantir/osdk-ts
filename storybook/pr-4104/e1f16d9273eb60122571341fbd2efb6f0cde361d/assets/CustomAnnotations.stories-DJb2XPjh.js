import{j as n}from"./iframe-C0Xv1P5p.js";import{B as e}from"./BasePdfViewer-Coxhq204.js";import"./preload-helper-DK2j5cbT.js";import"./index-D6d1RC22.js";import"./BasePdfViewer.module.css-Bte5hLR1.js";import"./PdfViewerAnnotationLayer-sA8LOohv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU5Te_C-.js";import"./PdfViewerOutlineSidebar-DJ0XTocy.js";import"./PdfViewerSidebarHeader-C0XJM3rF.js";import"./useBaseUiId-DyrVnx3i.js";import"./useControlled-qTk4_Vdn.js";import"./CompositeRoot-EODRIzqt.js";import"./CompositeItem-BRH5qaMr.js";import"./ToolbarRootContext-B2RHT2LC.js";import"./composite-DpnK5-9R.js";import"./svgIconContainer-D6QpYyks.js";import"./PdfViewerSearchBar-ZbRWTZyO.js";import"./chevron-up-mcFyzEg9.js";import"./chevron-down-Buq4H8ml.js";import"./cross-C73iH-uw.js";import"./PdfViewerSidebar-BpsYnTgQ.js";import"./index-DuGDHKhx.js";import"./index-CDpNmz1t.js";import"./index-D0yTA5vb.js";import"./PdfViewerToolbar-C98EIQBg.js";import"./Button-CQxPIDLb.js";import"./chevron-right-DhbWrZrT.js";import"./Input-C9L75zsf.js";import"./search-BS7q0In0.js";import"./spin-Bd_r2hCN.js";import"./error-DoPz0IgF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4104/e1f16d9273eb60122571341fbd2efb6f0cde361d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
