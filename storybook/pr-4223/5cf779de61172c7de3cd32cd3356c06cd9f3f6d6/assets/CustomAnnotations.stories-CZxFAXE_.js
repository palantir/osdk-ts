import{j as n}from"./iframe-oUWpW2hj.js";import{B as e}from"./BasePdfViewer-EtoHLtxq.js";import"./preload-helper-Yv6afaVL.js";import"./index-CgvqzYiy.js";import"./BasePdfViewer.module.css-6WoksNG1.js";import"./PdfViewerAnnotationLayer-CJlzfbbg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlNHgGc7.js";import"./PdfViewerOutlineSidebar-BDelhmGS.js";import"./PdfViewerSidebarHeader-IqqS3T4Z.js";import"./useBaseUiId-CNXzk4iF.js";import"./useControlled-C-y7Ct0C.js";import"./CompositeRoot-B0P6wVHU.js";import"./CompositeItem-mpma5yoQ.js";import"./ToolbarRootContext-CoDK9tvS.js";import"./composite-DXJqaJaP.js";import"./svgIconContainer-CfDlmTSN.js";import"./PdfViewerSearchBar-DdCG2QGH.js";import"./chevron-up-BGNeoamU.js";import"./chevron-down-B1zztQ-L.js";import"./cross-DH6uOwyM.js";import"./PdfViewerSidebar-CqHVDt51.js";import"./index-Dr1tBJwO.js";import"./index-BbYayOBF.js";import"./index-Cg1Ec0a0.js";import"./PdfViewerToolbar-11T8Z8Vq.js";import"./Button-D0GlSb4-.js";import"./chevron-right-BtzXRU7W.js";import"./Input-BW0wlw1T.js";import"./search-OfzKiz9h.js";import"./spin-Bb4pl7yO.js";import"./error-DWxhuhX7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4223/5cf779de61172c7de3cd32cd3356c06cd9f3f6d6/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
