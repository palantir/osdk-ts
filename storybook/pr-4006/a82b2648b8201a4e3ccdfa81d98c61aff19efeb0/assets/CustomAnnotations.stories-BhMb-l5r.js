import{j as n}from"./iframe-JXLKLe4j.js";import{B as e}from"./BasePdfViewer-BM_USYOz.js";import"./preload-helper-KxhExJZe.js";import"./index-CxCVEUEK.js";import"./BasePdfViewer.module.css-BKyUJJ1A.js";import"./PdfViewerAnnotationLayer-CqyJBDQa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEDuhcZC.js";import"./PdfViewerOutlineSidebar-C7xtHEAD.js";import"./PdfViewerSidebarHeader-DbYdpe51.js";import"./useBaseUiId-D2ECG8pj.js";import"./useControlled-BlJ0csd0.js";import"./CompositeRoot-CKoF8Ofd.js";import"./CompositeItem-CHr0cHjc.js";import"./ToolbarRootContext-Dtg0Oro0.js";import"./composite-B1xcP3KB.js";import"./svgIconContainer-39ufch0k.js";import"./PdfViewerSearchBar-CcFzVh88.js";import"./chevron-up-CHf3zV96.js";import"./chevron-down-OJuk8g-X.js";import"./cross-DOXYOKC7.js";import"./PdfViewerSidebar-BkYZQu0D.js";import"./index-DoaZjYqH.js";import"./index-CU7Uodcw.js";import"./index-KYXcc3Yr.js";import"./PdfViewerToolbar-C4h3dVwW.js";import"./Button-Cg6Es2oR.js";import"./chevron-right-CYlKPo9x.js";import"./Input-Cp2KEsjw.js";import"./search-3vsZ9AKM.js";import"./spin-FatcQhH4.js";import"./error-CCMzsuJP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4006/a82b2648b8201a4e3ccdfa81d98c61aff19efeb0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
