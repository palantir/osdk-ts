import{j as n}from"./iframe-CKQO8Vx8.js";import{B as e}from"./BasePdfViewer-CTa6K6LU.js";import"./preload-helper-CwEBdSMT.js";import"./index-CdmnUnhF.js";import"./BasePdfViewer.module.css-CL9bTq-g.js";import"./PdfViewerAnnotationLayer-CPDjyMB4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uilYqCue.js";import"./PdfViewerOutlineSidebar-C2dADIMx.js";import"./PdfViewerSidebarHeader-BuBqcUy1.js";import"./useBaseUiId-q6qw1H5x.js";import"./useControlled-BG6xoYyK.js";import"./CompositeRoot-BlXx2j_R.js";import"./CompositeItem-DNmbzFT9.js";import"./ToolbarRootContext-C-XgkwmF.js";import"./composite-DUJXG-6e.js";import"./svgIconContainer-8H3QdML_.js";import"./PdfViewerSearchBar-DWNCsD2e.js";import"./chevron-up-Ch1WKNmy.js";import"./chevron-down-Di9IPq2H.js";import"./cross-DO9NTRmS.js";import"./PdfViewerSidebar-6bkHD8Jr.js";import"./index-Bw61tY6z.js";import"./index-C6tRhyNC.js";import"./index-DyVj7mZ2.js";import"./PdfViewerToolbar-eh6mIR1v.js";import"./Button-C_uhqqdD.js";import"./chevron-right-BVMr4rER.js";import"./Input-DbZHyI8w.js";import"./search-DzGwW1te.js";import"./spin-BQgLLRwK.js";import"./error-BJLkldHu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3925/1860778bb6004f0aeb6c48bc149df77304f5bfc8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
