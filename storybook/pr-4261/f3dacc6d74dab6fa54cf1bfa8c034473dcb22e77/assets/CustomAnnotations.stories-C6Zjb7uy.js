import{j as n}from"./iframe-Bgb2wSaw.js";import{B as e}from"./BasePdfViewer-CmROWtMB.js";import"./preload-helper-CAyUgZKm.js";import"./index-Lnta--SZ.js";import"./BasePdfViewer.module.css-B6aeoT0t.js";import"./PdfViewerAnnotationLayer-D_YCeXrH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHqK6E_K.js";import"./PdfViewerOutlineSidebar-UQzz3Qwd.js";import"./PdfViewerSidebarHeader-DM00WMkD.js";import"./useBaseUiId-Cl3siqr8.js";import"./useControlled-C5Efmt4q.js";import"./CompositeRoot-Fi8j_VfN.js";import"./CompositeItem-D-n20gZA.js";import"./ToolbarRootContext-CPL7CHly.js";import"./composite-BJNESzre.js";import"./svgIconContainer-DLn89RUi.js";import"./PdfViewerSearchBar-DGsJ-Gkl.js";import"./chevron-up-D1mB9LMY.js";import"./chevron-down-Lx8JbYiI.js";import"./cross-BBwyRiM8.js";import"./PdfViewerSidebar-DsY6neSp.js";import"./index-D1daQUXJ.js";import"./index-DE8mIe1g.js";import"./index-CYHybnYf.js";import"./PdfViewerToolbar-Do5c_VPO.js";import"./Button-ckHDf9dN.js";import"./chevron-right-Dd1Ps-Ai.js";import"./Input-CqMZoAkj.js";import"./search-B8Q2SaYZ.js";import"./spin-BswcpCDT.js";import"./error-4j4VkswI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4261/f3dacc6d74dab6fa54cf1bfa8c034473dcb22e77/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
