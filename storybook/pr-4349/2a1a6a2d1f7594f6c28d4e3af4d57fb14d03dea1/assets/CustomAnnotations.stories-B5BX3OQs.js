import{j as n}from"./iframe-_xCtEPM4.js";import{B as e}from"./BasePdfViewer-C30SSQvz.js";import"./preload-helper-BvkLr_T8.js";import"./index-BBF2nMyv.js";import"./BasePdfViewer.module.css-jKsGzCiC.js";import"./PdfViewerAnnotationLayer-DD72hQGV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-wRcZOj7N.js";import"./PdfViewerOutlineSidebar-C8qLQXw3.js";import"./PdfViewerSidebarHeader-CsMhr71Q.js";import"./useBaseUiId-qq3Q_R-A.js";import"./useControlled-BqnjfWyt.js";import"./CompositeRoot-BPGEspbY.js";import"./CompositeItem-C0afETt6.js";import"./ToolbarRootContext-B_pkS0jH.js";import"./composite-RG9aVNdC.js";import"./svgIconContainer-5YMx1lyC.js";import"./PdfViewerSearchBar-C3X3vW-w.js";import"./chevron-up-UTj1N2qv.js";import"./chevron-down-Dgi1lUDW.js";import"./cross-YJjC_kdM.js";import"./PdfViewerSidebar-C426ESHK.js";import"./index-Dp_8qpaL.js";import"./index-Ch2OG5I0.js";import"./index-oRHr0Ey_.js";import"./PdfViewerToolbar-B1rA3c7G.js";import"./Button-B5hG9nBO.js";import"./chevron-right-CAYwGgUx.js";import"./Input-CbxbAG1i.js";import"./search-EgEnIgJy.js";import"./spin-DC1Sc4_Z.js";import"./error-CPk-KRIB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4349/2a1a6a2d1f7594f6c28d4e3af4d57fb14d03dea1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
