import{j as n}from"./iframe-Bnq7KqyA.js";import{B as e}from"./BasePdfViewer-BfN6qoZW.js";import"./preload-helper-B3THyb-s.js";import"./index-Cp8jliQ7.js";import"./BasePdfViewer.module.css-D2Wmnf_A.js";import"./PdfViewerAnnotationLayer-B1W7Bm2I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CHZYBLYu.js";import"./PdfViewerOutlineSidebar-DZN1Ygr9.js";import"./PdfViewerSidebarHeader-Nh2JyqaA.js";import"./useBaseUiId-BLC23AR8.js";import"./useControlled-lHaiJfgn.js";import"./CompositeRoot-DASWpGLg.js";import"./CompositeItem-kZs7JwNO.js";import"./ToolbarRootContext-BytsqpZq.js";import"./composite-DHkFKHco.js";import"./svgIconContainer-v0UJxJ5s.js";import"./PdfViewerSearchBar-bntHKy0H.js";import"./chevron-up-DJTnrM_I.js";import"./chevron-down-Der9zcUh.js";import"./cross-CZ44W-gs.js";import"./PdfViewerSidebar-BMby3dNf.js";import"./index-CcX-LmS8.js";import"./index-BjxSMAWD.js";import"./index-CAaYrkDS.js";import"./PdfViewerToolbar-FyXRktzT.js";import"./Button-DTZ1WQtp.js";import"./chevron-right-BLv7ktgn.js";import"./Input-DqyWCSM_.js";import"./search-BWQsUNEv.js";import"./spin-DUp3-osU.js";import"./error-CzhS-DQY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4057/c8fb96fa57bffb773dbdbdf197756a72951fc251/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
