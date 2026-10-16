import{j as n}from"./iframe-CE0i8pTB.js";import{B as e}from"./BasePdfViewer-ClpTTSa4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B12pLj4f.js";import"./BasePdfViewer.module.css-CZISBuQu.js";import"./PdfViewerAnnotationLayer-Bvm9IifC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIGdtS-D.js";import"./PdfViewerOutlineSidebar-CcYsxbA2.js";import"./PdfViewerSidebarHeader-BY0hdHgG.js";import"./useBaseUiId-DyVtWBOW.js";import"./useControlled-CDXR85QA.js";import"./CompositeRoot-BxThsILO.js";import"./CompositeItem-Ei3HHm0y.js";import"./ToolbarRootContext-DUj8Vy75.js";import"./composite-C3AQHTlr.js";import"./svgIconContainer-B8VYHmcD.js";import"./PdfViewerSearchBar-x1B2ni9U.js";import"./chevron-up-ChqwJ-qy.js";import"./chevron-down-D2N1M9YY.js";import"./cross-B7SwfS_M.js";import"./PdfViewerSidebar-sLONqAXk.js";import"./index-DaY6cbYZ.js";import"./index-D0yQsmtH.js";import"./index-BxLsqAz-.js";import"./PdfViewerToolbar-LHNMHoHH.js";import"./Button-CEwAliaC.js";import"./chevron-right-BSL0meFD.js";import"./Input-Bhr3RBZS.js";import"./search-B_4eoJVo.js";import"./spin-CSmDxVIi.js";import"./error-WOehnpts.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
