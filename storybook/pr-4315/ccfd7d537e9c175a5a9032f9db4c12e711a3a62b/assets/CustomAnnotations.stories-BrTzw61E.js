import{j as n}from"./iframe-DDJWwqBY.js";import{B as e}from"./BasePdfViewer-DsFWHcKV.js";import"./preload-helper-DOjHdaCa.js";import"./index-C1ZTpjxr.js";import"./BasePdfViewer.module.css-7udNJXYI.js";import"./PdfViewerAnnotationLayer-DiACBhPu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-neTUkgv-.js";import"./PdfViewerOutlineSidebar-CXyr_5Im.js";import"./PdfViewerSidebarHeader-C3etN8Xm.js";import"./useBaseUiId-cxXVDzQK.js";import"./useControlled-CWWChH0p.js";import"./CompositeRoot-zt4Ih1Im.js";import"./CompositeItem-BdeXH3Aq.js";import"./ToolbarRootContext-CwaM14ur.js";import"./composite-CGLo9xHo.js";import"./svgIconContainer-CFPdoyWo.js";import"./PdfViewerSearchBar-Bys7es5K.js";import"./chevron-up-BuFZq_Ji.js";import"./chevron-down-CEmh4RKU.js";import"./cross-B0JuOba7.js";import"./PdfViewerSidebar-DIPTnwVt.js";import"./index-CSTQbqzf.js";import"./index-DpGvPpxf.js";import"./index-NkIdY7dG.js";import"./PdfViewerToolbar-BYHf4PoP.js";import"./Button-HOAjx8sN.js";import"./chevron-right-BrC9qJiB.js";import"./Input-DxhVC9Qb.js";import"./search-d3_uaTlG.js";import"./spin-Do95JLCA.js";import"./error-DWlGgPFi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4315/ccfd7d537e9c175a5a9032f9db4c12e711a3a62b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
