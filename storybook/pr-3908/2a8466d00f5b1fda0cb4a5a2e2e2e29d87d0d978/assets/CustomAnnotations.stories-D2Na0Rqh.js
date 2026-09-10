import{j as n}from"./iframe-B-80Mkm7.js";import{B as e}from"./BasePdfViewer-aJGHXL_A.js";import"./preload-helper-CqWsSCnZ.js";import"./index-AUifcsh0.js";import"./BasePdfViewer.module.css-BWh8LMqg.js";import"./PdfViewerAnnotationLayer-Dcn4Wk8o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-u8EEfK76.js";import"./PdfViewerOutlineSidebar-w3t5bsHz.js";import"./PdfViewerSidebarHeader-Ba-SXXdA.js";import"./useBaseUiId-7EkOsbTl.js";import"./useControlled-BL4sDI8Q.js";import"./CompositeRoot-ect_8gxa.js";import"./CompositeItem-tArM5MUt.js";import"./ToolbarRootContext-C019PK9Y.js";import"./composite-BvjfwejW.js";import"./svgIconContainer-CCfq-fpw.js";import"./PdfViewerSearchBar-30y3WNO2.js";import"./chevron-up-dfyt_-51.js";import"./chevron-down-D6ZF1kx7.js";import"./cross-BVjH4vnv.js";import"./PdfViewerSidebar-B75GUTCk.js";import"./index-Bh1jiVMQ.js";import"./index-C1oNvpYj.js";import"./index-CdT_AVM0.js";import"./PdfViewerToolbar-BvV1063g.js";import"./Button-BhiWz6E2.js";import"./chevron-right-B-DUxkzP.js";import"./Input-DSreAQ9Z.js";import"./search-B3LLLRfT.js";import"./spin-BwLoI7T7.js";import"./error-D-y1nCx5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3908/2a8466d00f5b1fda0cb4a5a2e2e2e29d87d0d978/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
