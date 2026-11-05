import{j as n}from"./iframe-C0MgyNRE.js";import{B as e}from"./BasePdfViewer-iQcUtU7j.js";import"./preload-helper-DQoH0Nuo.js";import"./index---acoC-r.js";import"./BasePdfViewer.module.css-BkYLb-pD.js";import"./PdfViewerAnnotationLayer-AG8HhERu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6-rdIGHb.js";import"./PdfViewerOutlineSidebar-ybZzWnkB.js";import"./PdfViewerSidebarHeader-CoOFu2kJ.js";import"./useBaseUiId-Q4ONINdB.js";import"./useControlled-BBrJL19c.js";import"./CompositeRoot-BMh3wcGq.js";import"./CompositeItem-4Z6N9TGd.js";import"./ToolbarRootContext-DTiKt-1r.js";import"./composite-BfZwON16.js";import"./svgIconContainer-BKLjPPf4.js";import"./PdfViewerSearchBar-BaeDsbkF.js";import"./chevron-up-DTBULrqJ.js";import"./chevron-down-3JGU9uXG.js";import"./cross-CDqB6Pmb.js";import"./PdfViewerSidebar-CpYwhirh.js";import"./index-DLQpaEnR.js";import"./index-AZR5iI7Q.js";import"./index-C-iYCFDc.js";import"./PdfViewerToolbar-DX87OrRt.js";import"./Button-DPYKSMTC.js";import"./chevron-right-gAStio9y.js";import"./Input-BAC6a1Nu.js";import"./search-CnqYke8S.js";import"./spin-BaSAQbYw.js";import"./error-DWVeEt8h.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4346/7a3c2d068e29f70645b85965cbb22d60f7d1643b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
