import{j as n}from"./iframe-CFQ9G3uO.js";import{B as e}from"./BasePdfViewer-H51aVgYY.js";import"./preload-helper-B1ZvWZ1B.js";import"./index-BrTT1QYM.js";import"./BasePdfViewer.module.css-BPFhbh1I.js";import"./PdfViewerAnnotationLayer-LbHkXTNv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWoAOXIk.js";import"./PdfViewerOutlineSidebar-Dh28LJFW.js";import"./PdfViewerSidebarHeader-DKHCZGo2.js";import"./useBaseUiId-DR9MpHDU.js";import"./useControlled-CZXT8yrt.js";import"./CompositeRoot-DYLe3Mef.js";import"./CompositeItem-Dm-ge3S4.js";import"./ToolbarRootContext-DzjMBLGA.js";import"./composite-CcP6OIrf.js";import"./svgIconContainer-UNIpHB70.js";import"./PdfViewerSearchBar-BpUxB3qk.js";import"./chevron-up-BNt754fO.js";import"./chevron-down-Cu6k6Z5N.js";import"./cross-Th924Xj2.js";import"./PdfViewerSidebar-wSlrbA_k.js";import"./index-Clq14PWf.js";import"./index-ByJ4X6uH.js";import"./index-B2hmf6ar.js";import"./PdfViewerToolbar-Lu1ORSEZ.js";import"./Button-CE7esyC3.js";import"./chevron-right-CGjFsLLa.js";import"./Input-DXZODgk0.js";import"./search-2qv0O4T5.js";import"./spin-BFG0Rvcl.js";import"./error-CP69BMiN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4027/1460cb3ca91b3a8adb4f9ebd8586a3ad6d2af911/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
