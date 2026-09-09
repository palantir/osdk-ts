import{j as n}from"./iframe-BjZw4uZx.js";import{B as e}from"./BasePdfViewer-B5OgY1Ie.js";import"./preload-helper-ORk2FqAe.js";import"./index-1W3MQsZX.js";import"./BasePdfViewer.module.css-B4ni5FoZ.js";import"./PdfViewerAnnotationLayer-joXm_CmC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgkWK_k0.js";import"./PdfViewerOutlineSidebar-ma5z23AO.js";import"./PdfViewerSidebarHeader-BBOPCm1r.js";import"./useBaseUiId-C8tvPGb8.js";import"./useControlled-CVj57D_o.js";import"./CompositeRoot-B1ME2X-M.js";import"./CompositeItem-aZoPkaZ5.js";import"./ToolbarRootContext-DZ7-AtKR.js";import"./composite-D0Ri5kCB.js";import"./svgIconContainer-BFOOKm-2.js";import"./PdfViewerSearchBar-9WrSRLaU.js";import"./chevron-up-B8gHdAwL.js";import"./chevron-down-D59bxWeC.js";import"./cross-B7IcoVob.js";import"./PdfViewerSidebar-Dq3C-wZE.js";import"./index-DL1T0XSi.js";import"./index-DQXv-LA5.js";import"./index-raVyMjZg.js";import"./PdfViewerToolbar-DP59M6Vj.js";import"./Button-CWwJb2Uz.js";import"./chevron-right-B4vYwNVZ.js";import"./Input-LhLxUdgb.js";import"./search-H7eFoEJT.js";import"./spin-i3g5uS2T.js";import"./error-BcfWkrIR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3972/9f3dd7fb7a1811b39fc00723f81ca1ccc536a5c5/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
