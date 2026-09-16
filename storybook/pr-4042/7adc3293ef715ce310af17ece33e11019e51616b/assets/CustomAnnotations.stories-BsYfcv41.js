import{j as n}from"./iframe-DyxaUq2K.js";import{B as e}from"./BasePdfViewer-BULaxwIO.js";import"./preload-helper-RXXcFWVp.js";import"./index-04K8kL6p.js";import"./BasePdfViewer.module.css-DQQLlOPl.js";import"./PdfViewerAnnotationLayer-DACPdmAu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cx1u1Dqb.js";import"./PdfViewerOutlineSidebar-Dv8z0AYy.js";import"./PdfViewerSidebarHeader-DYbgj1BM.js";import"./useBaseUiId-B2pmxP6_.js";import"./useControlled--GslnpxD.js";import"./CompositeRoot-D9PLGY3m.js";import"./CompositeItem-BKwp9a98.js";import"./ToolbarRootContext-pFU5HeoC.js";import"./composite-DNSc_3T9.js";import"./svgIconContainer-Dx_A2X3i.js";import"./PdfViewerSearchBar-CgbvF37z.js";import"./chevron-up-DTVIHzut.js";import"./chevron-down-DiWP7BJ0.js";import"./cross-DlOxrMTv.js";import"./PdfViewerSidebar-C3_6ZzcD.js";import"./index-CRzwoc2n.js";import"./index-CXKzX9X0.js";import"./index-Df5y4IMk.js";import"./PdfViewerToolbar-BES00yo0.js";import"./Button-BJP0lB5I.js";import"./chevron-right-Bc6IoyTg.js";import"./Input-Ci8-51zi.js";import"./search-Dqp-f9oD.js";import"./spin-C9aFPDtc.js";import"./error-BkdYgUyU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4042/7adc3293ef715ce310af17ece33e11019e51616b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
