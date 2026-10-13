import{j as n}from"./iframe-BmlnQTDS.js";import{B as e}from"./BasePdfViewer-sd6DvXKb.js";import"./preload-helper-DfLDZ4kf.js";import"./index-CLn6IkRR.js";import"./BasePdfViewer.module.css-D0-wb8NQ.js";import"./PdfViewerAnnotationLayer-B1L8IstK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LHRV7NB2.js";import"./PdfViewerOutlineSidebar-DSm5JzTC.js";import"./PdfViewerSidebarHeader-CYV7ckEi.js";import"./useBaseUiId-CZoncXMq.js";import"./useControlled-YYP5n0_h.js";import"./CompositeRoot-QP0fYFZg.js";import"./CompositeItem-DqcihoEf.js";import"./ToolbarRootContext-BMCSjw-P.js";import"./composite-JyXlDwio.js";import"./svgIconContainer-D7BtKSB4.js";import"./PdfViewerSearchBar-3MVphuq7.js";import"./chevron-up-1GfOY4Zb.js";import"./chevron-down-CKSiKvYw.js";import"./cross-D2DCGJW3.js";import"./PdfViewerSidebar-D5_ljm5t.js";import"./index-PbmBNDrH.js";import"./index-DwxQTWS6.js";import"./index-bRRYzA0v.js";import"./PdfViewerToolbar-BbruGTBv.js";import"./Button-BG-8NdMv.js";import"./chevron-right-mytPIpsg.js";import"./Input-DqKEEagj.js";import"./search-C6RrLSu8.js";import"./spin-CcjrWdFQ.js";import"./error-C-2VL_3O.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4200/2d5e4375a591666bbaac95bfbbe2c1b4a4a1bf8b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
