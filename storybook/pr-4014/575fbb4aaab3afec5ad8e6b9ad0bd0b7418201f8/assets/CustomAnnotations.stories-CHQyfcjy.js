import{j as n}from"./iframe-Dw2PjeaI.js";import{B as e}from"./BasePdfViewer-BX0TSDRP.js";import"./preload-helper-BJaT6ZDB.js";import"./index-0M7994Y_.js";import"./BasePdfViewer.module.css-fm-NZ7e2.js";import"./PdfViewerAnnotationLayer-Rov2K_dw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ONcQb7QS.js";import"./PdfViewerOutlineSidebar-BEGWe3_5.js";import"./PdfViewerSidebarHeader-CJ9PHfHf.js";import"./useBaseUiId-0TtGgIAG.js";import"./useControlled-Cz_GJLGD.js";import"./CompositeRoot-DKDE8cQa.js";import"./CompositeItem-CeRclahQ.js";import"./ToolbarRootContext-DgoSljlg.js";import"./composite-DWecAK_E.js";import"./svgIconContainer-CeXRiZtW.js";import"./PdfViewerSearchBar-roY9e23d.js";import"./chevron-up-DNHYHbJS.js";import"./chevron-down-C1e4s47j.js";import"./cross-CLda9Fo1.js";import"./PdfViewerSidebar-UMaU7d4x.js";import"./index-B5gfVMUt.js";import"./index-BPb9j9HY.js";import"./index-CGb9o7qe.js";import"./PdfViewerToolbar-ANQuL_WG.js";import"./Button-DVN9BG7e.js";import"./chevron-right-BHgoDDx4.js";import"./Input-DbWveyeA.js";import"./search-ClBN3Er-.js";import"./spin-BDnp1S-v.js";import"./error-DeMrwFkF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/575fbb4aaab3afec5ad8e6b9ad0bd0b7418201f8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
