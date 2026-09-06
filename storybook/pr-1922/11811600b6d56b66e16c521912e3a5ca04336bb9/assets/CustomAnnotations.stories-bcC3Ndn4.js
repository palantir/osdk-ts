import{j as n}from"./iframe-Cudgp9Yf.js";import{B as e}from"./BasePdfViewer-7R6ttHkl.js";import"./preload-helper-4hrz9kvN.js";import"./index-81BYSLtR.js";import"./BasePdfViewer.module.css-Dj2_3KPQ.js";import"./PdfViewerAnnotationLayer-COSazfaG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFEWEfyA.js";import"./PdfViewerOutlineSidebar-DRIxv470.js";import"./PdfViewerSidebarHeader-CajNTED7.js";import"./useBaseUiId-XTaLWo4v.js";import"./useControlled-CwtIgUOg.js";import"./CompositeRoot-BnnvNKjS.js";import"./CompositeItem-DmRElDN_.js";import"./ToolbarRootContext-B8H-v8xY.js";import"./composite-Cva0Dc4a.js";import"./svgIconContainer-DHLyM821.js";import"./PdfViewerSearchBar-Cc_4sUol.js";import"./chevron-up-ZjwIfeAv.js";import"./chevron-down-DyPkH6YY.js";import"./cross-revkGSiW.js";import"./PdfViewerSidebar-DO7I41PG.js";import"./index-Tl8UCzrU.js";import"./index-CbHdBm0Y.js";import"./index-CSHUtoE8.js";import"./PdfViewerToolbar-Crs-hLrB.js";import"./Button-tVyqWp8F.js";import"./chevron-right-Bq1fuwrV.js";import"./Input-Bh8eu1mD.js";import"./search-D0hS-0xo.js";import"./spin--PsyZmhx.js";import"./error-I8BNM1L0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1922/11811600b6d56b66e16c521912e3a5ca04336bb9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
