import{j as n}from"./iframe-C_eR_-FB.js";import{B as e}from"./BasePdfViewer-mB3CtScK.js";import"./preload-helper-D-iMj1JN.js";import"./index-B5oDC2JQ.js";import"./BasePdfViewer.module.css-BtbbVSOp.js";import"./PdfViewerAnnotationLayer-DX537u7P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Boo_vHaz.js";import"./PdfViewerOutlineSidebar-Br52y6tS.js";import"./PdfViewerSidebarHeader-CXktOLyT.js";import"./useBaseUiId-DHfbjF6K.js";import"./useControlled-BEI1fcJ3.js";import"./CompositeRoot-Du8ZldYT.js";import"./CompositeItem-DORzwzYw.js";import"./ToolbarRootContext-MiWSvMtv.js";import"./composite-CRpQuKDa.js";import"./svgIconContainer-CBJV4Tnn.js";import"./PdfViewerSearchBar-DyUytZGG.js";import"./chevron-up-CGdcB0AV.js";import"./chevron-down-CYhIscH3.js";import"./cross-6THvcyRY.js";import"./PdfViewerSidebar-BWH8eXth.js";import"./index-DsvrxdPz.js";import"./index-JDCvzA9U.js";import"./index-C5Q3HutH.js";import"./PdfViewerToolbar-DTtRFJad.js";import"./Button-D3eF3jJ4.js";import"./chevron-right-DyLbJn9E.js";import"./Input-DTI33c7U.js";import"./search-BSm0Tn1z.js";import"./spin-C1E3WydG.js";import"./error-BIKnaXwT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4324/859b4aabb809e8c96d17adacb7f2c062453d6779/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
