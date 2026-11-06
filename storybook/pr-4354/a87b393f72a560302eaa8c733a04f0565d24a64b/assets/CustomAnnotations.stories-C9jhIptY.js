import{j as n}from"./iframe-CMoZd53O.js";import{B as e}from"./BasePdfViewer-Bqo5DBVF.js";import"./preload-helper-Bvb7-fL5.js";import"./index-BRB1GWD7.js";import"./BasePdfViewer.module.css-Bd3NWu2-.js";import"./PdfViewerAnnotationLayer-Dlnh-EYg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUSjmj0q.js";import"./PdfViewerOutlineSidebar-BbLmZWT3.js";import"./PdfViewerSidebarHeader-CuWriPyJ.js";import"./useBaseUiId-Qhb38DP0.js";import"./useControlled-BxfFaTP6.js";import"./CompositeRoot-CKDuVr7-.js";import"./CompositeItem-Djz6OTaL.js";import"./ToolbarRootContext-dQ-vGvin.js";import"./composite-ltKATKpa.js";import"./svgIconContainer-SBUhRCLt.js";import"./PdfViewerSearchBar-BYZ_s8o8.js";import"./chevron-up-CzwRLd6e.js";import"./chevron-down-BCXbJ6WN.js";import"./cross-CaFf6aAK.js";import"./PdfViewerSidebar-DlE7iyvJ.js";import"./index-fQcFOjTC.js";import"./index-D19nvIzc.js";import"./index-C8cm2zeY.js";import"./PdfViewerToolbar-BbCj0Y2D.js";import"./Button-BA8xBSZI.js";import"./chevron-right-9z6_5MpI.js";import"./Input-M24j8YBw.js";import"./search-DX4bcztW.js";import"./spin-D-kjppW-.js";import"./error-CjE7xCZl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4354/a87b393f72a560302eaa8c733a04f0565d24a64b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
