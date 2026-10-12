import{j as n}from"./iframe-BIQDpA0w.js";import{B as e}from"./BasePdfViewer-BSQhsuJ4.js";import"./preload-helper-CAkujj7t.js";import"./index-QJcQchwi.js";import"./BasePdfViewer.module.css-CL4dNJ21.js";import"./PdfViewerAnnotationLayer-BDFPbmGy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BbSAmGy0.js";import"./PdfViewerOutlineSidebar-Bug1Qdmj.js";import"./PdfViewerSidebarHeader-CF5uHDxD.js";import"./useBaseUiId-HWzj2ccw.js";import"./useControlled-JCzKMRhN.js";import"./CompositeRoot-DzG4Vn95.js";import"./CompositeItem-k0wax-H2.js";import"./ToolbarRootContext-Cd2qP7C_.js";import"./composite-DWMEotDY.js";import"./svgIconContainer-Beiwk1zG.js";import"./PdfViewerSearchBar-U_gvR8AB.js";import"./chevron-up-9nvyOGkG.js";import"./chevron-down-C5in3kf4.js";import"./cross-BhokxWW9.js";import"./PdfViewerSidebar-C8o8J-Y6.js";import"./index-FeoDYKMl.js";import"./index-Il0_IPc9.js";import"./index-DPEDKbeA.js";import"./PdfViewerToolbar-BL0VevuK.js";import"./Button-CwWS2Nno.js";import"./chevron-right-BewvrboK.js";import"./Input-C1BIZDwN.js";import"./search-BU70SvPR.js";import"./spin-yCLZyc1E.js";import"./error-D2lGBY9x.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4200/5e6fe32b06887ee93fc781d64efa2a48b06717b7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
