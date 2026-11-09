import{j as n}from"./iframe-kyVM35Yw.js";import{B as e}from"./BasePdfViewer-D9gveVRE.js";import"./preload-helper-BwEFl8vP.js";import"./index-C0Dea0yk.js";import"./BasePdfViewer.module.css-D4XK7OXu.js";import"./PdfViewerAnnotationLayer-LW6LM0IX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHvo9B6v.js";import"./PdfViewerOutlineSidebar-KVPAi1n3.js";import"./PdfViewerSidebarHeader-CXrGEoeF.js";import"./useBaseUiId-DRkyghGt.js";import"./useControlled-Dv9OfWlo.js";import"./CompositeRoot-bJeP23sD.js";import"./CompositeItem-CcZT4jH0.js";import"./ToolbarRootContext-hOfYlQDN.js";import"./composite-uhZO0Uyq.js";import"./svgIconContainer-CLz_w4rV.js";import"./PdfViewerSearchBar-DvMaXYOr.js";import"./chevron-up-BX9GcG-R.js";import"./chevron-down-CnIiSLCf.js";import"./cross-C0YFkToE.js";import"./PdfViewerSidebar-CVsfTj6v.js";import"./index-C5nN5HSw.js";import"./index-B5tuGXqc.js";import"./index-Cq4C7hwK.js";import"./PdfViewerToolbar-DtsHo-eV.js";import"./Button-t3LDiAFT.js";import"./chevron-right-C464qOiL.js";import"./Input-DdIUmJav.js";import"./search-BZ_r27kW.js";import"./spin-De2sHlCP.js";import"./error-C0jSc5Zw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4375/99e5996132413f91ff855f82134727bd74f891d2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
