import{j as n}from"./iframe-jTK2SxfT.js";import{B as e}from"./BasePdfViewer-B3gMnN8g.js";import"./preload-helper-qQ4kAc2Q.js";import"./index-Pz1htbT9.js";import"./BasePdfViewer.module.css-CkA9_U62.js";import"./PdfViewerAnnotationLayer-CG5GgePa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Db9s_yPr.js";import"./PdfViewerOutlineSidebar-RXNtjtuD.js";import"./PdfViewerSidebarHeader-tZ0WmRSb.js";import"./useBaseUiId--4cJ9Rmo.js";import"./useControlled-qZTm53K2.js";import"./CompositeRoot-CmgTLCRm.js";import"./CompositeItem-Cq-oGUuG.js";import"./ToolbarRootContext-Cq-6mE15.js";import"./composite-iOJ2PvUN.js";import"./svgIconContainer-GdUN0nSr.js";import"./PdfViewerSearchBar-DX-DLGIJ.js";import"./chevron-up-CBEIpNtk.js";import"./chevron-down-B-85uVWr.js";import"./cross-DrKqX7p4.js";import"./PdfViewerSidebar-Cc81xy1K.js";import"./index-DyHfw1UB.js";import"./index-BMtptVtR.js";import"./index-CSlECQqo.js";import"./PdfViewerToolbar-DyoIdOsx.js";import"./Button-DS-hfsg1.js";import"./chevron-right-rwtXlJ5-.js";import"./Input-C57k62_6.js";import"./search-DswSvB8a.js";import"./spin-D_DM-dva.js";import"./error-BtNAl0M5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4016/dc4d7d7fb7784b62001d799c7f04d64fb4f94d63/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
