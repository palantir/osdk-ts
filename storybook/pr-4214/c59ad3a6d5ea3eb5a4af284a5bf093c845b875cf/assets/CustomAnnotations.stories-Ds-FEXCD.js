import{j as n}from"./iframe-DzqriYoa.js";import{B as e}from"./BasePdfViewer-BwiLKOCN.js";import"./preload-helper-rEyizNUS.js";import"./index-CbCX59S_.js";import"./BasePdfViewer.module.css-DPy6YZxd.js";import"./PdfViewerAnnotationLayer-wD1wZEh3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VGsWKoi-.js";import"./PdfViewerOutlineSidebar-DHHGyc5y.js";import"./PdfViewerSidebarHeader-CZpDJBCq.js";import"./useBaseUiId-Dl4SGLhQ.js";import"./useControlled-Y5VNoFPF.js";import"./CompositeRoot-CttpwrXf.js";import"./CompositeItem-jOjnmS3J.js";import"./ToolbarRootContext-T8dcHRUE.js";import"./composite-C_fUKfgf.js";import"./svgIconContainer-DGWH6ifX.js";import"./PdfViewerSearchBar-GdkqPlQ1.js";import"./chevron-up-FhM_U9vV.js";import"./chevron-down-Oou_YMqa.js";import"./cross-BYH-2i8n.js";import"./PdfViewerSidebar-PGQNBuGv.js";import"./index-DfPgZdRM.js";import"./index-DbWpjH26.js";import"./index-D2hymCML.js";import"./PdfViewerToolbar-DnNQTzOk.js";import"./Button-CORzZHVQ.js";import"./chevron-right-CdSGk75B.js";import"./Input-BkQ3tb2C.js";import"./search-CdGNOopx.js";import"./spin-Bce4tBcb.js";import"./error-Ofk1hxBS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4214/c59ad3a6d5ea3eb5a4af284a5bf093c845b875cf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
