import{j as n}from"./iframe-CxxM9p3K.js";import{B as e}from"./BasePdfViewer-CX6Lq1gV.js";import"./preload-helper-Clfhc9e2.js";import"./index-BFBsPuy5.js";import"./BasePdfViewer.module.css-BHVfT2UQ.js";import"./PdfViewerAnnotationLayer-DuQavW4b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bp3cDoKW.js";import"./PdfViewerOutlineSidebar-CGuObeJH.js";import"./PdfViewerSidebarHeader-CjGtP_SI.js";import"./useBaseUiId-6hcgy7hR.js";import"./useControlled-BM7wy7zH.js";import"./CompositeRoot-BECvqUHm.js";import"./CompositeItem-D91fXLRV.js";import"./ToolbarRootContext-DrjoHCqu.js";import"./composite-DnTfWsZ7.js";import"./svgIconContainer-BDX64ThR.js";import"./PdfViewerSearchBar-CdpQsZc7.js";import"./chevron-up-Drv3ABkA.js";import"./chevron-down-jQiKIGSz.js";import"./cross-DVlZmvQu.js";import"./PdfViewerSidebar-CAK5h_xa.js";import"./index-DXQ0Y341.js";import"./index-Cmw2FWOc.js";import"./index-U9rL3bD6.js";import"./PdfViewerToolbar-D7EL940p.js";import"./Button-BSoYYLdN.js";import"./chevron-right-EaRVGTo6.js";import"./Input-BEL6yzPH.js";import"./search-BLctbnBP.js";import"./spin-Dom_LUpm.js";import"./error-CFTb0-g7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4049/f230e3d2fcd59ced403528969de550a860b6fd0a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
