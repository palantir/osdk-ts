import{j as n}from"./iframe-D-ZGqhox.js";import{B as e}from"./BasePdfViewer-YR5iHOmU.js";import"./preload-helper-BHmHhg6q.js";import"./index-DMbZcvzJ.js";import"./BasePdfViewer.module.css-DCBYipMJ.js";import"./PdfViewerAnnotationLayer-CDvu-M8w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcxlFQuP.js";import"./PdfViewerOutlineSidebar-BkRlL9IQ.js";import"./PdfViewerSidebarHeader-BMCCsRnG.js";import"./useBaseUiId-UHE7cq6V.js";import"./useControlled-DZViTlY6.js";import"./CompositeRoot-BOyjU3DD.js";import"./CompositeItem-BUGdCkRP.js";import"./ToolbarRootContext-C0KaRFai.js";import"./composite-BwjOgotZ.js";import"./svgIconContainer-DynaZTrl.js";import"./PdfViewerSearchBar-CRgUoo2M.js";import"./chevron-up-Bvk8StUb.js";import"./chevron-down-TA05iMki.js";import"./cross-C-5SE6cr.js";import"./PdfViewerSidebar-E6YR5HR7.js";import"./index-DtE8_iZZ.js";import"./index-LOlNiB8m.js";import"./index-BaNxBZm4.js";import"./PdfViewerToolbar-DVZ6D1xU.js";import"./Button-BX_hSGAP.js";import"./chevron-right-BS_SSOa9.js";import"./Input-Cb6mwwI7.js";import"./search-Df3zpGfV.js";import"./spin-CAsM2OKY.js";import"./error-I7Ps8uLh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4083/a978d951edc2c6391b84b5230d82d48a12e53d5e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
